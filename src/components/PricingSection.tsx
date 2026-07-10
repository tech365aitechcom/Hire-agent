import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'India',
    price: '₹4.5',
    period: '/minute',
    description: 'Pay-as-you-go pricing for India',
    features: [
      'No monthly commitment',
      'Unlimited AI Voice Agents',
      'Premium voices & accents',
      'CRM integrations',
      'Analytics dashboard',
      'Multi-language support',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Volume discounts',
      'Custom voice cloning',
      'Dedicated support manager',
      'White-label option',
      'SLA guarantee',
      'On-premise deployment',
      'Custom integrations',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute right-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-neon-purple/10 blur-[128px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-cyan/10 px-4 py-1.5 text-sm text-neon-cyan">
            Pricing
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Pay only for what you use. No monthly commitments, no hidden fees.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border p-8 flex flex-col justify-between ${
                plan.popular
                  ? 'border-neon-purple bg-gradient-to-b from-neon-purple/10 to-card/50'
                  : 'border-border/50 bg-card/50'
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-neon-cyan/20">
                        <Check className="h-3 w-3 text-neon-cyan" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.popular ? 'hero' : 'heroOutline'}
                className="mt-8 w-full"
                size="lg"
                asChild
              >
                <a href="#contact">
                  {plan.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
