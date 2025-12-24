import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, ChevronDown, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';
import TimelineDialog from './TimelineDialog';

const roles = ['CSE Student', 'Tech Innovator', 'Problem Solver', 'Freelance Developer'];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Anush005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anush-pradhan-49412428a', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pradhananush.sagar@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+917319229955', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-[100svh] flex items-center pt-20 pb-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 lg:gap-12 animate-fade-in">
          
          {/* Profile Image - Clean Round */}
          <div className="relative">
            <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-border/30 bg-muted/10">
              <img 
                src={heroImage} 
                alt="Anush Pradhan" 
                className="w-full h-full object-cover object-top scale-125"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 max-w-2xl">
            <div className="space-y-3">
              <p className="font-mono text-sm text-muted-foreground">Hello, I'm</p>
              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold">
                Anush Pradhan
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                <span className="text-primary typing-cursor">{displayText}</span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed font-mono text-sm max-w-lg mx-auto">
              CSE student with a strong interest in programming, tech innovation, and real-world problem solving.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <TimelineDialog>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-mono text-sm rounded-full px-6 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Timeline
                </Button>
              </TimelineDialog>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground pt-8">
            <span className="font-mono text-xs">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
