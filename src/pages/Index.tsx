import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CapabilitiesSection } from '@/components/CapabilitiesSection';
import { AgentGallery } from '@/components/AgentGallery';
import { HowItWorks } from '@/components/HowItWorks';
import { UseCasesSection } from '@/components/UseCasesSection';
import { IntegrationsSection } from '@/components/IntegrationsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>VoiceAI - Build Human-Like AI Voice Assistants That Convert</title>
        <meta 
          name="description" 
          content="Deploy AI voice agents for calls, bookings, support, and lead qualification. Build human-like voice assistants without complex code. 24/7 automation." 
        />
        <meta name="keywords" content="AI voice assistant, voice AI, AI agents, phone automation, lead qualification, appointment booking, customer support AI" />
        <link rel="canonical" href="https://voiceai.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="VoiceAI - Build Human-Like AI Voice Assistants" />
        <meta property="og:description" content="Deploy AI voice agents for calls, bookings, support, and lead qualification. Build without complex code." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VoiceAI - Build Human-Like AI Voice Assistants" />
        <meta name="twitter:description" content="Deploy AI voice agents for calls, bookings, support, and lead qualification." />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <CapabilitiesSection />
        <AgentGallery />
        <HowItWorks />
        <UseCasesSection />
        <IntegrationsSection />
        <WhyChooseUs />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
