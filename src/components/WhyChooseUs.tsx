import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp, Shield, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Faster Than Hiring',
    description: 'Deploy in minutes, not months. No training required.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a call. Your AI agent works around the clock.'
  },
  {
    icon: Shield,
    title: 'Zero Missed Calls',
    description: 'Every inquiry answered instantly. No voicemails, no delays.'
  },
  {
    icon: TrendingUp,
    title: 'Instant Scaling',
    description: 'Handle 10 or 10,000 calls simultaneously without hiring.'
  },
  {
    icon: DollarSign,
    title: '80% Cost Reduction',
    description: 'Dramatically lower costs compared to human agents.'
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/50 to-background" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-blue/10 px-4 py-1.5 text-sm text-neon-blue">
            Why Voice AI
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            The Unfair Advantage
            <br />
            <span className="gradient-text">Your Business Needs</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm transition-all hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/10"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
