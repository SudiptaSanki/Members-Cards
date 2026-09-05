import React from 'react';

export default function MemberHeading() {
  return (
    <section className="member-heading">
      <div className="member-intro">
        I AM A PROUD
      </div>

      <div className="member-name">
        <span className="char-g">G</span>
        <span className="char-d">D</span>
        <span className="char-g2">G</span>
        <span className="char-space">&nbsp;</span>
        <span className="char-t">T</span>
        <span className="char-m">M</span>
        <span className="char-s">S</span>
        <span className="char-l">L</span>
      </div>

      <div className="member-pill-wrapper">
        <span className="member-pill">
          <img 
            src="/Buttons/Member.png" 
            alt="MEMBER" 
          />
        </span>
      </div>
    </section>
  );
}
