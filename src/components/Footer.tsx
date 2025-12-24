import { Mic2 } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'API Docs', 'Changelog', 'Status'],
  'Use Cases': ['Healthcare', 'Real Estate', 'SaaS', 'E-commerce', 'Agencies'],
  Resources: ['Documentation', 'Blog', 'Guides', 'Templates', 'Webinars'],
  Company: ['About', 'Careers', 'Contact', 'Partners', 'Press'],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue">
                <Mic2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">VoiceAI</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Build human-like AI voice assistants that talk, listen, and convert. 
              Deploy in minutes, scale infinitely.
            </p>
            <div className="mt-6 flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 font-display font-semibold">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VoiceAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
