import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ExternalLink } from 'lucide-react';
import HireMeDialog from './HireMeDialog';
import profilePhoto from '@/assets/profile-photo.jpg';

const certificates = [
  {
    title: 'IBM Data Science',
    issuer: 'IBM',
    date: '2024',
    link: '#', // Replace with actual certificate link
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM',
    date: '2024',
    link: '#',
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'Coursera',
    date: '2023',
    link: '#',
  },
  // Add more certificates here
];

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
              <HireMeDialog>
                <Button 
                  className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  Hire Me
                </Button>
              </HireMeDialog>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Border Wrapper */}
              <div className="animated-border-box rounded-2xl p-[2px]">
                {/* Profile Container */}
                <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                        <img src={profilePhoto} alt="Anush Pradhan" className="w-full h-full object-cover" />
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

        {/* Certificates Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="font-mono text-2xl md:text-3xl font-semibold">
              Certifications
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-sm text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground/70 mt-2">
                      {cert.date}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
