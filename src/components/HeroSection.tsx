import { motion } from 'framer-motion';
import { Play, ArrowRight, PhoneIncoming, UserCheck, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingCards = [
  { 
    icon: PhoneIncoming, 
    text: 'Inbound Call Answered', 
    delay: 0,
    position: 'top-32 left-4 lg:left-16'
  },
  { 
    icon: UserCheck, 
    text: 'Lead Qualified', 
    delay: 0.2,
    position: 'top-48 right-4 lg:right-12'
  },
  { 
    icon: CalendarCheck, 
    text: 'Appointment Booked', 
    delay: 0.4,
    position: 'bottom-48 left-8 lg:left-24'
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neon-purple/20 blur-[128px]" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-neon-blue/20 blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-neon-cyan/15 blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Wave Animation */}
        <div className="wave-animation absolute bottom-0 left-0 right-0 h-64 opacity-30" />
      </div>

      <div className="container relative mx-auto px-6 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
            </span>
            <span className="text-sm text-muted-foreground">AI Voice Technology</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl"
          >
            Build Human-Like AI Voice
            <br />
            <span className="gradient-text">Assistants That Convert</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl"
          >
            Deploy AI voice agents for calls, bookings, support, and lead qualification — 
            without writing complex code. Talk, listen, and convert 24/7.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="hero" size="xl" className="group">
              <Play className="h-5 w-5 transition-transform group-hover:scale-110" />
              Try Live Demo
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              Build Your Agent
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8"
          >
            {[
              { value: '10M+', label: 'Calls Handled' },
              { value: '99.9%', label: 'Uptime' },
              { value: '<500ms', label: 'Response Time' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating Cards */}
        {floatingCards.map((card, index) => (
          <motion.div
            key={card.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + card.delay }}
            className={`absolute hidden lg:block ${card.position}`}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              className="glass-card flex items-center gap-3 rounded-xl px-4 py-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20">
                <card.icon className="h-5 w-5 text-neon-cyan" />
              </div>
              <span className="text-sm font-medium">{card.text}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
