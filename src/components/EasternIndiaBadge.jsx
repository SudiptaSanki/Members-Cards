import React from 'react';

export default function EasternIndiaBadge() {
  return (
    <div className="badge-wrapper">
      {/* Crown with 6 spark lines on top */}
      <div className="crown-center">
        <svg
          className="crown-svg"
          width="74"
          height="36"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Left sparks */}
          <line x1="22" y1="13" x2="18" y2="7" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="15" y1="21" x2="6" y2="24" stroke="#FBBC04" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="19" y1="29" x2="16" y2="30" stroke="#FBBC04" strokeWidth="2.2" strokeLinecap="round" />

          {/* Right sparks */}
          <line x1="58" y1="13" x2="62" y2="7" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="65" y1="21" x2="74" y2="24" stroke="#FBBC04" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="61" y1="29" x2="64" y2="30" stroke="#FBBC04" strokeWidth="2.2" strokeLinecap="round" />

          {/* Crown Body */}
          <path
            d="M24 35L21 21L29 25L40 13L51 25L59 21L56 35H24Z"
            fill="#FBBC04"
            stroke="#FBBC04"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Tip dots */}
          <circle cx="21" cy="20" r="2.2" fill="#FBBC04" />
          <circle cx="40" cy="12" r="2.8" fill="#FBBC04" />
          <circle cx="59" cy="20" r="2.2" fill="#FBBC04" />
        </svg>
      </div>

      {/* Pill row: Left rays, yellow pill, Right rays */}
      <div className="pill-with-rays">
        {/* Left celebration rays: Red (top), Green (mid), Yellow (bot) */}
        <svg
          className="celebration-rays-svg celebration-rays-left"
          width="32"
          height="40"
          viewBox="0 0 36 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line x1="29" y1="13" x2="9" y2="2" stroke="#EA4335" strokeWidth="4.2" strokeLinecap="round" />
          <line x1="26" y1="22" x2="4" y2="22" stroke="#34A853" strokeWidth="4.2" strokeLinecap="round" />
          <line x1="29" y1="31" x2="9" y2="42" stroke="#FBBC04" strokeWidth="4.2" strokeLinecap="round" />
        </svg>

        {/* Eastern India No. 1 GDG Badge Pill */}
        <div className="eastern-india-pill">
          <img 
            src="/Buttons/Eastern India NO.1 GDG.png" 
            alt="We are Eastern India No. 1 GDG." 
          />
        </div>

        {/* Right celebration rays: Blue (top), Yellow (mid), Green (bot) */}
        <svg
          className="celebration-rays-svg celebration-rays-right"
          width="32"
          height="40"
          viewBox="0 0 36 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line x1="7" y1="13" x2="27" y2="2" stroke="#4285F4" strokeWidth="4.2" strokeLinecap="round" />
          <line x1="10" y1="22" x2="32" y2="22" stroke="#FBBC04" strokeWidth="4.2" strokeLinecap="round" />
          <line x1="7" y1="31" x2="27" y2="42" stroke="#34A853" strokeWidth="4.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
