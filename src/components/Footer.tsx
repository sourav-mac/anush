import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
  { icon: Send, href: '#', label: 'Telegram' },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg border-2 border-primary flex items-center justify-center">
              <span className="font-mono font-bold text-primary text-sm">DM</span>
            </div>
            <span className="font-mono text-sm text-muted-foreground">Dipak Mourya</span>
          </div>

          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
