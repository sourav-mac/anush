import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 3, label: 'Projects', sublabel: 'Completed' },
  { value: 20, label: 'AIR Rank', sublabel: 'Hackathon' },
  { value: 6, label: 'Technical', sublabel: 'Skills' },
  { value: 94, label: 'Percent', sublabel: '12th Grade' },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center lg:justify-start">
              <span className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                {counts[index]}
              </span>
              <div className="text-center sm:text-left">
                <p className="text-muted-foreground text-xs sm:text-sm font-mono">{stat.label}</p>
                <p className="text-muted-foreground text-xs sm:text-sm font-mono">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
