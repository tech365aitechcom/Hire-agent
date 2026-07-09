import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { ProductShowcase } from '@/components/ProductShowcase';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { AgentGallery } from '@/components/AgentGallery';
import { HowItWorks } from '@/components/HowItWorks';
import { CallRecordings } from '@/components/CallRecordings';
import { UseCasesSection } from '@/components/UseCasesSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { PricingSection } from '@/components/PricingSection';
import { BlogSection } from '@/components/BlogSection';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hire Agent- AI Chatbot for Business in Delhi | AI Customer Support Chatbot in in Delhi</title>
        <meta
          name="description"
          content="Hire Agent AI chatbot for business with human-like voice assistants that talk, listen, and convert. Deploy fast and scale customer support effortlessly."
        />
        <meta name="keywords" content="AI voice assistant, voice AI, AI agents, phone automation, lead qualification, appointment booking, customer support AI" />
        <link rel="canonical" href="https://hireagent.co" />

        {/* Open Graph */}
        <meta property="og:title" content="Hire Agent- AI Chatbot for Business in Delhi | AI Customer Support Chatbot in in Delhi" />
        <meta property="og:description" content="Hire Agent AI chatbot for business with human-like voice assistants that talk, listen, and convert. Deploy fast and scale customer support effortlessly." />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Agent- AI Chatbot for Business in Delhi | AI Customer Support Chatbot in in Delhi" />
        <meta name="twitter:description" content="Hire Agent AI chatbot for business with human-like voice assistants that talk, listen, and convert. Deploy fast and scale customer support effortlessly." />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <TrustSection />
        <ProductShowcase />
        <FeaturesSection />
        <CapabilitiesSection />
        <AgentGallery />
        <HowItWorks />
        <CallRecordings />
        <UseCasesSection />
        <IntegrationsSection />
        <WhyChooseUs />
        <PricingSection />
        <BlogSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
