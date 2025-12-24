import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Home, Laptop, GraduationCap, ShoppingBag, Building2 } from 'lucide-react';

const useCases = [
  {
    id: 'healthcare',
    icon: Stethoscope,
    name: 'Healthcare',
    problem: 'Missed calls lead to lost patients. Staff overwhelmed with scheduling.',
    solution: 'AI agents handle appointment booking, reminders, and patient inquiries 24/7 — reducing no-shows by 40%.'
  },
  {
    id: 'realestate',
    icon: Home,
    name: 'Real Estate',
    problem: 'Agents miss inquiries during showings. Lead response time too slow.',
    solution: 'Voice AI qualifies leads instantly, provides property details, and schedules viewings — capturing every opportunity.'
  },
  {
    id: 'saas',
    icon: Laptop,
    name: 'SaaS',
    problem: 'Support tickets pile up. Sales calls go to voicemail.',
    solution: 'AI handles tier-1 support and qualifies inbound leads, letting your team focus on high-value conversations.'
  },
  {
    id: 'education',
    icon: GraduationCap,
    name: 'Education',
    problem: 'Admission inquiries during peak season overwhelm staff.',
    solution: 'Voice agents answer FAQs, schedule campus tours, and collect applicant information around the clock.'
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    name: 'E-commerce',
    problem: 'Cart abandonment and return inquiries create support burden.',
    solution: 'AI provides order status, handles returns, and offers product recommendations — increasing satisfaction.'
  },
  {
    id: 'agencies',
    icon: Building2,
    name: 'Agencies',
    problem: 'Clients need automation but building voice AI is complex.',
    solution: 'White-label voice AI solutions for your clients. Build once, deploy everywhere, earn recurring revenue.'
  },
];

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section id="usecases" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-cyan/10 px-4 py-1.5 text-sm text-neon-cyan">
            Industry Solutions
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            Voice AI for
            <br />
            <span className="gradient-text">Every Industry</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Industry Tabs */}
          <div className="space-y-2 lg:col-span-1">
            {useCases.map((useCase) => (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveCase(useCase)}
                whileHover={{ x: 4 }}
                className={`flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all ${
                  activeCase.id === useCase.id
                    ? 'border border-neon-purple/50 bg-neon-purple/10'
                    : 'border border-transparent bg-card/50 hover:bg-card'
                }`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  activeCase.id === useCase.id
                    ? 'bg-gradient-to-br from-neon-purple to-neon-blue'
                    : 'bg-secondary'
                }`}>
                  <useCase.icon className={`h-5 w-5 ${
                    activeCase.id === useCase.id ? 'text-white' : 'text-muted-foreground'
                  }`} />
                </div>
                <span className={`font-medium ${
                  activeCase.id === useCase.id ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {useCase.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue">
                    <activeCase.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{activeCase.name}</h3>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                    <p className="mb-2 text-sm font-medium text-destructive">The Problem</p>
                    <p className="text-foreground">{activeCase.problem}</p>
                  </div>

                  <div className="rounded-xl border border-neon-cyan/30 bg-neon-cyan/10 p-4">
                    <p className="mb-2 text-sm font-medium text-neon-cyan">The Solution</p>
                    <p className="text-foreground">{activeCase.solution}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
