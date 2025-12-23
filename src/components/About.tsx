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
              Hi, I'm <span className="text-primary font-semibold">Dipak Mourya</span>, a passionate
              Software Developer with hands-on experience in real-time projects and a strong focus
              on building scalable, efficient solutions. I continuously evolve my skills and embrace
              new technologies. With a degree in Computer Science Engineering, I enhance my
              efficiency in software development. Currently, I'm pursuing an{' '}
              <span className="text-primary font-semibold">
                Master of Business Administration (MBA)
              </span>{' '}
              in Business Analytics, merging my technical expertise with business insight for
              impactful results.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="font-mono border-primary/30 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
              >
                Discover More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                Hire Me
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
                      <span className="font-mono text-5xl text-primary font-bold">DM</span>
                    </div>
                    <p className="font-mono text-foreground text-lg font-semibold">Dipak Mourya</p>
                    <p className="font-mono text-muted-foreground text-sm mt-1">Software Developer</p>
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
