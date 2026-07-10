import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Headphones, Clock, MessageSquare, BarChart, Shield, Globe, ArrowRight, MessageCircle, Bot } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';

const CustomerSupport = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Provide instant support round the clock via phone and chat without hiring night shifts or weekend staff.',
    },
    {
      icon: MessageSquare,
      title: 'Omnichannel Support',
      description: 'Deploy on phone, website chat, WhatsApp, Messenger, and more. One AI, multiple channels.',
    },
    {
      icon: BarChart,
      title: 'Smart Routing',
      description: 'Automatically route complex issues to human agents while handling routine queries via voice or chat.',
    },
    {
      icon: Shield,
      title: 'Complaint Resolution',
      description: 'Handle customer complaints professionally across all channels and escalate when necessary.',
    },
    {
      icon: Globe,
      title: '50+ Languages',
      description: 'Support customers globally with multilingual AI voicebots and chatbots.',
    },
    {
      icon: Headphones,
      title: 'Unified Inbox',
      description: 'Manage all conversations (voice & chat) in one place. Create and track support tickets automatically.',
    },
  ];

  const useCases = [
    {
      title: 'Healthcare Support',
      description: 'Appointment reminders, prescription refills, and basic health inquiries.',
      benefits: ['Reduced no-shows', 'Faster prescription processing', 'Better patient satisfaction'],
    },
    {
      title: 'Fintech Support',
      description: 'Account inquiries, transaction status, and fraud alerts.',
      benefits: ['Instant account info', 'Secure authentication', '90% call deflection'],
    },
    {
      title: 'Real Estate Support',
      description: 'Property inquiries, maintenance requests, and tenant support.',
      benefits: ['24/7 tenant assistance', 'Automated scheduling', 'Lower support costs'],
    },
    {
      title: 'Fitness Support',
      description: 'Class bookings, membership inquiries, and facility information.',
      benefits: ['Automated bookings', 'Membership retention', 'Reduced admin time'],
    },
  ];

  const metrics = [
    { value: '80%', label: 'Cost Reduction' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Availability' },
    { value: '<10s', label: 'Response Time' },
  ];

  return (
    <>
      <Helmet>
        <title>AI Virtual Assistant for Business in Delhi | Best AI Automation Tools for Startups in Delhi</title>
        <meta
          name="description"
          content="AI virtual assistant for business with the best AI automation tools for startups. Streamline tasks, boost productivity, and scale operations efficiently."
        />
        <meta name="keywords" content="customer support AI, voicebot support, chatbot automation, automated customer service, AI helpdesk, 24/7 support, omnichannel support" />
        <link rel="canonical" href="https://hireagent.co/support" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/10 px-4 py-1.5 mb-6">
                <MessageCircle className="h-4 w-4 text-neon-blue" />
                <span className="text-sm font-medium">Voicebots & Chatbots</span>
              </div>

              <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
                Transform Customer Support with{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  AI Voicebots & Chatbots
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Deliver exceptional customer service 24/7 with AI voicebots and chatbots.
                Automate phone support and live chat. Reduce costs by 80% while improving customer satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  See It In Action
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="font-display text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voicebot vs Chatbot Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
                Choose Your{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Support Channel
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deploy AI voicebots for phone support and chatbots for website/app messaging.
                Or use both for omnichannel support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Voicebot Card */}
              <div className="p-8 rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 hover:border-neon-purple/40 transition-all">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue mb-6">
                  <Headphones className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">AI Voicebots</h3>
                <p className="text-muted-foreground mb-6">
                  Handle phone calls with human-like AI voice assistants. Perfect for inbound support calls, appointment confirmations, and customer inquiries.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-purple mt-1.5" />
                    <span>Natural conversation flow with sentiment detection</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-purple mt-1.5" />
                    <span>Handles multiple concurrent calls simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-purple mt-1.5" />
                    <span>Seamless transfer to human agents when needed</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-purple mt-1.5" />
                    <span>Call recording and analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-purple mt-1.5" />
                    <span>Integration with phone systems (VOIP, PBX)</span>
                  </li>
                </ul>
                <div className="p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
                  <p className="text-sm font-medium text-neon-purple">
                    Best for: Phone support, appointment reminders, order status, technical support
                  </p>
                </div>
              </div>

              {/* Chatbot Card */}
              <div className="p-8 rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/50 hover:border-neon-blue/40 transition-all">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-cyan mb-6">
                  <MessageCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">AI Chatbots</h3>
                <p className="text-muted-foreground mb-6">
                  Automate website and app messaging with intelligent chatbots. Provide instant answers, collect leads, and guide customers 24/7.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-blue mt-1.5" />
                    <span>Instant responses to FAQs and common queries</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-blue mt-1.5" />
                    <span>Rich media support (images, videos, buttons, carousels)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-blue mt-1.5" />
                    <span>Lead capture and qualification forms</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-blue mt-1.5" />
                    <span>Conversation history and context retention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-neon-blue mt-1.5" />
                    <span>Deploy on website, WhatsApp, Messenger, Slack</span>
                  </li>
                </ul>
                <div className="p-4 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                  <p className="text-sm font-medium text-neon-blue">
                    Best for: Website support, live chat, lead generation, FAQ automation, messaging apps
                  </p>
                </div>
              </div>
            </div>

            {/* Omnichannel CTA */}
            <div className="mt-12 p-8 rounded-2xl border border-neon-purple/40 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 text-center">
              <Bot className="h-12 w-12 mx-auto mb-4 text-neon-purple" />
              <h3 className="font-display text-2xl font-bold mb-3">
                Why Choose One? Get Both!
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Deploy voicebots AND chatbots for true omnichannel support. Let customers reach you however they prefer — phone or chat — with consistent AI-powered assistance.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90" asChild>
                <a href="/#contact">
                  Get Omnichannel Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
                Everything Your Support Team{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Needs
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features to automate and enhance customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-lg border border-border/40 bg-card hover:border-neon-blue/40 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/20 mb-4">
                    <feature.icon className="h-6 w-6 text-neon-blue" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
                Industry-Specific{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored support automation for your industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-8 rounded-lg border border-border/40 bg-gradient-to-br from-card to-card/50"
                >
                  <h3 className="font-display text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-neon-blue" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-6">
              Ready to Elevate Your Customer Support?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join leading companies using HireAgent to deliver world-class support.
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

export default CustomerSupport;
