import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'Techno India University',
    location: 'Kolkata, West Bengal',
    duration: '2022 - 2026',
    status: 'Currently Pursuing',
    achievements: [
      'Achieved All India Rank 20 in Vultr Cloud Innovate Hackathon',
      'IBM Data Science Professional Certificate holder',
      'Google Cloud Certified Associate Cloud Engineer',
      'SAP S/4 HANA Development Training'
    ]
  },
  {
    degree: 'Higher Secondary (12th)',
    specialization: 'Science Stream',
    institution: 'WBBSE Board',
    location: 'West Bengal, India',
    duration: '2020 - 2022',
    status: 'Completed',
    score: '94.08%',
    achievements: [
      'Scored 94.08% in board examinations',
      'Strong foundation in Physics, Chemistry, and Mathematics'
    ]
  },
  {
    degree: 'Secondary (10th)',
    specialization: 'General Education',
    institution: 'WBBSE Board',
    location: 'West Bengal, India',
    duration: '2018 - 2020',
    status: 'Completed',
    score: '85%',
    achievements: [
      'Scored 85% in board examinations',
      'Developed early interest in technology and programming'
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <span className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground font-mono text-xs sm:text-sm max-w-xl mx-auto px-4">
            A strong academic foundation combined with practical skills and continuous learning.
          </p>
        </AnimatedSection>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />

            {education.map((edu, index) => (
              <AnimatedSection
                key={index}
                animation="fade-left"
                delay={index * 150}
                className="relative pl-0 sm:pl-20 mb-8 sm:mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary border-4 border-background shadow-lg hidden sm:block" />

                {/* Card */}
                <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all group">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4 sm:mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        <h3 className="font-mono font-semibold text-base sm:text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="font-mono text-xs sm:text-sm text-primary/80">
                        {edu.specialization}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full font-mono text-xs ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-muted text-muted-foreground border border-border'
                      }`}>
                        {edu.status}
                      </span>
                      {edu.score && (
                        <span className="px-3 py-1 rounded-full font-mono text-xs bg-primary/10 text-primary border border-primary/20">
                          {edu.score}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary/60" />
                      <span className="font-mono text-xs sm:text-sm">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary/60" />
                      <span className="font-mono text-xs sm:text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary/60" />
                      <span className="font-mono text-xs sm:text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-mono text-xs sm:text-sm font-semibold text-foreground">Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="font-mono text-xs sm:text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
