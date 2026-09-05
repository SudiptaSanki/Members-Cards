import React from 'react';

export default function DashedAccents() {
  return (
    <>
      {/* Left decorative dashed bracket */}
      <svg
        className="dashed-bracket dashed-bracket-left"
        width="80"
        height="300"
        viewBox="0 0 80 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top blue horizontal dash line */}
        <path
          d="M0 20 H60"
          stroke="#4285F4"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Upper corner blue vertical */}
        <path
          d="M60 20 V85"
          stroke="#4285F4"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Red vertical dash */}
        <path
          d="M60 85 V155"
          stroke="#EA4335"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Yellow vertical dash */}
        <path
          d="M60 155 V225"
          stroke="#FBBC04"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Green vertical dash */}
        <path
          d="M60 225 V280"
          stroke="#34A853"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Bottom blue horizontal dash line */}
        <path
          d="M60 280 H0"
          stroke="#4285F4"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
      </svg>

      {/* Right decorative dashed bracket */}
      <svg
        className="dashed-bracket dashed-bracket-right"
        width="80"
        height="240"
        viewBox="0 0 80 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top blue horizontal dash line */}
        <path
          d="M80 20 H20"
          stroke="#4285F4"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Blue vertical dash */}
        <path
          d="M20 20 V75"
          stroke="#4285F4"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Red vertical dash */}
        <path
          d="M20 75 V135"
          stroke="#EA4335"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Yellow vertical dash */}
        <path
          d="M20 135 V195"
          stroke="#FBBC04"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
        {/* Bottom green corner & horizontal line */}
        <path
          d="M20 195 V220 H80"
          stroke="#34A853"
          strokeWidth="2.5"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}
