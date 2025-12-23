import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, ChevronDown, Calendar } from 'lucide-react';

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
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anush-pradhan-49412428a', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pradhananush.sagar@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+917319229955', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello I'm
                <br />
                <span className="text-primary">Anush Pradhan</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                I'm a passionate{' '}
                <span className="text-primary typing-cursor">{displayText}</span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg font-mono text-sm">
              CSE student at Techno India University with a strong interest in programming, 
              tech innovation, and real-world problem solving. Driven, quick to learn, and 
              passionate about turning ideas into impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="outline"
                className="font-mono border-primary/30 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
                asChild
              >
                <a href="#timeline">
                  <Calendar className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Timeline
                </a>
              </Button>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative animate-float">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-primary/10 border border-primary/20" />
              
              {/* Main Illustration Placeholder */}
              <div className="relative z-10 w-96 h-96 rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-mono text-4xl text-primary font-bold">AP</span>
                  </div>
                  <p className="font-mono text-muted-foreground text-sm">CSE Student</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/50 rounded-full" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary/50 rounded-full" />
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-20 right-1/2 translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
              <span className="font-mono text-xs">Scroll Down</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
