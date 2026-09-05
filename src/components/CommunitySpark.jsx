export default function CommunitySpark({ size = 90, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Community decorative mark"
    >
      {/* Clean 4-color Google Asterisk/Spark */}
      {/* Vertical capsules */}
      <rect x="42" y="10" width="16" height="40" rx="8" fill="#EA4335" />
      <rect x="42" y="50" width="16" height="40" rx="8" fill="#34A853" />
      
      {/* Horizontal capsules */}
      <rect x="10" y="42" width="40" height="16" rx="8" fill="#FBBC04" />
      <rect x="50" y="42" width="40" height="16" rx="8" fill="#4285F4" />
      
      {/* Center circle to make a smooth inner intersection */}
      <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
    </svg>
  );
}
