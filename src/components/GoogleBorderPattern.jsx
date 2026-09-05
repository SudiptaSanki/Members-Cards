import React from 'react';

// Precomputed 10x15 color tile matrix based on the Google palette
const PATTERN = [
  ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335'],
  ['#34A853', '#FBBC04', '#EA4335', '#4285F4', '#34A853', '#FBBC04', '#EA4335', '#4285F4', '#34A853', '#FBBC04'],
  ['#4285F4', '#EA4335', '#34A853', '#FBBC04', '#4285F4', '#EA4335', '#34A853', '#FBBC04', '#4285F4', '#EA4335'],
  ['#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853'],
  ['#EA4335', '#4285F4', '#FBBC04', '#34A853', '#EA4335', '#4285F4', '#FBBC04', '#34A853', '#EA4335', '#4285F4'],
  ['#34A853', '#FBBC04', '#EA4335', '#4285F4', '#34A853', '#FBBC04', '#EA4335', '#4285F4', '#34A853', '#FBBC04'],
  ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335'],
  ['#EA4335', '#34A853', '#4285F4', '#FBBC04', '#EA4335', '#34A853', '#4285F4', '#FBBC04', '#EA4335', '#34A853'],
  ['#4285F4', '#FBBC04', '#EA4335', '#34A853', '#4285F4', '#FBBC04', '#EA4335', '#34A853', '#4285F4', '#FBBC04'],
  ['#34A853', '#EA4335', '#FBBC04', '#4285F4', '#34A853', '#EA4335', '#FBBC04', '#4285F4', '#34A853', '#EA4335'],
  ['#FBBC04', '#4285F4', '#34A853', '#EA4335', '#FBBC04', '#4285F4', '#34A853', '#EA4335', '#FBBC04', '#4285F4'],
  ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335'],
  ['#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04'],
  ['#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4'],
  ['#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#EA4335', '#FBBC04', '#34A853'],
];

export default function GoogleBorderPattern() {
  return (
    <div className="google-border-grid" aria-hidden="true">
      {PATTERN.map((row, rIdx) => (
        <div key={rIdx} className="google-border-row">
          {row.map((color, cIdx) => (
            <div
              key={cIdx}
              className="google-border-cell"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
