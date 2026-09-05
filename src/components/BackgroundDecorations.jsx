import React from 'react';
import './BackgroundDecorations.css';

export default function BackgroundDecorations() {
  return (
    <div className="bg-decorations" aria-hidden="true">
      {/* Ambient color blurs */}
      <div className="ambient-glow glow-blue" />
      <div className="ambient-glow glow-red" />
      <div className="ambient-glow glow-yellow" />
      <div className="ambient-glow glow-green" />

      {/* Floating Sparkle 1 */}
      <svg className="anim-sparkle sparkle-1" viewBox="0 0 40 40" fill="none">
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="#4285F4" opacity="0.35" />
      </svg>

      {/* Floating Sparkle 2 */}
      <svg className="anim-sparkle sparkle-2" viewBox="0 0 40 40" fill="none">
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="#EA4335" opacity="0.35" />
      </svg>

      {/* Floating Sparkle 3 */}
      <svg className="anim-sparkle sparkle-3" viewBox="0 0 40 40" fill="none">
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="#FBBC04" opacity="0.4" />
      </svg>

      {/* Floating Sparkle 4 */}
      <svg className="anim-sparkle sparkle-4" viewBox="0 0 40 40" fill="none">
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="#34A853" opacity="0.35" />
      </svg>

      {/* Floating Code Bracket 1 */}
      <svg className="anim-bracket bracket-1" viewBox="0 0 32 32" fill="none">
        <path d="M22 6L12 16L22 26" stroke="#4285F4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>

      {/* Floating Code Bracket 2 */}
      <svg className="anim-bracket bracket-2" viewBox="0 0 32 32" fill="none">
        <path d="M10 6L20 16L10 26" stroke="#34A853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
    </div>
  );
}
