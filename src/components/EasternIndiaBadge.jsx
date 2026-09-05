import React from 'react';

export default function EasternIndiaBadge() {
  return (
    <div className="badge-wrapper">
      {/* Crown + Radiating rays decoration */}
      <div className="crown-rays-container">
        {/* Left 3 radiating dashes */}
        <div className="rays-left">
          <span className="ray ray-red" />
          <span className="ray ray-green" />
          <span className="ray ray-yellow" />
        </div>

        {/* Crown with sparkles */}
        <div className="crown-center">
          <svg
            className="crown-svg"
            width="46"
            height="32"
            viewBox="0 0 60 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Sparkle dots around crown */}
            <circle cx="6" cy="10" r="2" fill="#FBBC04" />
            <circle cx="18" cy="4" r="2.5" fill="#FBBC04" />
            <circle cx="42" cy="4" r="2.5" fill="#FBBC04" />
            <circle cx="54" cy="10" r="2" fill="#FBBC04" />

            {/* Crown Body */}
            <path
              d="M8 36L4 16L17 23L30 8L43 23L56 16L52 36H8Z"
              fill="#FBBC04"
              stroke="#F9AB00"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Crown base band */}
            <path
              d="M7 36H53"
              stroke="#E37400"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Dots on the 5 tips */}
            <circle cx="4" cy="16" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
            <circle cx="17" cy="23" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
            <circle cx="30" cy="8" r="3" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
            <circle cx="43" cy="23" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
            <circle cx="56" cy="16" r="2.5" fill="#FBBC04" stroke="#F9AB00" strokeWidth="1" />
          </svg>
        </div>

        {/* Right 3 radiating dashes */}
        <div className="rays-right">
          <span className="ray ray-blue" />
          <span className="ray ray-yellow" />
          <span className="ray ray-green" />
        </div>
      </div>

      {/* Eastern India No. 1 GDG Badge Pill */}
      <div className="eastern-india-pill">
        <span>We are </span>
        <strong className="badge-highlight">Eastern India No. 1 GDG.</strong>
      </div>
    </div>
  );
}
