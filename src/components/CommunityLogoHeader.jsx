import React from 'react';

export default function CommunityLogoHeader() {
  return (
    <div className="header-pill">
      {/* Techno Main Salt Lake logo image */}
      <img
        src="/logos/TMSL_LOGO_NAME.png"
        alt="Techno Main Salt Lake"
        className="header-logo header-logo-tmsl"
        crossOrigin="anonymous"
      />

      {/* Center multiplication cross */}
      <span className="header-separator">✕</span>

      {/* Google Developer Groups On Campus logo image */}
      <img
        src="/logos/GDG_On_Campus_TMSL.png"
        alt="Google Developer Groups On Campus TMSL"
        className="header-logo header-logo-gdg"
        crossOrigin="anonymous"
      />
    </div>
  );
}
