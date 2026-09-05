import React from 'react';

export default function EasternIndiaBadge() {
  return (
    <div className="badge-wrapper">
      {/* Crown with 6 spark lines on top (exact vectors from reference image) */}
      <div className="crown-center">
        <svg
          className="crown-svg"
          width="78"
          height="30"
          viewBox="0 0 652 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Left sparks */}
          {/* Top spark */}
          <line x1="138" y1="40" x2="154" y2="88" stroke="#FBBC04" strokeWidth="16" strokeLinecap="round" />
          {/* Middle spark (LONG ray angled up-outward) */}
          <line x1="116" y1="167" x2="9" y2="116" stroke="#FBBC04" strokeWidth="18" strokeLinecap="round" />
          {/* Bottom spark (SHORT dash) */}
          <line x1="111" y1="209" x2="77" y2="218" stroke="#FBBC04" strokeWidth="15" strokeLinecap="round" />

          {/* Right sparks */}
          {/* Top spark */}
          <line x1="513" y1="40" x2="499" y2="87" stroke="#FBBC04" strokeWidth="16" strokeLinecap="round" />
          {/* Middle spark (LONG ray angled up-outward) */}
          <line x1="537" y1="167" x2="644" y2="116" stroke="#FBBC04" strokeWidth="18" strokeLinecap="round" />
          {/* Bottom spark (SHORT dash) */}
          <line x1="543" y1="209" x2="576" y2="218" stroke="#FBBC04" strokeWidth="15" strokeLinecap="round" />

          {/* Crown Body */}
          <polygon
            points="240,223 195,115 276,140 326,52 376,140 457,115 415,223"
            fill="#FBBC04"
          />
          {/* Crown Tip Jewels */}
          <circle cx="203" cy="106" r="15" fill="#FBBC04" />
          <circle cx="326" cy="42" r="18" fill="#FBBC04" />
          <circle cx="449" cy="106" r="15" fill="#FBBC04" />
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
