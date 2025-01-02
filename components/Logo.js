export default function Logo() { 
  return (
    <svg viewBox="0 0 300 80" className="w-40 h-auto">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor:"#34d399"}} />
          <stop offset="100%" style={{stopColor:"#22d3ee"}} />
        </linearGradient>
      </defs>
      <g transform="translate(10, 10)">
        <circle cx="30" cy="30" r="28" fill="none" stroke="url(#logoGradient)" strokeWidth="3"/>
        <path d="M30 10 L30 50 M10 30 L50 30" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="8" fill="url(#logoGradient)"/>
      </g>
      <text x="80" y="45" fontFamily="Arial" fontSize="32" fontWeight="bold" fill="#1f2937">
        Surgey<tspan fill="url(#logoGradient)">OS</tspan>
      </text>
    </svg>
  )
}