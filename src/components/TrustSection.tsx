import { motion } from "framer-motion";

const brands = [
  { name: "Rayaan Trading & Services", logo: "/brands/rayaan.png" },
  { name: "annovatixGLOBAL", logo: "/brands/annovatix.png" },
  { name: "Credo", logo: "/brands/credo-logo-B6zlxrYK.png" },
  { name: "EduConnect", logo: "/brands/EduConnect-Logo.jpg" },
  { name: "NMIMS University", logo: "/brands/nmims-university-logo.png" },
  { name: "Grest", logo: "/brands/grest.webp" },
];
export function TrustSection() {
  return (
    <section className="border-y border-border/40 bg-card/30 py-12">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm text-muted-foreground"
        >
          Trusted by startups, clinics & automation teams worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-10 lg:gap-20"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-auto max-w-[180px] object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
