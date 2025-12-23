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
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-2 gap-12 items-center">
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
              <TimelineDialog>
                <Button
                  variant="outline"
                  className="font-mono border-primary/30 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
                >
                  <Calendar className="mr-2 h-4 w-4 group-hover:animate-pulse" />
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
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative animate-float">
              {/* Outer Glow */}
              <div className="absolute inset-0 -m-12 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
              
              {/* Decorative Rotating Border */}
              <div className="absolute -inset-6 md:-inset-8 border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />
              
              {/* Secondary organic shape behind */}
              <div className="absolute -inset-3 bg-primary/10 backdrop-blur-sm" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
              
              {/* Main Image Container with organic blob shape */}
              <div 
                className="relative z-10 border-4 border-primary/50 shadow-2xl glow-primary"
                style={{ borderRadius: '60% 40% 55% 45% / 55% 60% 40% 45%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent z-10 pointer-events-none" style={{ borderRadius: '60% 40% 55% 45% / 55% 60% 40% 45%' }} />
                <img 
                  src={heroImage} 
                  alt="Anush Pradhan" 
                  className="w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 object-cover object-top scale-125 -translate-y-4"
                  style={{ clipPath: 'none' }}
                />
              </div>
              
              {/* Decorative Floating Elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary animate-pulse" style={{ borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%' }} />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-primary/70 animate-pulse" style={{ animationDelay: '0.5s', borderRadius: '37% 63% 43% 57% / 48% 52% 48% 52%' }} />
              <div className="absolute top-1/3 -right-8 w-4 h-4 bg-primary/50 animate-pulse" style={{ animationDelay: '1s', borderRadius: '50% 50% 43% 57% / 43% 57% 43% 57%' }} />
              <div className="absolute bottom-1/3 -left-6 w-3 h-3 bg-primary/40 animate-pulse" style={{ animationDelay: '1.5s', borderRadius: '43% 57% 50% 50% / 57% 43% 57% 43%' }} />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-20 right-1/2 translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hidden lg:flex">
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
