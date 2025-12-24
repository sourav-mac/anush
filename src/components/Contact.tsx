import { Button } from '@/components/ui/button';
import { ArrowRight, Circle, Phone, Mail, Linkedin, Github, Code, Briefcase, Lightbulb, Users, Rocket, GraduationCap, Target, TrendingUp } from 'lucide-react';

const Contact = () => {
  const opportunities = [
    'Web Development',
    'Frontend / Backend Development',
    'Full-Stack Development',
    'Machine Learning / AI',
    'Software Development'
  ];

  const whyRecruitMe = [
    {
      icon: Code,
      title: 'Strong Technical Foundation',
      description: 'Good understanding of modern technologies like React, Node.js, Python, Flask, Machine Learning, and databases.'
    },
    {
      icon: Briefcase,
      title: 'Hands-On Project Experience',
      description: 'Worked on multiple academic and personal projects including web apps, AI models, and real-time applications.'
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner & Adaptable',
      description: 'Fast at learning new technologies and adapting to team environments.'
    },
    {
      icon: GraduationCap,
      title: 'Professional Work Ethics',
      description: 'Committed to writing clean code, documenting work, and delivering tasks on time.'
    }
  ];

  const whatIBring = [
    { icon: Users, title: 'Team Collaboration', description: 'Ready to work with cross-functional teams and contribute effectively.' },
    { icon: Target, title: 'Problem-Solving Mindset', description: 'Ability to break down complex problems and find efficient solutions.' },
    { icon: Rocket, title: 'Modern Tech Approach', description: 'Familiar with tools and technologies used in the industry today.' },
    { icon: TrendingUp, title: 'Growth-Oriented Attitude', description: 'Always learning, improving, and evolving.' }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10">
            <Circle className="h-1.5 w-1.5 sm:h-2 sm:w-2 fill-primary text-primary animate-pulse" />
            <span className="font-mono text-xs sm:text-sm text-primary">Actively Looking for Opportunities</span>
          </div>

          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <p className="text-muted-foreground font-mono text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-2">
            I'm a passionate Computer Science (AI & ML) student and an aspiring developer eager to contribute to real-world projects.
            If you're hiring or looking for a motivated fresher to join your tech team, I'd love to connect.
          </p>
        </div>

        {/* Opportunities Section */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 px-2">
            Currently Seeking <span className="text-primary">Internships</span>, <span className="text-primary">Full-Time Roles</span>, or <span className="text-primary">Entry-Level Positions</span> in:
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {opportunities.map((opp, index) => (
              <span 
                key={index} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs sm:text-sm"
              >
                {opp}
              </span>
            ))}
          </div>
        </div>

        {/* Connect With Me Section */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8">
            🌐 Connect With Me
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <a 
              href="https://www.linkedin.com/in/anush-pradhan-49412428a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/anushpradhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">GitHub</span>
            </a>
            <a 
              href="mailto:pradhananush.sagar@gmail.com"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">Email</span>
            </a>
            <a 
              href="tel:+917319229955"
              className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-xs sm:text-sm text-muted-foreground group-hover:text-foreground">Phone</span>
            </a>
          </div>
        </div>

        {/* Why Recruit Me Section */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8">
            ⭐ Why Recruit Me?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {whyRecruitMe.map((item, index) => (
              <div 
                key={index}
                className="p-4 sm:p-5 md:p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-mono font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">{item.title}</h4>
                    <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Bring Section */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-mono text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-8">
            🎯 What I Bring to Your Team
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {whatIBring.map((item, index) => (
              <div 
                key={index}
                className="p-3 sm:p-4 md:p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="font-mono font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-sm">{item.title}</h4>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed line-clamp-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-xl mx-auto text-center px-4">
          <p className="font-mono text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
            Feel free to reach out for any career opportunities, collaborations, or technical discussions.
          </p>
          <Button
            size="lg"
            className="font-mono text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all group px-6 sm:px-8"
            asChild
          >
            <a href="mailto:pradhananush.sagar@gmail.com">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
