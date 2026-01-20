import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-purple/5 to-background" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-4xl font-bold lg:text-6xl">
            Start Building Voice AI
            <br />
            <span className="gradient-text">Agents Today</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Join thousands of businesses using AI voice agents to automate calls,
            qualify leads, and delight customers — all without writing code.
          </p>

          {/* Commented out for launch - will enable when signup/demo is ready */}
          {/* <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="h-5 w-5" />
              Book a Demo
            </Button>
          </div> */}

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free tier available • Deploy in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
