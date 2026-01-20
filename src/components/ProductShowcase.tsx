import { motion } from 'framer-motion';
import { TrendingUp, Headphones, Workflow, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    icon: TrendingUp,
    title: 'Sales Voicebots',
    description: 'Automate outbound calling, lead qualification, and appointment booking. Close more deals with AI sales assistants working 24/7.',
    features: ['Lead Qualification', 'Appointment Booking', 'Follow-ups', 'CRM Integration'],
    gradient: 'from-neon-purple to-neon-blue',
    href: '/sales',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Deliver exceptional support 24/7 with AI voicebots and chatbots. Automate phone and chat support across all channels.',
    features: ['Voicebots & Chatbots', 'Omnichannel Support', 'Unified Inbox', 'Multi-language'],
    gradient: 'from-neon-blue to-neon-cyan',
    href: '/support',
  },
  {
    icon: Workflow,
    title: 'AI Workflows',
    description: 'Build intelligent automation workflows without code. Connect apps, automate tasks, and scale operations efficiently.',
    features: ['No-Code Builder', 'API Integration', 'Smart Routing', 'Auto-Retry'],
    gradient: 'from-neon-purple to-neon-pink',
    href: '/automation',
  },
];

export function ProductShowcase() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                AI Solution
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From sales automation to customer support and intelligent workflows —
              we have the AI solution your business needs.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl border border-border/40 bg-card hover:border-neon-purple/40 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} mb-6`}>
                  <product.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-neon-purple/10 group-hover:to-neon-blue/10 group-hover:border-neon-purple/40 transition-all"
                  asChild
                >
                  <a href={product.href} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 blur-xl transition-opacity group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Not sure which solution fits your needs?
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="/#contact">
              Talk to Our Team
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
