import { Linkedin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anush-pradhan-49412428a', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pradhananush.sagar@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+917319229955', label: 'Phone' },
];

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <a href="#home" className="order-1 sm:order-1">
            <Logo />
          </a>

          {/* Copyright */}
          <p className="font-mono text-xs sm:text-sm text-muted-foreground text-center order-3 sm:order-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
