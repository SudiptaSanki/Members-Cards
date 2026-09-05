import { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import Frame from './components/Frame';
import BackgroundDecorations from './components/BackgroundDecorations';
import ImageCropper from './components/ImageCropper';
import './App.css';

export default function App() {
  const [userPhoto, setUserPhoto] = useState(null);
  const [rawImage, setRawImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  /* ── Read file as data URL ── */
  const readFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setRawImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }, []);

  /* ── File input handler ── */
  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
    e.target.value = '';
  }, [readFile]);

  /* ── Drag & Drop handlers ── */
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) readFile(file);
  }, [readFile]);

  /* ── Remove photo ── */
  const handleRemovePhoto = useCallback(() => {
    setUserPhoto(null);
  }, []);

  /* ── Download handler (html2canvas → PNG at 3x scale) ── */
  const handleDownload = useCallback(async () => {
    const frameEl = document.getElementById('capture-frame');
    if (!frameEl) return;

    setIsDownloading(true);
    try {
      /* The card always has fixed internal dimensions (530 × 705 px)
         regardless of CSS transform scaling applied for the preview.
         We tell html2canvas the true intrinsic size so the output is
         identical on every device — phone, tablet, or desktop. */
      const CARD_W = 530;
      const CARD_H = 705;

      const canvas = await html2canvas(frameEl, {
        scale: 3,               // 3x for ultra-crisp high-res output
        width: CARD_W,
        height: CARD_H,
        useCORS: true,
        allowTaint: false,
        backgroundColor: null,
        logging: false,
        ignoreElements: (el) => {
          return el.getAttribute?.('data-html2canvas-ignore') === 'true';
        },
        onclone: (clonedDoc) => {
          const frame = clonedDoc.getElementById('capture-frame');
          if (frame) {
            frame.classList.add('is-exporting');
            /* Reset any inherited transforms so html2canvas
               reads the true 530×705 layout, not the scaled one. */
            const scaleWrapper = frame.parentElement;
            if (scaleWrapper) {
              scaleWrapper.style.transform = 'none';
            }
          }
        },
      });

      canvas.toBlob((blob) => {
        if (!blob) {
          alert('Could not generate image. Please try again.');
          setIsDownloading(false);
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'gdg-tmsl-member-card.png';
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setIsDownloading(false);
      }, 'image/png');
    } catch (err) {
      console.error('Download error:', err);
      alert('Something went wrong. Please try again.');
      setIsDownloading(false);
    }
  }, []);

  return (
    <div className="app no-pull-refresh">
      <BackgroundDecorations />
      
      {/* ── 1:1 Cropper Modal ── */}
      {rawImage && (
        <ImageCropper
          image={rawImage}
          onCropComplete={(croppedImg) => {
            setUserPhoto(croppedImg);
            setRawImage(null);
          }}
          onCancel={() => setRawImage(null)}
        />
      )}
      
      {/* ── Header ── */}
      <header className="app-header">
        <div className="header-badge">
          <span>👑 Eastern India No. 1 GDG</span>
        </div>
        <h1 className="app-title">
          GDG TMSL <span className="app-title-accent">Member Card</span>
        </h1>
        <p className="app-subtitle">
          Create and download your official showcase graphic for social media
        </p>
      </header>

      {/* ── Main content ── */}
      <main className="app-main">
        {/* Frame preview */}
        <section className="preview-section">
          <Frame
            userPhoto={userPhoto}
            onRemovePhoto={handleRemovePhoto}
            onUploadClick={() => fileInputRef.current?.click()}
          />
        </section>

        {/* Upload & Actions section */}
        <section className="upload-section">
          {/* Drag & drop zone */}
          <div
            className={`drop-zone ${isDragging ? 'drop-zone--active' : ''} ${userPhoto ? 'drop-zone--has-photo' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            aria-label="Upload member photo"
          >
            {userPhoto ? (
              <div className="drop-zone-success">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                <span>Photo uploaded! Tap to replace or adjust</span>
              </div>
            ) : (
              <div className="drop-zone-prompt">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17,8 12,3 7,8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                <span className="drop-zone-text">
                  {isDragging ? 'Drop your photo here!' : 'Tap to upload portrait or drag & drop'}
                </span>
                <span className="drop-zone-hint">JPG, PNG, HEIC</span>
              </div>
            )}
          </div>

          {/* Hidden file inputs */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden-input"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="user"
            onChange={handleFileChange}
            className="hidden-input"
          />

          {/* Camera button (for mobile selfie or quick snap) */}
          <button
            type="button"
            className="btn btn-camera"
            onClick={() => cameraInputRef.current?.click()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            Take a Photo
          </button>

          {/* Action buttons */}
          <div className="action-buttons">
            <button
              type="button"
              className="btn btn-download"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {isDownloading ? 'Exporting Card…' : 'Download Card'}
            </button>

            {userPhoto && (
              <button
                type="button"
                className="btn btn-reset"
                onClick={handleRemovePhoto}
                title="Remove photo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                Reset
              </button>
            )}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="app-footer">
        <p>Google Developer Groups On Campus • Techno Main Salt Lake</p>
      </footer>
    </div>
  );
}
