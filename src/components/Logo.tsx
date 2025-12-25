const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <svg
        width="44"
        height="40"
        viewBox="0 0 44 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Browser Window Background */}
        <rect
          x="2"
          y="2"
          width="36"
          height="30"
          rx="3"
          fill="hsl(var(--primary))"
        />
        {/* Top bar */}
        <rect
          x="2"
          y="2"
          width="36"
          height="8"
          rx="3"
          fill="hsl(var(--primary))"
        />
        <rect
          x="2"
          y="8"
          width="36"
          height="2"
          fill="hsl(var(--primary))"
        />
        {/* White content area */}
        <rect
          x="5"
          y="12"
          width="30"
          height="17"
          rx="1"
          fill="white"
        />
        {/* Window dots */}
        <circle cx="7" cy="6" r="1.5" fill="white" />
        <circle cx="11" cy="6" r="1.5" fill="white" />
        <circle cx="15" cy="6" r="1.5" fill="white" />
        {/* Code brackets </> */}
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill="hsl(var(--primary))"
          fontFamily="monospace"
        >
          {"</>"}
        </text>
        {/* Cursor/Pointer */}
        <path
          d="M34 28L38 36L35.5 34.5L34 37L34 28Z"
          fill="hsl(var(--primary))"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>
      <span className="font-mono font-bold text-primary text-xs tracking-wider uppercase">
        Anush
      </span>
    </div>
  );
};

export default Logo;
