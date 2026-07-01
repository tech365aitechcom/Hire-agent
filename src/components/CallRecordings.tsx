import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, TrendingUp, Stethoscope, Phone, Globe, BarChart3, GraduationCap, Landmark, Calendar } from 'lucide-react';

interface Recording {
  id: string;
  name: string;
  category: string;
  language: string;
  description: string;
  duration: string;
  src: string;
  stats: string;
  icon: typeof Stethoscope;
  color: string;
}

const recordings: Recording[] = [
  {
    id: 'loans',
    name: 'Loan Qualification Bot',
    category: 'Loan Sales',
    language: 'Hindi',
    description: 'AI agent pre-qualifying loan applicants over the phone, collecting KYC details, and scheduling callbacks.',
    duration: '2:05',
    src: '/audio/loan.mp3',
    stats: '60% faster qualification',
    icon: Landmark,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'healthcare',
    name: 'Cardiologist Appointment Bot',
    category: 'Healthcare',
    language: 'Hindi',
    description: 'AI voice bot handling patient intake, appointment booking, and prescription refill inquiries for a multi-specialty clinic.',
    duration: '1:24',
    src: '/audio/cardio.mp3',
    stats: '40% fewer no-shows',
    icon: Stethoscope,
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 'support',
    name: 'EMR Support Bot',
    category: 'Inbound Support',
    language: 'English',
    description: 'AI voice assistant handling Tier-1 support calls — order status, EMR queries, returns, and troubleshooting without human intervention.',
    duration: '1:55',
    src: '/audio/emr.mp3',
    stats: '85% queries resolved',
    icon: Phone,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'edtech',
    name: 'MBA Admissions Bot',
    category: 'EdTech',
    language: 'English',
    description: 'AI voice bot handling MBA program inquiries, application assistance, and follow-ups for a top B-school.',
    duration: '1:32',
    src: '/audio/educonnect.mp3',
    stats: '3x more applications',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'demosched',
    name: 'Demo Scheduling Bot',
    category: 'Demo Scheduling',
    language: 'Hinglish',
    description: 'AI voice bot handling product demo scheduling, prospect qualification, and calendar coordination for sales teams.',
    duration: '1:45',
    src: '/audio/clinicflow.mp3',
    stats: '50% more demos booked',
    icon: Calendar,
    color: 'from-amber-500 to-orange-600',
  },
];

