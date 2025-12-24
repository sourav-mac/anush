import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, ChevronDown, Calendar } from 'lucide-react';
import profileDp from '@/assets/profile-dp.png';
import profileCutout from '@/assets/profile-cutout.png';
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
    <section id="home" className="min-h-[100svh] flex items-center pt-16 sm:pt-20 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hello I'm
                <br />
                <span className="text-primary">Anush Pradhan</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                I'm a passionate{' '}
                <span className="text-primary typing-cursor">{displayText}</span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 font-mono text-xs sm:text-sm">
              CSE student at Techno India University with a strong interest in programming, 
              tech innovation, and real-world problem solving. Driven, quick to learn, and 
              passionate about turning ideas into impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <TimelineDialog>
                <Button
                  variant="outline"
                  size="default"
                  className="font-mono text-xs sm:text-sm border-primary/30 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
                >
                  <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:animate-pulse" />
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
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center items-center mb-6 lg:mb-0">
            <div className="relative animate-float">
              {/* Minimal Circle Container with Green Glass Effect */}
              <div className="relative w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-full overflow-hidden">
                {/* Glass effect background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent backdrop-blur-sm border border-primary/20" />
                {/* Background Profile Image */}
                <img 
                  src={profileDp} 
                  alt="Anush Pradhan" 
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              {/* Cutout Image for 3D Pop-out Effect */}
              <img 
                src={profileCutout} 
                alt="" 
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] h-auto object-contain object-bottom pointer-events-none"
              />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-16 sm:-bottom-20 right-1/2 translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hidden lg:flex">
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
