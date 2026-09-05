import React from 'react';

export default function EasternIndiaBadge() {
  return (
    <div className="badge-wrapper">
      {/* Crown with spark lines on top */}
      <div className="crown-center">
        <svg
          className="crown-svg"
          width="46"
          height="38"
          viewBox="0 0 60 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Spark lines radiating from crown */}
          {/* Top-left spark */}
          <line x1="14" y1="6" x2="8" y2="0" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round" />
          {/* Top-center spark */}
          <line x1="30" y1="4" x2="30" y2="-2" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round" />
          {/* Top-right spark */}
          <line x1="46" y1="6" x2="52" y2="0" stroke="#FBBC04" strokeWidth="2.5" strokeLinecap="round" />

          {/* Crown Body */}
          <path
            d="M8 42L4 22L17 29L30 14L43 29L56 22L52 42H8Z"
            fill="#FBBC04"
            stroke="#F9AB00"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Crown base band */}
          <path
            d="M7 42H53"
            stroke="#E37400"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Dots on the 5 tips */}
          <circle cx="4" cy="22" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
          <circle cx="17" cy="29" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
          <circle cx="30" cy="14" r="3" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
          <circle cx="43" cy="29" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
          <circle cx="56" cy="22" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
        </svg>
      </div>

      {/* Pill row: celebration rays on left, pill in center, celebration rays on right */}
      <div className="pill-with-rays">
        {/* Left celebration rays */}
        <div className="celebration-rays-left">
          <span className="cel-ray cel-ray-red" />
          <span className="cel-ray cel-ray-green" />
          <span className="cel-ray cel-ray-yellow" />
        </div>

        {/* Eastern India No. 1 GDG Badge Pill */}
        <div className="eastern-india-pill">
          <img 
            src="/Buttons/Eastern India NO.1 GDG.png" 
            alt="We are Eastern India No. 1 GDG." 
          />
        </div>

        {/* Right celebration rays */}
        <div className="celebration-rays-right">
          <span className="cel-ray cel-ray-darkgreen" />
          <span className="cel-ray cel-ray-yellow2" />
          <span className="cel-ray cel-ray-blue" />
        </div>
      </div>
    </div>
  );
}
