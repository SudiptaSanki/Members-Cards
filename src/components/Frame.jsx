import React, { useRef, useEffect, useState, useCallback } from 'react';
import CommunityLogoHeader from './CommunityLogoHeader';
import EasternIndiaBadge from './EasternIndiaBadge';
import MemberHeading from './MemberHeading';
import PhotoPlaceholder from './PhotoPlaceholder';
import CommunitySpark from './CommunitySpark';
import GdgMark from './GdgMark';
import GoogleBorderPattern from './GoogleBorderPattern';
import './Frame.css';

/* Fixed internal card dimensions (px) — these never change.
   html2canvas always captures exactly these dimensions, so
   output is identical on every device. */
const CARD_W = 530;
const CARD_H = 705;

export default function Frame({ userPhoto, onRemovePhoto, onUploadClick }) {
  const outerRef = useRef(null);
  const [scale, setScale] = useState(1);

  /* Measure container and compute scale so the fixed-size card
     fits inside the available width with some margin. */
  const updateScale = useCallback(() => {
    if (!outerRef.current) return;
    const available = outerRef.current.clientWidth;
    const newScale = Math.min(1, available / CARD_W);
    setScale(newScale);
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [updateScale]);

  return (
    <div className="frame-outer" ref={outerRef}>
      {/* Scaled wrapper — keeps the preview responsive while
          the internal card always stays at CARD_W × CARD_H px */}
      <div
        className="frame-scale-wrapper"
        style={{
          width: CARD_W,
          height: CARD_H,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        {/* ── Capture Frame Container (Included in 3x PNG download) ── */}
        <div
          className="card-capture-boundary"
          id="capture-frame"
          style={{ width: CARD_W, height: CARD_H }}
        >
          {/* Outer Google 4-color checkered background */}
          <GoogleBorderPattern />

          {/* ── Inner White Social Showcase Card ── */}
          <div className="card-surface">
            {/* Bottom-left pattern instead of dashed accents */}
            <img src="/logos/Pattern.png" alt="" style={{ position: 'absolute', left: '-22px', bottom: '-22px', width: '120px', zIndex: 2, pointerEvents: 'none', opacity: 0.9 }} />

            {/* Top-right tilted GDG chevron mark */}
            <div className="gdg-mark-container">
              <GdgMark size={58} />
            </div>

            {/* ── Top Section: Logo Header + Badge + Member Heading (unified to prevent vertical drift) ── */}
            <div className="card-top-group">
              <CommunityLogoHeader />
              <EasternIndiaBadge />
              <MemberHeading />
            </div>

            {/* ── 1:1 Photo Showcase Area ── */}
            <div
              className={`photo-zone ${!userPhoto ? 'photo-zone--clickable' : ''}`}
              onClick={!userPhoto && onUploadClick ? onUploadClick : undefined}
              role={!userPhoto && onUploadClick ? 'button' : undefined}
              tabIndex={!userPhoto && onUploadClick ? 0 : undefined}
              title={!userPhoto ? 'Click to upload your photo' : undefined}
            >
              {/* SVG Multi-color Dashed Border */}
              <svg
                className="photo-dashed-border"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="photoBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4285F4" />
                    <stop offset="25%" stopColor="#EA4335" />
                    <stop offset="50%" stopColor="#FBBC04" />
                    <stop offset="75%" stopColor="#34A853" />
                    <stop offset="100%" stopColor="#4285F4" />
                  </linearGradient>
                </defs>
                <rect
                  x="2"
                  y="2"
                  width="96"
                  height="96"
                  rx="14"
                  fill="none"
                  stroke="url(#photoBorderGrad)"
                  strokeWidth="3.5"
                  strokeDasharray="7 5"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Bold 4 Corners to mask photo leakage and add style */}
                <path d="M 19 2 L 16 2 A 14 14 0 0 0 2 16 L 2 19" stroke="#4285F4" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <path d="M 81 2 L 84 2 A 14 14 0 0 1 98 16 L 98 19" stroke="#EA4335" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <path d="M 98 81 L 98 84 A 14 14 0 0 1 84 98 L 81 98" stroke="#FBBC04" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <path d="M 2 81 L 2 84 A 14 14 0 0 0 16 98 L 19 98" stroke="#34A853" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              </svg>

              {/* Photo content or placeholder */}
              <div className="photo-inner-box">
                {userPhoto ? (
                  <img
                    src={userPhoto}
                    alt="Member Portrait"
                    className="user-photo"
                  />
                ) : (
                  <PhotoPlaceholder />
                )}
              </div>

              {/* Remove button (excluded from export) */}
              {userPhoto && onRemovePhoto && (
                <button
                  className="remove-photo-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemovePhoto();
                  }}
                  data-html2canvas-ignore="true"
                  title="Remove photo"
                  aria-label="Remove photo"
                >
                  ✕
                </button>
              )}
            </div>

            {/* ── Lower-left Google Community Spark (4-loop mark) ── */}
            <div className="community-spark-container">
              <CommunitySpark size={75} />
            </div>

            {/* ── Bottom Section: Rocket Pill + Subtitle ── */}
            <footer className="card-footer-block">
              <div className="learn-build-pill">
                <img 
                  src="/Buttons/Learn Build Grow Together.png" 
                  alt="Learn Build Grow Together" 
                />
              </div>

              <p className="community-subtext">
                A Student Developer Community at Techno Main Salt Lake
              </p>
            </footer>
          </div>
        </div>
      </div>

      {/* Spacer — keeps the page flow correct since the card is
          taken out of flow by transform.  Height matches scaled size. */}
      <div
        className="frame-height-spacer"
        style={{ height: CARD_H * scale, pointerEvents: 'none' }}
        aria-hidden="true"
      />
    </div>
  );
}
