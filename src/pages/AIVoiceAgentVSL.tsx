import { Helmet } from 'react-helmet-async';
import { motion, Variants } from 'framer-motion';
import { Play, CheckCircle, Mic, Zap, PhoneCall, Clock, IndianRupee, ArrowRight, Volume2 } from 'lucide-react';

const DEMO_URL = "https://superprofile.bio/vp/ai-voice-agents";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.42, 0, 0.58, 1] },
  }),
};

function CTAButton({ label = "👉 Book Your FREE Demo Now — Get 250 Minutes FREE", large = false }: { label?: string; large?: boolean }) {
  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group inline-flex items-center gap-3 rounded-full font-extrabold tracking-tight
        bg-gradient-to-r from-orange-500 via-red-500 to-red-600
        shadow-[0_0_40px_rgba(249,115,22,0.45)]
        hover:shadow-[0_0_60px_rgba(249,115,22,0.7)]
        hover:scale-105 active:scale-[0.98]
        transition-all duration-200
        ${large ? 'text-xl px-10 py-5' : 'text-base px-7 py-4'}
        text-white
      `}
    >
      {label}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

const bots = [
  {
    name: "Cardiologist Bot",
    tag: "Healthcare Appointments",
    description: "Books cardiology consultations, collects patient history, sends reminders — zero receptionist needed.",
    src: "/audio/cardio.mp3",
    icon: "🫀",
    color: "from-red-500/20 to-pink-500/10",
  },
  {
    name: "EMR Bot",
    tag: "Electronic Medical Records",
    description: "Handles patient EMR queries, updates records, and assists clinic staff — available 24/7 without a single salary.",
    src: "/audio/emr.mp3",
    icon: "🏥",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "MBA Bot",
    tag: "Business & Admissions",
    description: "Answers MBA programme queries, qualifies applicants, and books counselling sessions automatically.",
    src: "/audio/mba.mp3",
    icon: "🎓",
    color: "from-purple-500/20 to-violet-500/10",
  },
  // {
  //   name: "Solar Bot",
  //   tag: "Solar Lead Generation",
  //   description: "Qualifies solar rooftop leads, explains savings, books site surveys — handles 300+ daily inquiries.",
  //   src: "/audio/solar-bot.mp3",
  //   icon: "☀️",
  //   color: "from-yellow-500/20 to-orange-500/10",
  // },
  // {
  //   name: "Credo Planters Bot",
  //   tag: "Nursery & Plants",
  //   description: "Handles plant inquiries, bulk orders, delivery slots — sounds like a trained sales rep.",
  //   src: "/audio/credo-planters-bot.mp3",
  //   icon: "🌱",
  //   color: "from-green-500/20 to-emerald-500/10",
  // },
  // {
  //   name: "Appointment Setter Bot",
  //   tag: "General Scheduling",
  //   description: "Calls cold leads, pitches your offer, sets appointments directly in your calendar — 24/7.",
  //   src: "/audio/appointment-setter-bot.mp3",
  //   icon: "📅",
  //   color: "from-blue-500/20 to-cyan-500/10",
  // },
  // {
  //   name: "Real Estate Bot",
  //   tag: "Property Inquiries",
  //   description: "Qualifies buyers, explains property features, schedules site visits — never misses a hot lead.",
  //   src: "/audio/real-estate-bot.mp3",
  //   icon: "🏢",
  //   color: "from-purple-500/20 to-violet-500/10",
  // },
];

const clients = [
  { name: "Rayaan Trading & Services", logo: "/brands/rayaan.png", isImage: true },
  { name: "annovatixGLOBAL", logo: "/brands/annovatix.png", isImage: true },
  { name: "SolarCorp", abbr: "SC", color: "from-yellow-400 to-orange-500" },
  { name: "MediCare Clinic", abbr: "MC", color: "from-blue-400 to-cyan-500" },
  { name: "Credo Planters", abbr: "CP", color: "from-green-400 to-emerald-500" },
  { name: "GrowthEdge", abbr: "GE", color: "from-purple-400 to-violet-500" },
];

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-orange-400" />,
    headline: "Get Initial 250 Minutes FREE",
    subheadline: "for Testing",
    desc: "Try risk-free before you pay a single rupee. No credit card. No commitment.",
  },
  {
    icon: <IndianRupee className="h-8 w-8 text-orange-400" />,
    headline: "ZERO Setup Cost",
    subheadline: "",
    desc: "No upfront fees, no hidden charges, no surprise invoices. Start deploying today.",
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-orange-400" />,
    headline: "No Fixed Connected Calls",
    subheadline: "",
    desc: "Pay only per minute used. No monthly minimums. No lock-ins. Scale as you grow.",
  },
];

export default function AIVoiceAgentVSL() {
  return (
    <>
      <Helmet>
        <title>AI Voice Bot @ ₹4/Minute | HireAgent — Stop Paying Huge Salaries</title>
        <meta
          name="description"
          content="Replace expensive staff with AI Voice Bots that work 24/7 at just ₹4/minute. Zero setup cost. 250 free minutes. Book your demo today."
        />
        <meta name="keywords" content="AI voice bot, AI calling bot, voice agent India, ₹4 per minute AI, HireAgent, replace receptionist AI, appointment setter bot" />
        <link rel="canonical" href="https://hireagent.co/ai-voice-agent-vsl" />
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
          audio {
            width: 100%;
            height: 36px;
            border-radius: 99px;
            accent-color: #f97316;
          }
          audio::-webkit-media-controls-panel {
            background: #1f2937;
          }
        `}</style>
      </Helmet>

      <div className="grain min-h-screen bg-gray-950 text-white font-barlow overflow-x-hidden">

        {/* ── HEADER ── */}
        <header className="py-5 text-center border-b border-white/5">
          <span className="font-bebas text-3xl tracking-widest text-orange-400">HireAgent</span>
        </header>

        {/* ── HERO ── */}
        <section className="relative px-4 pt-16 pb-12 text-center overflow-hidden">
          {/* bg glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[900px] rounded-full bg-orange-600/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="mb-5 inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-400"
            >
              Only For Serious Business Owners
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-bebas text-5xl leading-tight sm:text-6xl lg:text-8xl mb-6 text-white"
            >
              Tired Of Paying{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Huge Salaries
              </span>{' '}
              For Missed Calls &{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Slow Follow-Ups?
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed"
            >
              Replace Expensive Staff With An <span className="text-orange-400 font-bold">AI Voice Bot</span> That Works{' '}
              <span className="text-white font-bold">24/7 @ Just ₹4/minute</span> — Human-Like Voice, Zero Salary
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 text-gray-400 font-semibold text-base"
            >
              {["No Hiring", "No Training", "No Salary", "No Excuses"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Video */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="mx-auto mb-10 max-w-2xl rounded-2xl border border-white/10 bg-gray-900 p-1 shadow-2xl"
            >
              <video
                className="w-full rounded-xl aspect-video bg-black"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
              <CTAButton large />
            </motion.div>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={6}
              className="mt-4 text-sm text-gray-500"
            >
              Limited slots available · Book now before they fill up
            </motion.p>
          </div>
        </section>

        {/* ── OUR CLIENTS ── */}
        <section className="py-16 px-4 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bebas text-4xl sm:text-5xl text-center text-white mb-2"
            >
              Our Clients
            </motion.h2>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-center text-gray-400 mb-12 text-sm uppercase tracking-widest"
            >
              Businesses already using HireAgent Voice Bots
            </motion.p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              {clients.map((client, i) => (
                <motion.div
                  key={client.name}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.8}
                  className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  {'isImage' in client && client.isImage ? (
                    <img src={client.logo} alt={client.name} className="h-14 w-auto max-w-[160px] object-contain" loading="lazy" />
                  ) : (
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${(client as any).color} text-white font-extrabold text-lg shadow-lg`}>
                      {(client as any).abbr}
                    </div>
                  )}
                  <span className="text-xs text-gray-500 font-medium text-center max-w-[120px] leading-tight">{client.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REAL AI BOTS ── */}
        <section className="py-20 px-4 bg-gray-900/40 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
                <Volume2 className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Live Bot Recordings</span>
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
                Real AI Bots Used By Business Owners
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Listen to actual AI voice agents deployed for real businesses. This is not a robot — this is your next best employee.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {bots.map((bot, i) => (
                <motion.div
                  key={bot.name}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.9}
                  className={`relative rounded-2xl border border-white/8 bg-gradient-to-br ${bot.color} p-6 hover:border-orange-500/30 transition-colors duration-300`}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-3xl">{bot.icon}</div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white">{bot.name}</h3>
                      <span className="inline-block mt-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-0.5 text-xs font-semibold text-orange-400 uppercase tracking-wide">
                        {bot.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-5 leading-relaxed">{bot.description}</p>
                  <div className="rounded-xl bg-gray-950/60 p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className="h-3.5 w-3.5 text-orange-400 flex-shrink-0" />
                      <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">Audio Sample</span>
                    </div>
                    <audio controls preload="none">
                      <source src={bot.src} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <p className="mt-2 text-xs text-gray-600 italic">Audio sample · Contact us for a live interactive demo</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="py-14 flex flex-col items-center gap-3 px-4 text-center"
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Ready to deploy your own AI Bot?</p>
          <CTAButton large />
          <p className="text-xs text-gray-600 mt-2">250 free minutes · No credit card required</p>
        </motion.div>

        {/* ── WHY CHOOSE 365AiTech ── */}
        <section className="py-20 px-4 bg-gray-900/40 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  365AiTech?
                </span>
              </h2>
              <p className="text-gray-400 text-lg">Because your competition is already automating. Will you?</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.headline}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  className="relative rounded-2xl border border-orange-500/20 bg-gray-900 p-8 text-center hover:border-orange-500/50 hover:bg-gray-900/80 transition-all duration-300 group"
                >
                  <div className="mb-5 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                      {b.icon}
                    </div>
                  </div>
                  <CheckCircle className="mx-auto mb-3 h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-extrabold text-white leading-tight mb-1">
                    {b.headline}
                    {b.subheadline && (
                      <span className="block text-orange-400">{b.subheadline}</span>
                    )}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-3">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA 2 ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="py-14 flex flex-col items-center gap-3 px-4 text-center"
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Get started today — completely free</p>
          <CTAButton large label="👉 Claim Your 250 FREE Minutes Now" />
          <p className="text-xs text-gray-600 mt-2">ZERO setup cost · Pay only what you use</p>
        </motion.div>

        {/* ── FINAL HEADLINE ── */}
        <section className="relative py-24 px-4 overflow-hidden border-t border-white/5 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[800px] rounded-full bg-red-700/10 blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-3 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400"
            >
              The Hard Truth
            </motion.div>

            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="font-bebas text-6xl sm:text-7xl lg:text-9xl text-white leading-none mb-2"
            >
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                STOP
              </span>{' '}
              Paying Huge Salaries
            </motion.h2>

            <motion.h3
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-gray-300 mb-6"
            >
              Get AI Voice Bot Which Works @ Just{' '}
              <span className="text-orange-400">₹4/minute</span>
            </motion.h3>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
              className="mb-10 inline-block rounded-xl border border-white/10 bg-white/5 px-8 py-4"
            >
              <p className="text-xl sm:text-2xl font-bold text-white">
                No Hiring, No Salaries, No Excuses...
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Just Profits</span>
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
              className="flex flex-col items-center gap-4"
            >
              <CTAButton large label="👉 Book Your 1:1 Demo @ ₹99 — Refundable" />
              <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-orange-500/70" /> Takes only 15 minutes</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-green-500/70" /> 250 free test minutes</span>
                <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-orange-500/70" /> Go live in 48 hours</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <div className="border-t border-white/5 py-8 text-center text-xs text-gray-700 px-4">
          © 2025 HireAgent. All rights reserved. ·
          <a href="https://hireagent.co" className="ml-1 hover:text-gray-500 transition-colors">hireagent.co</a>
        </div>

      </div>
    </>
  );
}
