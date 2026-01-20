import { Mail, Phone } from 'lucide-react';

const footerLinks = {
  Products: [
    { name: 'Sales Voicebots', href: '/sales' },
    { name: 'Customer Support', href: '/support' },
    { name: 'AI Workflows', href: '/automation' },
    { name: 'Pricing', href: '/#pricing' },
  ],
  Industries: [
    { name: 'Healthcare', href: '/#industries' },
    { name: 'Real Estate', href: '/#industries' },
    { name: 'Fintech', href: '/#industries' },
    { name: 'Fitness', href: '/#industries' },
  ],
  Company: [
    { name: 'About Us', href: '/#about' },
    { name: 'Contact Us', href: '/#contact' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="HireAgent Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Build human-like AI voice assistants that talk, listen, and convert.
              Deploy in minutes, scale infinitely.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:tech@365aitech.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground group"
              >
                <Mail className="h-4 w-4 text-neon-purple group-hover:text-neon-purple/80" />
                tech@365aitech.com
              </a>
              <a
                href="tel:+919650367990"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground group"
              >
                <Phone className="h-4 w-4 text-neon-blue group-hover:text-neon-blue/80" />
                +91 9650367990
              </a>
            </div>
            {/* Commented out for launch - will enable when social profiles are ready */}
            {/* <div className="mt-6 flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 font-display font-semibold">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
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
            © {new Date().getFullYear()} HireAgent. All rights reserved.
          </p>
          {/* Commented out for launch - will enable when legal pages are ready */}
          {/* <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
