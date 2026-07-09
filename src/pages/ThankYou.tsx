import { Helmet } from 'react-helmet-async';
import { motion, Variants } from 'framer-motion';
import { Calendar, CheckCircle2, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.42, 0, 0.58, 1] },
  }),
};

export default function ThankYou() {
  const CALENDLY_URL = "https://calendly.com/panditbhartesh/ai-voice-bot-demo";

  return (
    <>
      <Helmet>
        <title>Thank You! Schedule Your Demo | HireAgent</title>
        <meta
          name="description"
          content="Thank you for your interest. Please book your 1:1 Live Interactive Demo now to claim your 50 free minutes."
        />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;600;700;800;900&display=swap');
          .font-bebas { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }
          .font-barlow { font-family: 'Barlow', sans-serif; }
          .grain::before {
            content: '';
            position: fixed; inset: 0; z-index: 0; pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
            opacity: 0.35;
          }
        `}</style>
      </Helmet>

      <div className="grain min-h-screen bg-gray-950 text-white font-barlow overflow-x-hidden flex flex-col justify-between">

        {/* Header */}
        <header className="py-5 text-center border-b border-white/5 relative z-10">
          <span className="font-bebas text-3xl tracking-widest text-orange-400">HireAgent</span>
        </header>

        {/* Content */}
        <main className="relative flex-grow flex items-center justify-center px-4 py-16">
          {/* bg glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[800px] rounded-full bg-orange-600/10 blur-[120px]" />
          </div>

          <div className="relative max-w-2xl w-full text-center">

            {/* Step Indicator */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-green-400"
            >
              <ShieldCheck className="h-4 w-4" />
              Step 1 Complete: Details Received
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-bebas text-5xl leading-tight sm:text-6xl lg:text-7xl mb-4 text-white"
            >
              You're{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                One Step Away!
              </span>
            </motion.h1>

            {/* Instruction Subtitle */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto"
            >
              Please book your <span className="text-orange-400 font-bold">1:1 Live Interactive Demo</span> below to secure your slots and claim your <span className="text-white font-bold">50 FREE Minutes</span>.
            </motion.p>

            {/* Booking Box */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="mb-10 rounded-2xl border border-white/10 bg-gray-900/60 p-6 sm:p-8 shadow-2xl backdrop-blur-sm text-left"
            >
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-orange-400" /> What We Will Do On This Quick Call:
              </h2>
              <ul className="space-y-3.5 text-gray-300 text-sm sm:text-base mb-8">
                {[
                  "Design a custom AI voice agent for your specific industry use-case",
                  "Demonstrate live call flows and real-time response capability",
                  "Set up and test call dashboard with your team",
                  "Instantly activate your 50 FREE calling minutes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Calendly CTA Button */}
              <div className="text-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl w-full sm:w-auto font-extrabold tracking-tight text-lg sm:text-xl px-8 py-4.5 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-white shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <Calendar className="h-5 w-5 shrink-0" />
                  Book My Demo Session on Calendly
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex justify-center items-center gap-4 mt-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-orange-500/70" /> Takes only 15 minutes</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-500/70" /> 100% Free & Interactive</span>
                </div>
              </div>
            </motion.div>

          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-6 text-center text-xs text-gray-700 relative z-10">
          © 2025 HireAgent. All rights reserved. ·
          <a href="https://hireagent.co" className="ml-1 hover:text-gray-500 transition-colors">hireagent.co</a>
        </footer>

      </div>
    </>
  );
}
