import { motion } from 'framer-motion';
import { Check, Zap, Volume2, Globe, RefreshCcw, Link2, Database } from 'lucide-react';

const capabilities = [
  { icon: Volume2, text: 'Natural human-like voice synthesis' },
  { icon: Globe, text: 'Indian & global accent support' },
  { icon: Zap, text: 'Real-time interruption handling' },
  { icon: Database, text: 'Persistent context memory' },
  { icon: RefreshCcw, text: 'Dynamic conversation flows' },
  { icon: Link2, text: 'API & webhook integration' },
];

const integrations = [
  'CRM Systems', 'Google Calendar', 'Calendly', 
  'Google Sheets', 'Slack', 'Custom APIs'
];

export function CapabilitiesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-neon-cyan/10 px-4 py-1.5 text-sm text-neon-cyan">
              Advanced Capabilities
            </span>
            <h2 className="font-display text-3xl font-bold lg:text-4xl">
              Voice AI That Feels
              <br />
              <span className="gradient-text">Truly Human</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our AI voice agents don't just read scripts — they understand, respond, 
              and adapt in real-time, creating conversations that feel natural and productive.
            </p>

            <div className="mt-8 space-y-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-purple/10">
                    <cap.icon className="h-4 w-4 text-neon-purple" />
                  </div>
                  <span className="text-foreground">{cap.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card/50 p-4">
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Works seamlessly with:
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((int) => (
                  <span
                    key={int}
                    className="rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-sm"
                  >
                    {int}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-neon-purple/20 via-neon-blue/10 to-neon-cyan/20 blur-3xl" />
            
            <div className="relative space-y-4">
              {/* Conversation Preview Card */}
              <div className="glass-card rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue" />
                  <div>
                    <p className="font-semibold">AI Voice Agent</p>
                    <p className="text-sm text-muted-foreground">Healthcare Assistant</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-neon-cyan" />
                    <span className="text-xs text-neon-cyan">Live</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="rounded-lg bg-secondary/50 p-3">
                    <p className="text-sm text-muted-foreground">
                      "Hi, I'd like to schedule an appointment with Dr. Smith"
                    </p>
                  </div>
                  <div className="rounded-lg border border-neon-purple/30 bg-neon-purple/10 p-3">
                    <p className="text-sm">
                      "Of course! I can help with that. Dr. Smith has openings tomorrow at 2 PM and 4 PM. Which works better for you?"
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-neon-cyan" />
                    <span className="text-sm text-muted-foreground">Context retained</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Response: 0.3s
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="glass-card rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-neon-purple">95%</p>
                    <p className="text-xs text-muted-foreground">Intent Match</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-neon-blue">4.9/5</p>
                    <p className="text-xs text-muted-foreground">Voice Quality</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-neon-cyan">24/7</p>
                    <p className="text-xs text-muted-foreground">Availability</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
