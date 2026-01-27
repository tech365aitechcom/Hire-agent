import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = [
  'All',
  'CRM',
  'Calendar',
  'Telephony',
  'Automation',
  'Customer Support',
  'Communication',
  'Analytics',
  'E-commerce',
  'Marketing',
];

const integrations = [
  // CRM
  { name: 'Salesforce', category: 'CRM', description: 'Connect with the world\'s #1 CRM platform', logo: '🔷' },
  { name: 'HubSpot', category: 'CRM', description: 'Sync contacts, deals, and activities', logo: '🟠' },
  { name: 'Zoho CRM', category: 'CRM', description: 'Integrate with Zoho\'s complete CRM suite', logo: '🔴' },
  { name: 'Pipedrive', category: 'CRM', description: 'Sales pipeline management integration', logo: '⚫' },
  { name: 'Microsoft Dynamics', category: 'CRM', description: 'Enterprise CRM integration', logo: '🔵' },

  // Calendar
  { name: 'Google Calendar', category: 'Calendar', description: 'Schedule appointments automatically', logo: '📅' },
  { name: 'Outlook Calendar', category: 'Calendar', description: 'Microsoft calendar integration', logo: '📆' },
  { name: 'Calendly', category: 'Calendar', description: 'Automated scheduling and booking', logo: '🗓️' },
  { name: 'Cal.com', category: 'Calendar', description: 'Open-source scheduling platform', logo: '📋' },

  // Telephony
  { name: 'Twilio', category: 'Telephony', description: 'Cloud communications platform', logo: '📞' },
  { name: 'RingCentral', category: 'Telephony', description: 'Business phone system integration', logo: '☎️' },
  { name: 'Vonage', category: 'Telephony', description: 'Voice and messaging APIs', logo: '📱' },
  { name: '8x8', category: 'Telephony', description: 'Contact center and voice solutions', logo: '📲' },
  { name: 'Aircall', category: 'Telephony', description: 'Cloud-based call center software', logo: '🎧' },

  // Automation
  { name: 'Zapier', category: 'Automation', description: 'Connect 5,000+ apps and automate workflows', logo: '⚡' },
  { name: 'Make', category: 'Automation', description: 'Visual automation platform', logo: '🔧' },
  { name: 'n8n', category: 'Automation', description: 'Workflow automation tool', logo: '🔄' },
  { name: 'Integromat', category: 'Automation', description: 'Advanced automation scenarios', logo: '🎯' },

  // Customer Support
  { name: 'Zendesk', category: 'Customer Support', description: 'Support ticket and helpdesk integration', logo: '💬' },
  { name: 'Freshdesk', category: 'Customer Support', description: 'Customer support software', logo: '🎫' },
  { name: 'Intercom', category: 'Customer Support', description: 'Customer messaging platform', logo: '💭' },
  { name: 'Help Scout', category: 'Customer Support', description: 'Email-based customer support', logo: '✉️' },

  // Communication
  { name: 'WhatsApp Business', category: 'Communication', description: 'WhatsApp messaging integration', logo: '💚' },
  { name: 'Slack', category: 'Communication', description: 'Team communication and notifications', logo: '💜' },
  { name: 'Microsoft Teams', category: 'Communication', description: 'Collaboration and chat platform', logo: '🟣' },
  { name: 'Telegram', category: 'Communication', description: 'Messaging platform integration', logo: '✈️' },

  // Analytics
  { name: 'Google Analytics', category: 'Analytics', description: 'Track and analyze call data', logo: '📊' },
  { name: 'Mixpanel', category: 'Analytics', description: 'Product analytics platform', logo: '📈' },
  { name: 'Amplitude', category: 'Analytics', description: 'Digital analytics platform', logo: '📉' },
  { name: 'Segment', category: 'Analytics', description: 'Customer data platform', logo: '🎲' },

  // E-commerce
  { name: 'Shopify', category: 'E-commerce', description: 'E-commerce platform integration', logo: '🛍️' },
  { name: 'WooCommerce', category: 'E-commerce', description: 'WordPress e-commerce plugin', logo: '🛒' },
  { name: 'Stripe', category: 'E-commerce', description: 'Payment processing integration', logo: '💳' },
  { name: 'PayPal', category: 'E-commerce', description: 'Online payment platform', logo: '💰' },

  // Marketing
  { name: 'Mailchimp', category: 'Marketing', description: 'Email marketing automation', logo: '📧' },
  { name: 'ActiveCampaign', category: 'Marketing', description: 'Marketing automation platform', logo: '📮' },
  { name: 'Google Ads', category: 'Marketing', description: 'Advertising platform integration', logo: '🎯' },
  { name: 'Facebook Ads', category: 'Marketing', description: 'Social media advertising', logo: '📱' },
];

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesCategory = activeCategory === 'All' || integration.category === activeCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Integrations - Connect HireAgent with Your Tech Stack | HireAgent</title>
        <meta
          name="description"
          content="Connect HireAgent with 200+ apps and tools. Integrate with CRMs, calendars, telephony systems, and more. Automate your workflow seamlessly."
        />
        <meta name="keywords" content="integrations, API, CRM integration, calendar integration, telephony integration, automation tools" />
        <link rel="canonical" href="https://hireagent.com/integrations" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
                  Connect with Your{' '}
                  <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                    Entire Tech Stack
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Integrate HireAgent with 200+ apps and tools. Sync your CRM, calendar, telephony, and more.
                  Build powerful automated workflows without code.
                </p>
              </motion.div>

              {/* Featured Integration Logos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-8 mb-12"
              >
                {['Salesforce', 'HubSpot', 'Twilio', 'Zapier', 'WhatsApp Business', 'Google Calendar', 'Zendesk', 'Slack'].map((name) => {
                  const integration = integrations.find(i => i.name === name);
                  return (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/40"
                    >
                      <span className="text-2xl">{integration?.logo}</span>
                      <span className="text-sm font-medium hidden sm:inline">{name}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="pb-12 px-4">
          <div className="container mx-auto max-w-7xl">
            {/* Search Bar */}
            <div className="mb-8 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-card/50 border-border/40"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                      : 'bg-card/50 border border-border/40 text-muted-foreground hover:text-foreground hover:border-neon-purple/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Integrations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="group p-6 rounded-xl border border-border/40 bg-card/50 hover:border-neon-purple/40 hover:bg-card transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 border border-neon-purple/20 text-2xl">
                      {integration.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-1 group-hover:text-neon-purple transition-colors">
                        {integration.name}
                      </h3>
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">
                  No integrations found. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl mb-6">
              Don't See Your Integration?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're constantly adding new integrations. Request a custom integration or use our API to build your own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Request Integration
              </a>
            
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Integrations;
