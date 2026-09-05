export default function GdgMark({ size = 52, className = '' }) {
  return (
    <img
      src="/GDG_Fav_Icon.png"
      alt="GDG Logo"
      width={size}
      height={size}
      className={className}
      style={{
        display: 'block',
        objectFit: 'contain',
      }}
      crossOrigin="anonymous"
    />
  );
}
