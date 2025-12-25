import { useInView } from '@/hooks/use-in-view';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar = ({ name, level, delay = 0 }: SkillBarProps) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-2 group">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">{name}</span>
        <span className="font-mono text-xs text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden group-hover:h-3 transition-all duration-300">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out group-hover:from-primary group-hover:to-primary/80"
          style={{ 
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
