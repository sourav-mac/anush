import { Button } from '@/components/ui/button';
import { ArrowRight, Award, GraduationCap, Calendar, MapPin, Code } from 'lucide-react';
import HireMeDialog from './HireMeDialog';
import { AnimatedSection } from './AnimatedSection';
import SkillBar from './SkillBar';
import profilePhoto from '@/assets/profile-photo.jpg';
import certGoogleCloud from '@/assets/cert-google-cloud.png';
import certIBMDataScience from '@/assets/cert-ibm-data-science.png';
import certSAPHana from '@/assets/cert-sap-hana.jpg';
import certVultrHackathon from '@/assets/cert-vultr-hackathon.jpg';

const certificates = [
  {
    title: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: 'Mar 2024',
    description: 'Professional certification validating cloud infrastructure and deployment skills.',
    image: certGoogleCloud,
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM / Coursera',
    date: 'Dec 2024',
    description: 'Comprehensive 9-course program covering Python, SQL, ML, and Data Visualization.',
    image: certIBMDataScience,
  },
  {
    title: 'SAP S/4 HANA Development',
    issuer: 'SAP University Alliances',
    date: 'Jan 2025',
    description: 'Training in enterprise SAP development conducted at Techno India University.',
    image: certSAPHana,
  },
  {
    title: 'Vultr Cloud Innovate Hackathon',
    issuer: 'GeeksforGeeks & Vultr',
    date: '2024',
    description: 'Achieved All India Rank 20 in this national cloud innovation hackathon.',
    image: certVultrHackathon,
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'AI & ML',
    institution: 'Techno India University',
    location: 'Kolkata',
    duration: '2022 - 2026',
    status: 'Currently Pursuing',
  },
  {
    degree: 'Higher Secondary (12th)',
    specialization: 'Science',
    institution: 'WBBSE Board',
    location: 'West Bengal',
    duration: '2020 - 2022',
    score: '94.08%',
  },
  {
    degree: 'Secondary (10th)',
    specialization: 'General',
    institution: 'WBBSE Board',
    location: 'West Bengal',
    duration: '2018 - 2020',
    score: '85%',
  },
];

const skills = [
  { name: 'C', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 65 },
  { name: 'SQL', level: 70 },
  { name: 'Machine Learning', level: 60 },
  { name: 'Git/GitHub', level: 75 },
  { name: 'Cloud (GCP)', level: 65 },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection animation="fade-right" className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <p className="text-muted-foreground font-mono text-xs sm:text-sm md:text-base leading-relaxed text-center lg:text-left">
              Hi, I'm <span className="text-primary font-semibold">Anush Pradhan</span>, a passionate
              CSE student at <span className="text-primary font-semibold">Techno India University</span> with 
              a strong interest in programming, tech innovation, and real-world problem solving. 
              I'm driven, quick to learn, and passionate about turning ideas into impactful solutions.
              With expertise in C, C++, HTML, CSS, and project management, I continuously evolve my 
              skills and embrace new technologies. I achieved{' '}
              <span className="text-primary font-semibold">All India Rank 20</span> in the Vulture Cloud 
              Hackathon and hold certifications from IBM.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                className="font-mono text-xs sm:text-sm border-primary/30 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
                asChild
              >
                <a href="https://www.linkedin.com/in/anush-pradhan-49412428a" target="_blank" rel="noopener noreferrer">
                  Discover More
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <HireMeDialog>
                <Button 
                  className="font-mono text-xs sm:text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                >
                  Hire Me
                </Button>
              </HireMeDialog>
            </div>
          </AnimatedSection>

          {/* Right Content - Profile Image */}
          <AnimatedSection animation="fade-left" delay={200} className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Animated Border Wrapper */}
              <div className="animated-border-box rounded-2xl p-[2px]">
                {/* Profile Container */}
                <div className="relative w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-2 border-primary/30">
                        <img src={profilePhoto} alt="Anush Pradhan" className="w-full h-full object-cover" />
                      </div>
                      <p className="font-mono text-foreground text-base sm:text-lg font-semibold">Anush Pradhan</p>
                      <p className="font-mono text-muted-foreground text-xs sm:text-sm mt-1">CSE Student | TIU Kolkata</p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-destructive" />
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500" />
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Certificates Section */}
        <AnimatedSection animation="fade-up" className="mt-12 sm:mt-16 md:mt-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
            <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold">
              Certifications
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="h-36 sm:h-44 md:h-48 overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h4 className="font-mono font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 mt-2 line-clamp-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection animation="fade-up" delay={100} className="mt-12 sm:mt-16 md:mt-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold">
              Education
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h4 className="font-mono font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                </div>
                <p className="font-mono text-xs sm:text-sm text-primary/80 mb-3">{edu.specialization}</p>
                <div className="space-y-1.5 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-primary/60" />
                    <span className="font-mono text-xs">{edu.institution}, {edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-primary/60" />
                    <span className="font-mono text-xs">{edu.duration}</span>
                  </div>
                </div>
                {edu.score && (
                  <div className="mt-3 inline-block px-2 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs border border-primary/20">
                    {edu.score}
                  </div>
                )}
                {edu.status && (
                  <div className="mt-3 inline-block px-2 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs border border-primary/30">
                    {edu.status}
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection animation="fade-up" delay={200} className="mt-12 sm:mt-16 md:mt-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
            <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold">
              Technical Skills
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                delay={index * 100}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
