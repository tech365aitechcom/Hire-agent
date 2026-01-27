import { motion } from 'framer-motion';

const logos = [
  'Grest', 'Codoholics', 'Magna Industry', 'Westoryboard', 'Earsolutions'
];

export function TrustSection() {
  return (
    <section className="border-y border-border/40 bg-card/30 py-12">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm text-muted-foreground"
        >
          Trusted by startups, clinics & automation teams worldwide
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-xl font-display font-semibold text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
