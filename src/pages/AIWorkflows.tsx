import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Workflow, Zap, GitBranch, RefreshCw, Database, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';

const AIWorkflows = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Build complex automation workflows with our drag-and-drop interface. No coding required.',
    },
    {
      icon: Zap,
      title: 'Instant Execution',
      description: 'Run workflows in real-time or schedule them for optimal timing.',
    },
    {
      icon: GitBranch,
      title: 'Conditional Logic',
      description: 'Create smart workflows with if/then logic, loops, and decision trees.',
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect to databases, APIs, and third-party services seamlessly.',
    },
    {
      icon: RefreshCw,
      title: 'Auto-Retry & Recovery',
      description: 'Built-in error handling and automatic retry mechanisms for reliability.',
    },
    {
      icon: Cpu,
      title: 'AI-Powered Actions',
      description: 'Leverage AI for data extraction, sentiment analysis, and intelligent routing.',
    },
  ];

  const workflows = [
    {
      category: 'Healthcare',
      title: 'Patient Intake Automation',
      description: 'Automate patient registration, insurance verification, and appointment scheduling.',
      steps: [
        'Collect patient information via voice or form',
        'Verify insurance eligibility automatically',
        'Schedule appointment based on availability',
        'Send confirmation and reminders',
      ],
    },
    {
      category: 'Real Estate',
      title: 'Lead Nurturing Pipeline',
      description: 'Automatically qualify, score, and nurture property leads through the sales funnel.',
      steps: [
        'Capture lead from website/calls',
        'Score lead based on criteria',
        'Send personalized property listings',
        'Schedule viewings automatically',
      ],
    },
    {
      category: 'Fintech',
      title: 'Loan Application Processing',
      description: 'Streamline loan applications from submission to approval with AI automation.',
      steps: [
        'Collect application details',
        'Verify documents automatically',
        'Run credit checks and scoring',
        'Route to underwriter or auto-approve',
      ],
    },
    {
      category: 'Fitness',
      title: 'Member Onboarding',
      description: 'Automate new member registration, assessment, and program assignment.',
      steps: [
        'Register new members',
        'Conduct fitness assessment',
        'Assign personalized program',
        'Schedule first training session',
      ],
    },
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Google Workspace',
    'Microsoft 365', 'Zapier', 'Make', 'Airtable', 'Notion',
  ];

  return (
    <>
      <Helmet>
        <title>Automate Customer Support Using AI in Delhi | AI Automation Service Company in Delhi</title>
        <meta
          name="description"
          content="Automate customer support using AI with a leading AI automation service company. Build no-code workflows, connect apps, and scale efficiently."
        />
        <meta name="keywords" content="AI automation, workflow automation, no-code automation, business process automation, AI workflows" />
        <link rel="canonical" href="https://hireagent.co/automation" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/20 bg-neon-purple/10 px-4 py-1.5 mb-6">
                <Workflow className="h-4 w-4 text-neon-purple" />
                <span className="text-sm font-medium">AI-Powered Automation</span>
              </div>

              <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
                Automate Anything with{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  AI Workflows
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Build intelligent automation workflows without writing code.
                Connect your apps, automate repetitive tasks, and scale your business efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90">
                  Start Automating Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Explore Templates
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
                Powerful Automation{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Features
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to build, deploy, and manage AI workflows.
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

        {/* Workflow Examples */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
                Industry-Ready{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Workflow Templates
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pre-built workflows for common business processes. Deploy in minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {workflows.map((workflow) => (
                <div
                  key={workflow.title}
                  className="p-8 rounded-lg border border-border/40 bg-gradient-to-br from-card to-card/50 hover:border-neon-purple/40 transition-all"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-sm font-medium text-neon-purple mb-4">
                    {workflow.category}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{workflow.title}</h3>
                  <p className="text-muted-foreground mb-6">{workflow.description}</p>
                  <div className="space-y-3">
                    {workflow.steps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neon-purple/10 border border-neon-purple/20 flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-neon-purple">{index + 1}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl mb-4">
                Integrate with{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  1000+ Apps
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect your favorite tools and automate workflows across your entire tech stack.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {integrations.map((integration) => (
                <div
                  key={integration}
                  className="px-6 py-3 rounded-lg border border-border/40 bg-card hover:border-neon-purple/40 transition-colors"
                >
                  <span className="font-medium">{integration}</span>
                </div>
              ))}
              <div className="px-6 py-3 rounded-lg border border-neon-purple/40 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10">
                <span className="font-medium bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  +990 more
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border border-neon-purple/20 mb-4">
                  <CheckCircle className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Save 100+ Hours/Month</h3>
                <p className="text-muted-foreground">Automate repetitive tasks and focus on high-value work.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border border-neon-purple/20 mb-4">
                  <Zap className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Deploy in Minutes</h3>
                <p className="text-muted-foreground">No coding required. Build workflows visually and go live instantly.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 border border-neon-purple/20 mb-4">
                  <RefreshCw className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">99.9% Reliability</h3>
                <p className="text-muted-foreground">Enterprise-grade infrastructure with automatic failover.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start building AI workflows today. No credit card required.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90" asChild>
              <a href="/#contact">
                Start Free Trial
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

export default AIWorkflows;