const categories = recordings.map(r => r.category);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function CallRecordings() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [wavePhase, setWavePhase] = useState(0);
  const animFrameRef = useRef<number>(0);

  const activeRecording = recordings.find(r => r.category === activeCategory) ?? recordings[0];

  useEffect(() => {
    if (playingId) {
      let start: number;
      const animate = (t: number) => {
        if (!start) start = t;
        setWavePhase((t - start) * 0.003);
        animFrameRef.current = requestAnimationFrame(animate);
      };
      animFrameRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animFrameRef.current);
    }
  }, [playingId]);

  const togglePlay = useCallback((recording: Recording) => {
    if (playingId === recording.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      audioRef.current?.pause();
      const audio = new Audio(recording.src);
      audio.onended = () => setPlayingId(null);
      audio.play().catch(() => {});
      audioRef.current = audio;
      setPlayingId(recording.id);
    }
  }, [playingId]);

  return (
    <section id="recordings" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-neon-purple blur-[128px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.05, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-neon-cyan blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute left-2/3 top-1/2 -z-10 h-64 w-64 rounded-full bg-neon-blue blur-[120px]"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 inline-block rounded-full bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple"
          >
            Real AI Voice Bot Calls
          </motion.span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            Real
            <br />
            <span className="gradient-text">Calls</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            Listen to actual AI voice bot calls across industries. Natural conversations
            that qualify leads, book appointments, and resolve support tickets — 24/7.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <motion.div key={cat} variants={itemVariants}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`group relative overflow-hidden px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-white shadow-lg shadow-neon-purple/20'
                    : 'border border-border/50 bg-card/50 text-muted-foreground hover:text-foreground hover:border-neon-purple/40'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeCatBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRecording.id + activeCategory}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-4xl"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-neon-purple/40 hover:shadow-2xl hover:shadow-neon-purple/10">
              <div className={`absolute -inset-20 -z-10 bg-gradient-to-r ${activeRecording.color} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-[0.08]`} />

              <div className="relative h-1.5 w-full overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${activeRecording.color}`} />
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.15 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${activeRecording.color} shadow-lg`}
                      >
                        <activeRecording.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{activeRecording.name}</h3>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Globe className="h-3 w-3" />
                          {activeRecording.language}
                        </span>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-muted-foreground mb-4 max-w-lg"
                    >
                      {activeRecording.description}
                    </motion.p>

                    <div className="flex flex-wrap items-center gap-4">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.25 }}
                        className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 px-3 py-1 text-xs font-semibold text-neon-purple border border-neon-purple/20"
                      >
                        <TrendingUp className="h-3 w-3" />
                        {activeRecording.stats}
                      </motion.span>
                      <span className="text-xs text-muted-foreground">
                        {activeRecording.duration}
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <button
                      onClick={() => togglePlay(activeRecording)}
                      className="group/btn relative flex h-20 w-20 items-center justify-center"
                    >
                      <motion.span
                        animate={playingId === activeRecording.id ? {
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0, 0.3],
                        } : {
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.1, 0.2],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${activeRecording.color} opacity-20`}
                      />
                      <motion.span
                        animate={playingId === activeRecording.id ? {
                          scale: [1, 1.15, 1],
                          opacity: [0.4, 0.1, 0.4],
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                        className={`absolute inset-2 rounded-full bg-gradient-to-r ${activeRecording.color} opacity-10`}
                      />
                      <motion.span
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${activeRecording.color} shadow-lg transition-shadow duration-300 ${
                          playingId === activeRecording.id ? 'shadow-2xl' : 'hover:shadow-2xl'
                        }`}
                      >
                        <AnimatePresence mode="wait">
                          {playingId === activeRecording.id ? (
                            <motion.span
                              key="pause"
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Pause className="h-6 w-6 text-white" />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="play"
                              initial={{ scale: 0, rotate: 90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: -90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Play className="h-6 w-6 text-white ml-0.5" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.span>
                    </button>
                  </motion.div>
                </div>

                <div className="mt-8 flex items-end gap-[3px] h-16">
                  {[...Array(48)].map((_, i) => {
                    const isPlaying = playingId === activeRecording.id;
                    const freq = Math.sin(i * 0.35 + wavePhase) * 0.5 + 0.5;
                    const idleHeight = 0.15 + Math.sin(i * 0.4 + 1) * 0.08 + 0.08;
                    const height = isPlaying
                      ? freq * 0.5 + 0.2 + Math.sin(i * 0.15 + wavePhase * 0.7) * 0.15
                      : idleHeight;
                    const colorOpacity = isPlaying ? 0.9 : 0.25;

                    return (
                      <motion.div
                        key={i}
                        animate={isPlaying ? {
                          height: `${(freq * 0.5 + 0.2 + Math.sin(i * 0.15 + wavePhase * 0.7) * 0.15) * 100}%`,
                          opacity: [0.5, 1, 0.5],
                        } : {
                          height: `${idleHeight * 100}%`,
                          opacity: 0.25,
                        }}
                        transition={isPlaying ? {
                          duration: 0.2,
                          ease: 'linear',
                        } : { duration: 0.5 }}
                        className="flex-1 rounded-full"
                        style={{
                          height: `${height * 100}%`,
                          minHeight: '3px',
                          background: `linear-gradient(to top, hsl(var(--neon-purple) / ${colorOpacity * 0.5}), hsl(var(--neon-cyan) / ${colorOpacity}))`,
                          opacity: colorOpacity,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { value: '70%', label: 'Avg. Connection Rate', icon: Phone },
            { value: '45%', label: 'Higher Conversion', icon: TrendingUp },
            { value: '80%', label: 'Cost Reduction', icon: BarChart3 },
            { value: '10+', label: 'Languages Supported', icon: Globe },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/30 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-neon-purple/40 hover:bg-card/50 hover:shadow-lg hover:shadow-neon-purple/10"
            >
              <div className="absolute -inset-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-all duration-700 group-hover:translate-x-full" />
              <stat.icon className="mx-auto mb-2 h-5 w-5 text-neon-cyan transition-transform duration-300 group-hover:scale-110" />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                className="font-display text-2xl font-bold gradient-text"
              >
                {stat.value}
              </motion.div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
