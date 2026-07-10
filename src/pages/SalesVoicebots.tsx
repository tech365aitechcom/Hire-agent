import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, TrendingUp, Calendar, DollarSign, Users, Zap, ArrowRight } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';

const SalesVoicebots = () => {
  const features = [
    {
      icon: Phone,
      title: 'Outbound Calling',
      description: 'Automate cold calls, follow-ups, and lead nurturing with human-like conversations.',
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Schedule meetings automatically, sync with calendars, and send reminders.',
    },
    {
      icon: TrendingUp,
      title: 'Lead Qualification',
      description: 'Pre-qualify leads 24/7, score prospects, and route hot leads to your sales team.',
    },
    {
      icon: DollarSign,
      title: 'Product Demos',
      description: 'Deliver personalized product demos and answer common sales questions instantly.',
    },
    {
      icon: Users,
      title: 'Multi-Language Support',
      description: 'Reach global markets with voicebots that speak 50+ languages fluently.',
    },
    {
      icon: Zap,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with Salesforce, HubSpot, and other sales tools.',
    },
  ];

  const industries = [
    {
      name: 'Real Estate',
      description: 'Schedule property viewings, qualify buyers, and follow up on listings automatically.',
      stats: '3x more viewings booked',
    },
    {
      name: 'Fintech',
      description: 'Qualify loan applicants, schedule consultations, and provide product information.',
      stats: '60% reduction in sales cycle',
    },
    {
      name: 'Healthcare',
      description: 'Book patient consultations, promote wellness programs, and conduct health surveys.',
      stats: '85% appointment show-up rate',
    },
    {
      name: 'Fitness',
      description: 'Sign up new members, book training sessions, and re-engage dormant customers.',
      stats: '45% increase in memberships',
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI virtual assistant for business in Delhi | AI automation tools for business in Delhi | AI voice bot in Delhi</title>
        <meta
          name="description"
          content="Deploy AI voice agents for calls, bookings, support, and lead qualification. Build human-like voice assistants without complex code."
        />
        <meta name="keywords" content="sales voicebot, AI sales automation, lead qualification, appointment booking, outbound calling AI" />
        <link rel="canonical" href="https://hireagent.co/sales" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/20 bg-neon-purple/10 px-4 py-1.5 mb-6">
                <TrendingUp className="h-4 w-4 text-neon-purple" />
                <span className="text-sm font-medium">AI-Powered Sales Automation</span>
              </div>

              <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
                Scale Your Sales Team with{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  AI Voicebots
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Automate outbound calls, qualify leads, and book appointments 24/7.
                Never miss a sales opportunity with human-like AI voice assistants.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
                Everything You Need to{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Close More Deals
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to automate your entire sales pipeline.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-lg border border-border/40 bg-card hover:border-neon-purple/40 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border border-neon-purple/20 mb-4">
                    <feature.icon className="h-6 w-6 text-neon-purple" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
                Proven Results Across{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Industries
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how businesses like yours are crushing their sales goals with AI voicebots.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="p-8 rounded-lg border border-border/40 bg-gradient-to-br from-card to-card/50 hover:border-neon-purple/40 transition-all"
                >
                  <h3 className="font-display text-2xl font-bold mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-neon-purple/10 px-4 py-2 border border-neon-purple/20">
                    <TrendingUp className="h-4 w-4 text-neon-purple" />
                    <span className="text-sm font-semibold text-neon-purple">{industry.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-6">
              Ready to 10x Your Sales Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of companies using HireAgent to automate their sales process.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90" asChild>
              <a href="/#contact">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default SalesVoicebots;
