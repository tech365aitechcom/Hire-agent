import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Sales Voicebots', href: '/sales' },
  { name: 'Customer Support', href: '/support' },
  { name: 'AI Workflows', href: '/automation' },
  { name: 'Pricing', href: '/#pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="HireAgent Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href="https://panel.hireagent.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </a>
            </Button>
            {/* Commented out for launch - will enable when auth is ready */}
            {/* <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/40 bg-background md:hidden"
          >
            <div className="container mx-auto space-y-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://ai-call-analytics.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </a>
                </Button>
                {/* Commented out for launch - will enable when auth is ready */}
                {/* <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full">
                  Get Started
                </Button> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
