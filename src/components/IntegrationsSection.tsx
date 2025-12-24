import { motion } from 'framer-motion';

const integrations = [
  { name: 'OpenAI', category: 'LLM' },
  { name: 'Anthropic', category: 'LLM' },
  { name: 'ElevenLabs', category: 'Voice' },
  { name: 'Twilio', category: 'Phone' },
  { name: 'WhatsApp', category: 'Messaging' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'Google Calendar', category: 'Scheduling' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Make', category: 'Automation' },
  { name: 'Webhooks', category: 'API' },
  { name: 'REST APIs', category: 'API' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Discord', category: 'Communication' },
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32">
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-neon-cyan/10 blur-[128px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple">
            Integrations
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl">
            Connect with Your
            <br />
            <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Seamlessly integrate with LLMs, voice providers, CRMs, calendars, and automation platforms.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 px-4 py-3 backdrop-blur-sm transition-all hover:border-neon-purple/50 hover:shadow-lg hover:shadow-neon-purple/10"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20">
                <span className="text-sm font-bold text-neon-cyan">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium">{integration.name}</p>
                <p className="text-xs text-muted-foreground">{integration.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
