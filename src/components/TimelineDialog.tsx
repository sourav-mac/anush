import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, Briefcase, GraduationCap, Code, Users, Award } from 'lucide-react';
import { ReactNode } from 'react';

interface TimelineDialogProps {
  children: ReactNode;
}

const timelineData = [
  {
    year: '2025',
    events: [
      {
        month: 'August',
        title: 'Promoted to Software Engineer (M1)',
        description: 'Led frontend development mainly for RP (Resource Planning), managed and coordinated the team, and guided project execution for multiple features.',
        icon: Award,
      },
      {
        month: 'June',
        title: 'Started Freelancing',
        description: 'Started freelancing with my own team, building full-stack applications and web solutions. Managed all resources and coordinated contributions for each project. Successfully delivered projects for both Indian and US clients.',
        icon: Users,
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        month: 'Jan - Jul',
        title: 'Software Developer Intern — Nature Technology Pvt. Ltd.',
        description: 'Worked as a Software Developer Intern. Gained hands-on experience with React and Next.js on live projects.',
        icon: Code,
      },
      {
        month: 'July',
        title: 'B.Tech Graduation',
        description: 'Completed B.Tech in Computer Science & Engineering with 9.3 CGPA.',
        icon: GraduationCap,
      },
      {
        month: 'July',
        title: 'Junior Software Developer',
        description: 'Promoted to Junior Software Developer. Contributed to production projects and improved code quality.',
        icon: Briefcase,
      },
      {
        month: 'August',
        title: 'MBA — Business Analytics',
        description: 'Started MBA in Business Analytics at Symbiosis International University.',
        icon: GraduationCap,
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        month: 'June',
        title: 'MERN Stack Developer Intern',
        description: 'Joined Ardent Computech Pvt Ltd as a MERN Stack Developer Intern. Learned React, Next.js, and built scalable websites. Explored React TypeScript and modern frontend practices.',
        icon: Code,
      },
    ],
  },
];

const TimelineDialog = ({ children }: TimelineDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-primary">Timeline</span>
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            My career progress overview — a journey of growth and achievements.
          </p>
        </DialogHeader>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

          {timelineData.map((yearGroup, yearIndex) => (
            <div key={yearGroup.year} className="mb-12">
              {/* Year badge */}
              <div className="flex justify-center mb-8">
                <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg z-10">
                  {yearGroup.year}
                </span>
              </div>

              {/* Events */}
              {yearGroup.events.map((event, eventIndex) => {
                const isLeft = eventIndex % 2 === 0;
                const Icon = event.icon;

                return (
                  <div
                    key={`${yearGroup.year}-${eventIndex}`}
                    className={`relative flex items-start mb-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                        <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                          {event.month}
                        </span>
                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon node */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/30">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </div>

                    {/* Empty space for alignment */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimelineDialog;
