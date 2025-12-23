import { Linkedin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anush-pradhan-49412428a', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pradhananush.sagar@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+917319229955', label: 'Phone' },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home">
            <Logo />
          </a>

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
                target="_blank"
                rel="noopener noreferrer"
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
