import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const projects = [
  {
    title: 'Fraud Detection System',
    description: 'System to detect fraudulent activities in E-commerce using pattern recognition and data analysis.',
    category: 'Data Analysis',
    image: null,
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    title: 'E-Waste Management Platform',
    description: 'Platform for efficient disposal and recycling of e-waste materials with tracking system.',
    category: 'Web Platform',
    image: null,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'AI Disaster Management',
    description: 'AI-driven system to help predict and manage disaster response strategies effectively.',
    category: 'AI/ML',
    image: null,
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Weather App',
    description: 'A beautiful, responsive weather application with real-time weather, 5-day forecasts, and air quality information.',
    category: 'Web App',
    image: null,
    color: 'from-sky-500/20 to-cyan-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <span className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">
            MY WORK
          </span>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground font-mono text-xs sm:text-sm max-w-xl mx-auto px-4">
            Here are some of my key projects showcasing my expertise in tech innovation and problem solving.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 100}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500 cursor-pointer"
            >
              {/* Project Image/Gradient */}
              <div
                className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-background/20" />
                
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-background/30 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                    <span className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-foreground/60">
                      {project.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-5 md:p-6 space-y-2">
                <h3 className="font-mono font-semibold text-base sm:text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{project.description}</p>
                <span className="inline-block font-mono text-xs text-primary/80 bg-primary/10 px-2 sm:px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
