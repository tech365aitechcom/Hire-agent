import { Helmet } from 'react-helmet-async';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, Mic, Zap, PhoneCall, Clock, IndianRupee, ArrowRight, Volume2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.42, 0, 0.58, 1] },
  }),
};

const demoFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  companyName: z.string().min(1, 'Company name is required'),
  businessEmail: z.string().email('Please enter a valid email address'),
  countryCode: z.string().min(1, 'Country code is required'),
  phone: z.string().min(7, 'Phone number must be at least 7 characters').regex(/^\+?\d+$/, 'Phone number must contain digits only'),
  industry: z.string().min(1, 'Please select your industry'),
  monthlyCallVolume: z.string().min(1, 'Please select monthly call volume'),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

function CTAButton({ label = "👉 Book Your Free 1:1 Demo Now", large = false }: { label?: string; large?: boolean }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('demo-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <a
      href="#demo-form"
      onClick={handleScroll}
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

function DemoForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      countryCode: '+91',
      phone: '+91',
      industry: '',
      monthlyCallVolume: '',
    }
  });

  const watchIndustry = watch('industry');
  const watchCallVolume = watch('monthlyCallVolume');

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://hook.eu2.make.com/6ys9q7vakf2y73goisnmokuphj4ft11s', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName,
          companyName: data.companyName,
          businessEmail: data.businessEmail,
          countryCode: data.countryCode,
          phone: data.phone,
          industry: data.industry,
          monthlyCallVolume: data.monthlyCallVolume,
          submittedAt: new Date().toISOString(),
          source: 'AI Voice Agent VSL Hero Form'
        }),
      });

      if (response.ok) {
        toast.success('Form submitted successfully!');
        navigate('/thank-you');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      console.error(err);
      toast.error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="demo-form"
      className="w-full max-w-[420px] bg-gray-900 border border-orange-500/20 rounded-2xl p-6 sm:p-8 shadow-[0_12px_50px_rgba(249,115,22,0.12)] text-left text-white overflow-hidden"
    >
      {/* Header */}
      <div className="mb-6 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">
          Free 1:1 Demo
        </div>
        <h2 className="font-bebas text-2xl sm:text-3xl tracking-wide text-white">
          Request a Custom Demo
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name*"
            {...register('fullName')}
            className={`w-full bg-gray-800 text-white border ${
              errors.fullName ? 'border-red-500' : 'border-white/10'
            } px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 transition-all placeholder-gray-500 text-sm`}
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <input
            type="text"
            placeholder="Company Name*"
            {...register('companyName')}
            className={`w-full bg-gray-800 text-white border ${
              errors.companyName ? 'border-red-500' : 'border-white/10'
            } px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 transition-all placeholder-gray-500 text-sm`}
          />
          {errors.companyName && (
            <p className="text-red-400 text-xs mt-1">{errors.companyName.message}</p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <input
            type="email"
            placeholder="Business Email*"
            {...register('businessEmail')}
            className={`w-full bg-gray-800 text-white border ${
              errors.businessEmail ? 'border-red-500' : 'border-white/10'
            } px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 transition-all placeholder-gray-500 text-sm`}
          />
          {errors.businessEmail && (
            <p className="text-red-400 text-xs mt-1">{errors.businessEmail.message}</p>
          )}
        </div>

        {/* Phone Section */}
        <div>
          <div className="flex gap-2 min-w-0 overflow-hidden">
            <select
              {...register('countryCode')}
              onChange={(e) => {
                const code = e.target.value;
                setValue('countryCode', code);
                setValue('phone', code);
              }}
              className="w-[130px] min-w-0 shrink-0 bg-gray-800 border border-white/10 text-white px-2 py-3 rounded-xl focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 cursor-pointer text-xs"
            >
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+1">🇺🇸 US (+1)</option>
              <option value="+44">🇬🇧 UK (+44)</option>
              <option value="+971">🇦🇪 UAE (+971)</option>
              <option value="+1">🇨🇦 Canada (+1)</option>
              <option value="+61">🇦🇺 Australia (+61)</option>
              <option value="+65">🇸🇬 Singapore (+65)</option>
              <option value="+49">🇩🇪 Germany (+49)</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number*"
              {...register('phone')}
              className={`min-w-0 flex-1 bg-gray-800 text-white border ${
                errors.phone ? 'border-red-500' : 'border-white/10'
              } px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 transition-all placeholder-gray-500 text-sm`}
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <select
            {...register('industry')}
            className={`w-full bg-gray-800 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 cursor-pointer text-sm transition-all ${
              watchIndustry ? 'text-white' : 'text-gray-500'
            }`}
          >
            <option value="" className="text-gray-500 bg-gray-800">Industry</option>
            <option value="Healthcare" className="text-white bg-gray-800">Healthcare</option>
            <option value="Education" className="text-white bg-gray-800">Education</option>
            <option value="E-commerce" className="text-white bg-gray-800">E-commerce / Retail</option>
            <option value="Real Estate" className="text-white bg-gray-800">Real Estate</option>
            <option value="Finance" className="text-white bg-gray-800">Finance / Insurance</option>
            <option value="SaaS" className="text-white bg-gray-800">SaaS / Technology</option>
            <option value="Marketing" className="text-white bg-gray-800">Marketing / Agency</option>
            <option value="Other" className="text-white bg-gray-800">Other</option>
          </select>
          {errors.industry && (
            <p className="text-red-400 text-xs mt-1">{errors.industry.message}</p>
          )}
        </div>

        {/* Monthly Call Volume */}
        <div>
          <select
            {...register('monthlyCallVolume')}
            className={`w-full bg-gray-800 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 cursor-pointer text-sm transition-all ${
              watchCallVolume ? 'text-white' : 'text-gray-500'
            }`}
          >
            <option value="" className="text-gray-500 bg-gray-800">Monthly Call Volume*</option>
            <option value="< 5,000" className="text-white bg-gray-800">Under 5,000 mins</option>
            <option value="5,000 - 20,000" className="text-white bg-gray-800">5,000 – 20,000 mins</option>
            <option value="20,000 - 50,000" className="text-white bg-gray-800">20,000 – 50,000 mins</option>
            <option value="50,000 - 100,000" className="text-white bg-gray-800">50,000 – 100,000 mins</option>
            <option value="100,000+" className="text-white bg-gray-800">100,000+ mins</option>
          </select>
          {errors.monthlyCallVolume && (
            <p className="text-red-400 text-xs mt-1">{errors.monthlyCallVolume.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 group inline-flex items-center justify-center gap-2 rounded-xl font-extrabold tracking-tight text-base px-6 py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-red-600 text-white shadow-[0_0_24px_rgba(249,115,22,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Booking Demo...
            </>
          ) : (
            <>
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-600 mt-1">50 free minutes · No credit card required</p>
      </form>
    </div>
  );
}


const bots = [
  {
    name: "Loan Qualification Bot",
    tag: "Loan Sales",
    language: "Hindi",
    description: "AI agent pre-qualifying loan applicants over the phone, collecting KYC details, and scheduling callbacks.",
    src: "/audio/loan.mp3",
    icon: "🏦",
    stat: "60% faster qualification",
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    name: "Cardiologist Appointment Bot",
    tag: "Healthcare",
    language: "Hindi",
    description: "AI voice bot handling patient intake, appointment booking, and prescription refill inquiries for a multi-specialty clinic.",
    src: "/audio/cardio.mp3",
    icon: "🫀",
    stat: "40% fewer no-shows",
    color: "from-red-500/20 to-pink-500/10",
  },
  {
    name: "EMR Support Bot",
    tag: "Inbound Support",
    language: "English",
    description: "AI voice assistant handling Tier-1 support calls — order status, EMR queries, returns, and troubleshooting without human intervention.",
    src: "/audio/emr.mp3",
    icon: "🏥",
    stat: "85% queries resolved",
    color: "from-violet-500/20 to-purple-500/10",
  },
  {
    name: "MBA Admissions Bot",
    tag: "EdTech",
    language: "English",
    description: "AI voice bot handling MBA program inquiries, application assistance, and follow-ups for a top B-school.",
    src: "/audio/educonnect.mp3",
    icon: "🎓",
    stat: "3x more applications",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    name: "Demo Scheduling Bot",
    tag: "Demo Scheduling",
    language: "Hinglish",
    description: "AI voice bot handling product demo scheduling, prospect qualification, and calendar coordination for sales teams.",
    src: "/audio/clinicflow.mp3",
    icon: "📅",
    stat: "50% more demos booked",
    color: "from-amber-500/20 to-orange-500/10",
  },
];



const clients = [
  { name: "Rayaan Trading & Services", logo: "/brands/rayaan.png" },
  { name: "annovatixGLOBAL", logo: "/brands/annovatix.png" },
  { name: "Credo", logo: "/brands/credo-logo-B6zlxrYK.png" },
  { name: "EduConnect", logo: "/brands/EduConnect-Logo.jpg" },
  { name: "NMIMS University", logo: "/brands/nmims-university-logo.png" },
  { name: "Grest", logo: "/brands/grest.webp" },
];

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-orange-400" />,
    headline: "Get Initial 50 Minutes FREE",
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
        <title>AI Voice Bot @ ₹4.5/Minute | HireAgent — Stop Paying Huge Salaries</title>
        <meta
          name="description"
          content="Replace expensive staff with AI Voice Bots that work 24/7 at just ₹4.5/minute. Zero setup cost. 50 free minutes. Book your demo today."
        />
        <meta name="keywords" content="AI voice bot, AI calling bot, voice agent India, ₹4.5 per minute AI, HireAgent, replace receptionist AI, appointment setter bot" />
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
        <section className="relative px-4 pt-16 pb-12 overflow-hidden">
          {/* bg glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[600px] w-[900px] rounded-full bg-orange-600/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start text-center lg:text-left">
            {/* Left Column (Content & VSL) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center items-center lg:items-start">
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={0}
                className="mb-5 inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-400"
              >
                Only For Serious Business Owners
              </motion.div>

              <motion.h1
                variants={fadeUp} initial="hidden" animate="visible" custom={1}
                className="font-bebas text-5xl leading-tight sm:text-6xl lg:text-7xl xl:text-8xl mb-6 text-white text-center lg:text-left"
              >
                Every Missed Call Is{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Lost Revenue.
                </span>{' '}
                Let AI Answer{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Every One.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="visible" custom={2}
                className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed text-center lg:text-left"
              >
                We build and deploy <span className="text-orange-400 font-bold">AI voice agents</span> that never miss a lead.{' '}
                <span className="text-white font-bold">No setup fees, no automation charges</span> — just pay for the minutes you use.
              </motion.p>

              <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={3}
                className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2 mb-10 text-gray-400 font-semibold text-base"
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
                className="w-full max-w-2xl mx-auto lg:mx-0 mb-10 rounded-2xl border border-white/10 bg-gray-900 p-1 shadow-2xl"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                  <video
                    className="absolute inset-0 w-full h-full rounded-xl"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src="/video/vsl.mp4" type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5} className="lg:hidden mb-4">
                <CTAButton large />
              </motion.div>

              <motion.p
                variants={fadeUp} initial="hidden" animate="visible" custom={6}
                className="text-sm text-gray-500 lg:hidden"
              >
                Limited slots available · Book now before they fill up
              </motion.p>
            </div>

            {/* Right Column (Form) */}
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-8 mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full flex justify-center"
              >
                <DemoForm />
              </motion.div>
            </div>
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

            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              {clients.map((client, i) => (
                <motion.div
                  key={client.name}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto max-w-[180px] object-contain"
                    loading="lazy"
                  />
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {bots.map((bot, i) => (
                <motion.div
                  key={bot.name}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.9}
                  className={`relative rounded-2xl border border-white/8 bg-gradient-to-br ${bot.color} p-6 hover:border-orange-500/30 transition-colors duration-300`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{bot.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-extrabold text-white leading-tight">{bot.name}</h3>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-xs font-semibold text-orange-400 uppercase tracking-wide">
                          {bot.tag}
                        </span>
                        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-400">
                          🌐 {bot.language}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{bot.description}</p>
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                    📈 {bot.stat}
                  </div>
                  <div className="rounded-xl bg-gray-950/60 p-3 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className="h-3.5 w-3.5 text-orange-400 flex-shrink-0" />
                      <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">Real Call Recording</span>
                    </div>
                    <audio controls preload="none">
                      <source src={bot.src} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <p className="mt-2 text-xs text-gray-600 italic">Actual call recording · Not a demo script</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE COVER ── */}
        <section className="py-20 px-4 border-t border-white/5 bg-gray-900/30">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
                <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Use Cases</span>
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
                Industries We{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Cover</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                AI voice agents purpose-built for every vertical — deployed in days, not months.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: "🏡", title: "Real Estate",
                  items: ["Lead Qualification", "Property Inquiry Calls", "Site Visit Booking", "Follow-up on Missed Leads", "Project Recommendations", "Broker & Customer Support"],
                  color: "from-emerald-500/10 to-teal-500/5", border: "hover:border-emerald-500/40",
                },
                {
                  icon: "☀️", title: "Solar",
                  items: ["Lead Qualification", "Site Survey Scheduling", "Quote Follow-ups", "Installation Updates", "Service & AMC Calls", "Customer Support"],
                  color: "from-yellow-500/10 to-orange-500/5", border: "hover:border-yellow-500/40",
                },
                {
                  icon: "🚗", title: "Automotive",
                  items: ["Test Drive Booking", "Service Appointment Booking", "Sales Follow-ups", "Finance Eligibility Calls", "Customer Feedback Collection", "Service Reminders"],
                  color: "from-blue-500/10 to-cyan-500/5", border: "hover:border-blue-500/40",
                },
                {
                  icon: "🏥", title: "Healthcare",
                  items: ["Appointment Booking", "Patient Follow-ups", "Prescription & Check-up Reminders", "Lead Qualification", "FAQ & Patient Support", "Calendar Management"],
                  color: "from-red-500/10 to-pink-500/5", border: "hover:border-red-500/40",
                },
                {
                  icon: "🛒", title: "E-commerce",
                  items: ["Order Confirmation Calls", "COD Verification", "Cart Recovery Calls", "Customer Support", "Upselling & Cross-selling", "Return & Refund Assistance"],
                  color: "from-purple-500/10 to-violet-500/5", border: "hover:border-purple-500/40",
                },
                {
                  icon: "🎓", title: "EdTech",
                  items: ["Student Lead Qualification", "Counselor Callback Scheduling", "Demo Class Booking", "Course Recommendation", "Admission Follow-ups", "Fee Payment Reminders"],
                  color: "from-indigo-500/10 to-blue-500/5", border: "hover:border-indigo-500/40",
                },
                {
                  icon: "💰", title: "Finance & Insurance",
                  items: ["Lead Qualification", "EMI Reminders", "Policy Renewals", "Loan Eligibility Calls"],
                  color: "from-green-500/10 to-emerald-500/5", border: "hover:border-green-500/40",
                },
                {
                  icon: "⚖️", title: "Legal Firms",
                  items: ["Consultation Booking", "Client Follow-ups", "Case Status Updates"],
                  color: "from-amber-500/10 to-yellow-500/5", border: "hover:border-amber-500/40",
                },
                {
                  icon: "💼", title: "Recruitment",
                  items: ["Candidate Screening", "Interview Scheduling", "Follow-up Calls", "Offer Confirmation"],
                  color: "from-rose-500/10 to-pink-500/5", border: "hover:border-rose-500/40",
                },
              ].map((industry, i) => (
                <motion.div
                  key={industry.title}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                  className={`group relative rounded-2xl border border-white/8 bg-gradient-to-br ${industry.color} p-6 transition-all duration-300 ${industry.border} hover:shadow-lg hover:shadow-black/30`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{industry.icon}</span>
                    <h3 className="text-lg font-extrabold text-white">{industry.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="mx-auto max-w-4xl">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
                <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Our Process</span>
              </div>
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
                How We{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Work</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                From first call to full deployment — a simple, proven process that gets you live fast.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[28px] top-8 bottom-8 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent hidden sm:block" />

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Understand Your Requirements",
                    desc: "We analyze your business, goals, call flows, and use cases to design an AI agent tailored to your needs.",
                    icon: "🔍",
                  },
                  {
                    step: "02",
                    title: "Build Your Custom AI Agent",
                    desc: "Our team creates and configures your AI voice agent, including automations, integrations, and workflows.",
                    icon: "🛠️",
                  },
                  {
                    step: "03",
                    title: "Test with Real Scenarios",
                    desc: "We test your AI agent using real conversations and business data to ensure accurate and reliable performance.",
                    icon: "🧪",
                  },
                  {
                    step: "04",
                    title: "Refine & Optimize",
                    desc: "Based on test results and your feedback, we fine-tune the AI agent for maximum accuracy and better customer interactions.",
                    icon: "⚙️",
                  },
                  {
                    step: "05",
                    title: "Go Live & Scale",
                    desc: "Once you're completely satisfied, we deploy your AI agent and provide continuous support as your business grows.",
                    icon: "🚀",
                  },
                ].map((s, i) => (
                  <motion.div
                    key={s.step}
                    variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.8}
                    className="relative flex gap-5 sm:gap-8"
                  >
                    {/* Step number circle */}
                    <div className="relative flex-shrink-0 flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_20px_rgba(249,115,22,0.4)] text-white font-bebas text-xl z-10">
                        {s.step}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-2xl border border-white/8 bg-gray-900/60 p-6 hover:border-orange-500/30 transition-colors duration-300 group mb-2">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-2xl">{s.icon}</span>
                        <h3 className="text-lg font-extrabold text-white leading-tight pt-0.5">{s.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
          <p className="text-xs text-gray-600 mt-2">50 free minutes · No credit card required</p>
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
          <CTAButton large />
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
              <span className="text-orange-400">₹4.5/minute</span>
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
              <CTAButton large label="👉 Book Your Free 1:1 Demo Now" />
              <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-orange-500/70" /> Takes only 15 minutes</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-green-500/70" /> 50 free test minutes</span>
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
