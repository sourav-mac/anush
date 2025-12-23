import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <p className="text-muted-foreground font-mono text-sm md:text-base leading-relaxed">
              Hi, I'm <span className="text-primary font-semibold">Anush Pradhan</span>, a passionate
              CSE student at <span className="text-primary font-semibold">Techno India University</span> with 
              a strong interest in programming, tech innovation, and real-world problem solving. 
              I'm driven, quick to learn, and passionate about turning ideas into impactful solutions.
              With expertise in C, C++, HTML, CSS, and project management, I continuously evolve my 
              skills and embrace new technologies. I achieved{' '}
              <span className="text-primary font-semibold">All India Rank 20</span> in the Vulture Cloud 
              Hackathon and hold certifications from IBM.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="font-mono border-primary/30 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
                asChild
              >
                <a href="https://www.linkedin.com/in/anush-pradhan-49412428a" target="_blank" rel="noopener noreferrer">
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                asChild
              >
                <a href="mailto:pradhananush.sagar@gmail.com">
                  Hire Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" />
              
              {/* Profile Container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                      <span className="font-mono text-5xl text-primary font-bold">AP</span>
                    </div>
                    <p className="font-mono text-foreground text-lg font-semibold">Anush Pradhan</p>
                    <p className="font-mono text-muted-foreground text-sm mt-1">CSE Student | TIU Kolkata</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
