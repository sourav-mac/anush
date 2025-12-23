const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <svg
        width="40"
        height="36"
        viewBox="0 0 40 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Browser Window */}
        <rect
          x="2"
          y="2"
          width="36"
          height="28"
          rx="4"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        {/* Top bar dots */}
        <circle cx="8" cy="8" r="2" fill="currentColor" />
        <circle cx="14" cy="8" r="2" fill="currentColor" />
        <circle cx="20" cy="8" r="2" fill="currentColor" />
        {/* Code brackets </> */}
        <text
          x="20"
          y="23"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="currentColor"
          fontFamily="monospace"
        >
          {"</>"}
        </text>
        {/* Cursor pointer */}
        <path
          d="M32 26L36 34L33 32L31 35L32 26Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-mono font-bold text-primary text-xs tracking-wider">ANUSH</span>
    </div>
  );
};

export default Logo;
