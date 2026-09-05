import React from 'react';

export default function EasternIndiaBadge() {
  return (
    <div className="badge-wrapper">
      {/* Crown with 6 spark lines on top (interchanged middle and bottom sparks as requested) */}
      <div className="crown-center">
        <svg
          className="crown-svg"
          width="76"
          height="34"
          viewBox="0 0 260 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Left sparks */}
          {/* Top spark */}
          <line x1="67" y1="27" x2="81" y2="49" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />
          {/* Middle spark (interchanged: now LONG) */}
          <line x1="63" y1="68" x2="31" y2="78" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />
          {/* Bottom spark (interchanged: now SHORT) */}
          <line x1="73" y1="90" x2="60" y2="95" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />

          {/* Right sparks */}
          {/* Top spark */}
          <line x1="193" y1="27" x2="179" y2="49" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />
          {/* Middle spark (interchanged: now LONG) */}
          <line x1="197" y1="68" x2="229" y2="78" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />
          {/* Bottom spark (interchanged: now SHORT) */}
          <line x1="187" y1="90" x2="200" y2="95" stroke="#FBBC04" strokeWidth="8.5" strokeLinecap="round" />

          {/* Crown Body */}
          <path
            d="M85 109L75 66L100 78L130 42L160 78L185 66L175 109Z"
            fill="#FBBC04"
            stroke="#FBBC04"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Tip dots */}
          <circle cx="76" cy="64" r="6.5" fill="#FBBC04" />
          <circle cx="130" cy="40" r="8" fill="#FBBC04" />
          <circle cx="184" cy="64" r="6.5" fill="#FBBC04" />
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
