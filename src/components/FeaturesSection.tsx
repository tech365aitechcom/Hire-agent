import { motion } from 'framer-motion';
import { Mic, Brain, Phone, MessageSquare, Workflow, Globe } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'AI Voice Assistants',
    description: 'Human-like voices that talk naturally with your customers',
    gradient: 'from-neon-purple to-neon-blue'
  },
  {
    icon: Brain,
    title: 'AI Agents with Memory',
    description: 'Context-aware conversations that remember every interaction',
    gradient: 'from-neon-blue to-neon-cyan'
  },
  {
    icon: Phone,
    title: 'Phone Automation',
    description: 'Handle inbound & outbound calls at scale, 24/7',
    gradient: 'from-neon-cyan to-neon-purple'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Integration',
    description: 'Extend your voice AI to messaging platforms seamlessly',
    gradient: 'from-neon-purple to-neon-pink'
  },
  {
    icon: Workflow,
    title: 'Smart Workflows',
    description: 'Automate lead qualification, booking, and follow-ups',
    gradient: 'from-neon-pink to-neon-blue'
  },
  {
    icon: Globe,
    title: 'Global Languages',
    description: 'Support for Indian & international accents and languages',
    gradient: 'from-neon-blue to-neon-purple'
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/10 blur-[128px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple">
            Platform Capabilities
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            Everything You Need for
            <br />
            <span className="gradient-text">Voice AI Automation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Build, deploy, and scale AI voice agents that handle calls, qualify leads, 
            book appointments, and provide support — all automatically.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/10"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-card">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
              </div>
              
              <h3 className="mb-2 font-display text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
