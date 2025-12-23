import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GraduationCap, Briefcase, Rocket, Award, BookOpen } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineYear {
  year: string;
  events: TimelineEvent[];
}

const timelineData: TimelineYear[] = [
  {
    year: '2025',
    events: [
      {
        date: 'August',
        title: 'Promoted to Software Engineer (M1)',
        description: 'Led frontend development mainly for RP (Resource Planning), managed and coordinated the team, and guided project execution for multiple features.',
        icon: <Award className="h-5 w-5" />,
      },
      {
        date: 'June',
        title: 'Started Freelancing',
        description: 'Started freelancing with my own team, building full-stack applications and web solutions. Managed all resources and coordinated contributions for each project. Successfully delivered projects for both Indian and US clients.',
        icon: <Rocket className="h-5 w-5" />,
      },
    ],
  },
  {
    year: '2024',
    events: [
      {
        date: 'Jan - Jul',
        title: 'Software Developer Intern — Nature Technology Pvt. Ltd.',
        description: 'Worked as a Software Developer Intern. Gained hands-on experience with React and Next.js on live projects.',
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        date: 'July',
        title: 'B.Tech Graduation',
        description: 'Completed B.Tech in Computer Science & Engineering with 9.3 CGPA.',
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        date: 'July',
        title: 'Junior Software Developer',
        description: 'Promoted to Junior Software Developer. Contributed to production projects and improved code quality.',
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        date: 'August',
        title: 'MBA — Business Analytics',
        description: 'Started MBA in Business Analytics at Symbiosis International University.',
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
  },
  {
    year: '2023',
    events: [
      {
        date: 'June',
        title: 'MERN Stack Developer Intern',
        description: 'Joined Ardent Computech Pvt Ltd as a MERN Stack Developer Intern. Learned React, Next.js, and built scalable websites. Explored React TypeScript and modern frontend practices.',
        icon: <Briefcase className="h-5 w-5" />,
      },
    ],
  },
];

interface TimelineDialogProps {
  children: React.ReactNode;
}

const TimelineDialog = ({ children }: TimelineDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-3xl md:text-4xl font-bold font-mono">
            Professional Timeline
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            My career progress overview — a journey of growth and achievements.
          </p>
        </DialogHeader>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {timelineData.map((yearData, yearIndex) => (
              <div key={yearData.year} className="relative">
                {/* Year badge */}
                <div className="flex justify-start md:justify-center mb-8">
                  <span className="ml-12 md:ml-0 px-6 py-2 bg-primary text-primary-foreground font-mono font-bold text-xl rounded-full">
                    {yearData.year}
                  </span>
                </div>

                {/* Events */}
                <div className="space-y-8">
                  {yearData.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`relative flex items-start gap-4 ${
                        eventIndex % 2 === 0
                          ? 'md:flex-row'
                          : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10" />

                      {/* Content card */}
                      <div
                        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                          eventIndex % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                        }`}
                      >
                        <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 text-primary rounded-lg">
                              {event.icon}
                            </div>
                            <span className="text-sm text-muted-foreground font-mono">
                              {event.date}
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TimelineDialog;
