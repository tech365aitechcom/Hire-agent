import { motion } from 'framer-motion';
import { Pencil, Volume2, Link, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Pencil,
    title: 'Design Your Agent',
    description: 'Create your agent persona, define goals, and write conversation flows using our intuitive builder.'
  },
  {
    number: '02',
    icon: Volume2,
    title: 'Choose Voice & Language',
    description: 'Select from premium voices with natural accents. Support for multiple languages and dialects.'
  },
  {
    number: '03',
    icon: Link,
    title: 'Connect Your Tools',
    description: 'Integrate with CRMs, calendars, APIs, and webhooks. Your agent works with your existing stack.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Go Live in Minutes',
    description: 'Deploy to phone numbers, websites, or messaging platforms. Start handling calls immediately.'
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple">
            Simple Setup
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            From Zero to Live
            <br />
            <span className="gradient-text">In Minutes</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                  <div className={`glass-card inline-block rounded-2xl p-6 ${
                    index % 2 === 0 ? 'lg:ml-auto' : ''
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-medium text-neon-cyan">{step.number}</span>
                        <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-neon-purple bg-background lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
