import { Button } from '@/components/ui/button';
import { Circle, MapPin, Phone, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/your-profile', // Update with your LinkedIn
      username: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/your-username', // Update with your GitHub
      username: 'View my projects',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:pradhananush.sagar@gmail.com',
      username: 'pradhananush.sagar@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+917319229955',
      username: '+91 7319229955',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <Circle className="h-2 w-2 fill-primary text-primary animate-pulse" />
              <span className="font-mono text-sm text-primary">Open to Opportunities</span>
            </div>

            {/* Heading */}
            <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Let's <span className="text-primary">Connect!</span>
            </h2>

            {/* Subheading */}
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              I'm a passionate fresher eager to kickstart my career in tech. 
              If you're looking for a dedicated developer who loves to learn and build, 
              <span className="text-foreground font-medium"> I'd love to hear from you!</span>
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Phone' && link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Phone' && link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {link.username}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Location & CTA */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Salt Lake, Kolkata, India</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all group px-8"
                asChild
              >
                <a href="mailto:pradhananush.sagar@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send me an Email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono border-border hover:border-primary/50 transition-all group px-8"
                asChild
              >
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            {/* Recruiter Note */}
            <p className="text-sm text-muted-foreground font-mono pt-4">
              💼 Recruiters & hiring managers — I'm actively looking for entry-level roles!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
