import { Button } from '@/components/ui/button';
import { ArrowRight, Circle, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
            <Circle className="h-2 w-2 fill-primary text-primary animate-pulse" />
            <span className="font-mono text-sm text-primary">Actively seeking opportunities</span>
          </div>

          {/* Heading */}
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Fresh graduate ready to
            <br />
            <span className="text-primary">make an impact.</span>
          </h2>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground font-mono text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+91 7319229955</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>pradhananush.sagar@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Salt Lake, Kolkata</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all group px-8"
            asChild
          >
            <a href="mailto:pradhananush.sagar@gmail.com?subject=Job Opportunity Inquiry">
              Hire Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
