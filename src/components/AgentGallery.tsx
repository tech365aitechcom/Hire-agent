import { motion } from 'framer-motion';
import { Play, Settings, Stethoscope, Home, ShoppingCart, Phone, Calendar, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const agents = [
  {
    icon: Stethoscope,
    name: 'Healthcare Appointment Agent',
    description: 'Schedules patient appointments, handles rescheduling, and sends reminders',
    color: 'from-rose-500 to-pink-600'
  },
  {
    icon: Home,
    name: 'Real Estate Inquiry Agent',
    description: 'Qualifies property leads, provides listing info, and books viewings',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce Support Agent',
    description: 'Handles order inquiries, returns, and product recommendations',
    color: 'from-orange-500 to-amber-600'
  },
  {
    icon: Phone,
    name: 'Sales Qualification Agent',
    description: 'Qualifies inbound leads, captures requirements, and routes to sales',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Calendar,
    name: 'Calendar Booking Agent',
    description: 'Manages appointment scheduling across multiple calendars',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: Headphones,
    name: 'Customer Support Agent',
    description: '24/7 support for FAQs, troubleshooting, and ticket creation',
    color: 'from-cyan-500 to-blue-600'
  },
];

export function AgentGallery() {
  return (
    <section id="agents" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-neon-blue/10 blur-[128px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-blue/10 px-4 py-1.5 text-sm text-neon-blue">
            Agent Gallery
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            Pre-Built AI Voice
            <br />
            <span className="gradient-text">Agent Templates</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Start with proven templates or build custom agents. Each template is 
            optimized for specific industries and use cases.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-border hover:shadow-lg"
            >
              <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${agent.color}`}>
                <agent.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold">{agent.name}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{agent.description}</p>

              <div className="flex gap-3">
                <Button variant="hero" size="sm" className="flex-1">
                  <Play className="h-4 w-4" />
                  Talk to Agent
                </Button>
                <Button variant="glass" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
