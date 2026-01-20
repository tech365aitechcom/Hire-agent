import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, Loader2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface VoiceRecorderProps {
  agentName: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Extend Window interface for browser speech APIs
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export function VoiceRecorder({ agentName }: VoiceRecorderProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [audioLevel, setAudioLevel] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const shouldResumeListeningRef = useRef(false);
  const isProcessingRef = useRef(false);

  useEffect(() => {
    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError('Speech recognition not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      setCurrentTranscript(finalTranscript || interimTranscript);

      if (finalTranscript) {
        handleUserSpeech(finalTranscript.trim());
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      if (event.error !== 'no-speech') {
        setError(`Recognition error: ${event.error}`);
        setIsListening(false);
      }
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const visualizeAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      const analyser = audioContext.createAnalyser();
      analyserRef.current = analyser;
      const microphone = audioContext.createMediaStreamSource(stream);
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      microphone.connect(analyser);

      const updateLevel = () => {
        if (!analyserRef.current || !isListening) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / bufferLength;
        setAudioLevel(average / 255);
        animationFrameRef.current = requestAnimationFrame(updateLevel);
      };
      updateLevel();
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const handleUserSpeech = async (transcript: string) => {
    if (!transcript || transcript.length < 3) return;

    // Prevent processing if already processing or speaking
    if (isProcessingRef.current || isSpeaking) {
      console.log('Ignoring speech - already processing or speaking');
      return;
    }

    isProcessingRef.current = true;
    const userMessage: Message = {
      role: 'user',
      content: transcript,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentTranscript('');
    setIsProcessing(true);

    try {
      const systemPrompt = `You are ${agentName}, a helpful AI voice assistant. Keep responses concise and conversational since they will be spoken aloud. Aim for 2-3 sentences unless more detail is requested.`;

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: transcript },
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      console.log('Groq response:', data);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} - ${data.error?.message || JSON.stringify(data)}`);
      }

      if (!data.choices || !data.choices[0]?.message?.content) {
        throw new Error(`Invalid response format: ${JSON.stringify(data)}`);
      }

      const assistantResponse = data.choices[0].message.content;

      const assistantMessage: Message = {
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      speakResponse(assistantMessage.content);
    } catch (err: any) {
      console.error('Error processing speech:', err);
      setError(err.message || 'Failed to get response from AI. Please try again.');
      setIsProcessing(false);
      isProcessingRef.current = false;
    }
  };

  const speakResponse = (text: string) => {
    if (!window.speechSynthesis) {
      setError('Text-to-speech not supported in this browser.');
      setIsProcessing(false);
      isProcessingRef.current = false;
      return;
    }

    // Stop listening IMMEDIATELY before speaking
    shouldResumeListeningRef.current = isListening;
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setAudioLevel(0);
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsProcessing(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      isProcessingRef.current = false;

      // Resume listening after a longer delay to avoid echo
      if (shouldResumeListeningRef.current) {
        setTimeout(async () => {
          try {
            await visualizeAudio();
            recognitionRef.current?.start();
            setIsListening(true);
          } catch (err) {
            console.error('Error resuming listening:', err);
          }
        }, 1000); // Increased delay to 1 second
      }
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      setIsSpeaking(false);
      setIsProcessing(false);
      isProcessingRef.current = false;

      // Resume listening even on error if it was listening before
      if (shouldResumeListeningRef.current && event.error !== 'interrupted') {
        setTimeout(async () => {
          try {
            await visualizeAudio();
            recognitionRef.current?.start();
            setIsListening(true);
          } catch (err) {
            console.error('Error resuming listening:', err);
          }
        }, 1000);
      }
    };

    synthesisRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const toggleListening = async () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setAudioLevel(0);
      shouldResumeListeningRef.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    } else {
      setError(null);
      isProcessingRef.current = false;
      try {
        await visualizeAudio();
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        setError('Unable to access microphone. Please grant permission.');
      }
    }
  };

  const resetConversation = () => {
    setMessages([]);
    setCurrentTranscript('');
    setError(null);
    if (isListening) {
      toggleListening();
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setIsProcessing(false);
    isProcessingRef.current = false;
    shouldResumeListeningRef.current = false;
  };

  return (
    <div className="flex flex-col gap-6 p-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h3 className="font-display text-2xl font-bold">Talk to {agentName}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {isListening ? 'Listening... speak naturally' : 'Click the microphone to start talking'}
        </p>
      </div>

      {/* Status and Visualizer */}
      <div className="relative flex h-32 w-full items-center justify-center">
        <AnimatePresence>
          {isListening && (
            <motion.div
              key="listening"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center gap-1"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: `${20 + audioLevel * 80 * (Math.random() * 0.5 + 0.5)}%`,
                  }}
                  transition={{ duration: 0.1 }}
                  className="w-1 rounded-full bg-gradient-to-t from-neon-purple to-neon-cyan"
                />
              ))}
            </motion.div>
          )}

          {isSpeaking && (
            <motion.div
              key="speaking"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Volume2 className="h-10 w-10 text-neon-cyan" />
              </motion.div>
            </motion.div>
          )}

          {isProcessing && !isSpeaking && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"
            >
              <Loader2 className="h-10 w-10 text-neon-cyan animate-spin" />
            </motion.div>
          )}

          {!isListening && !isSpeaking && !isProcessing && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20"
            >
              <Mic className="h-10 w-10 text-neon-cyan" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Current Transcript */}
      {currentTranscript && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/20"
        >
          <p className="text-sm text-muted-foreground italic">{currentTranscript}</p>
        </motion.div>
      )}

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-500/10 border border-red-500/20"
        >
          <p className="text-sm text-red-400">{error}</p>
        </motion.div>
      )}

      {/* Controls */}
      <div className="flex gap-4 justify-center">
        <Button
          variant={isListening ? 'destructive' : 'hero'}
          size="lg"
          onClick={toggleListening}
          disabled={isSpeaking || isProcessing}
          className="gap-2"
        >
          {isListening ? (
            <>
              <MicOff className="h-5 w-5" />
              Stop Listening
            </>
          ) : (
            <>
              <Mic className="h-5 w-5" />
              Start Talking
            </>
          )}
        </Button>

        {messages.length > 0 && (
          <Button
            variant="outline"
            size="lg"
            onClick={resetConversation}
            className="gap-2"
          >
            <RotateCcw className="h-5 w-5" />
            Reset
          </Button>
        )}
      </div>

      {/* Conversation History */}
      {messages.length > 0 && (
        <div className="mt-6">
          <h4 className="font-display text-lg font-semibold mb-4">Conversation</h4>
          <ScrollArea className="h-[400px] rounded-lg border border-border/50 bg-card/30 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.role === 'user' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.role === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30'
                        : 'bg-gradient-to-r from-neon-cyan/20 to-neon-green/20 border border-neon-cyan/30'
                    }`}
                  >
                    <p className="text-sm font-semibold mb-1">
                      {message.role === 'user' ? 'You' : agentName}
                    </p>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground">
        Powered by Groq (Llama 3.3) and Web Speech API
      </p>
    </div>
  );
}
