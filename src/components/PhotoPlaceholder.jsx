export default function PhotoPlaceholder() {
  return (
    <div className="photo-placeholder-content">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="photo-placeholder-svg"
      >
        {/* Outer circle ring */}
        <circle
          cx="36"
          cy="36"
          r="33"
          stroke="#DADCE0"
          strokeWidth="2"
          strokeDasharray="5 4"
          fill="none"
        />

        {/* Person silhouette head */}
        <circle
          cx="36"
          cy="26"
          r="10"
          fill="#BDC1C6"
        />

        {/* Person silhouette body */}
        <path
          d="M18 54 C18 42, 27 36, 36 36 C45 36, 54 42, 54 54"
          fill="#BDC1C6"
        />

        {/* Small camera icon */}
        <g transform="translate(42, 42)">
          <rect
            x="0"
            y="4"
            width="20"
            height="14"
            rx="3"
            fill="#4285F4"
          />
          <rect
            x="6"
            y="0"
            width="8"
            height="5"
            rx="1.5"
            fill="#4285F4"
          />
          <circle
            cx="10"
            cy="11"
            r="4"
            fill="white"
          />
          <circle
            cx="10"
            cy="11"
            r="2"
            fill="#4285F4"
          />
        </g>
      </svg>

      <div className="photo-placeholder-text">
        Your Photo Here
      </div>
    </div>
  );
}
