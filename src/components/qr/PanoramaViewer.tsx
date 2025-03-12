import { useEffect, useRef, useState } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import '../../styles/panorama.css';

interface PanoramaViewerProps {
  imagePath: string;
  title?: string;
}

interface Scene {
  id: string;
  title: string;
  path: string;
  link: string;
}

const SCENES: Scene[] = [
  { id: 'eli-01', title: 'Thang eli-01', path: '/images/combo/eli01/eli01-3.png', link: '/qr/eli-01' },
  { id: 'eli-04', title: 'Thang eli-04', path: '/images/combo/eli04/eli04-3.png', link: '/qr/eli-04' },
  { id: 'eli-06', title: 'Thang eli-06', path: '/images/combo/eli06/eli06-3.png', link: '/qr/eli-06' },
  { id: 'eli-08', title: 'Thang eli-08', path: '/images/combo/eli08/eli08-3.png', link: '/qr/eli-08' },
  { id: 'eli-10', title: 'Thang eli-10', path: '/images/combo/eli10/eli10-3.png', link: '/qr/eli-10' },
  { id: 'eli-11', title: 'Thang eli-11', path: '/images/combo/eli11/eli11-3.png', link: '/qr/eli-11' },
  { id: 'eli-12', title: 'Thang eli-12', path: '/images/combo/eli12/eli12-3.png', link: '/qr/eli-12' },
];

export default function PanoramaViewer({ imagePath, title }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isControlsVisible, setIsControlsVisible] = useState(false);
  const [showScenes, setShowScenes] = useState(false);
  const [isMagicWindow, setIsMagicWindow] = useState(false);

  useEffect(() => {
    if (containerRef.current && !viewerRef.current) {
      viewerRef.current = new Viewer({
        container: containerRef.current,
        panorama: imagePath,
        defaultZoomLvl: 50,
        defaultLong: 180,
        defaultLat: 10,
        moveSpeed: 1,
        zoomSpeed: 1,
        autorotateDelay: 0,
        autorotateSpeed: '2rpm',
        mousewheelCtrlKey: true,
        touchmoveTwoFingers: true,
        navbar: [],
      });
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.setPanorama(imagePath);
    }
  }, [imagePath]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleAutoRotate = () => {
    if (viewerRef.current) {
      if (viewerRef.current.isAutorotateEnabled()) {
        viewerRef.current.stopAutorotate();
        setIsAutoRotating(false);
      } else {
        viewerRef.current.startAutorotate();
        setIsAutoRotating(true);
      }
    }
  };

  const toggleControls = () => {
    setIsControlsVisible(!isControlsVisible);
  };

  const toggleScenes = () => {
    setShowScenes(!showScenes);
  };

  const toggleMagicWindow = () => {
    setIsMagicWindow(!isMagicWindow);
  };

  const switchScene = (link: string) => {
    window.location.href = link;
  };

  const resetView = () => {
    if (viewerRef.current) {
      viewerRef.current.animate({
        longitude: 180,
        latitude: 10,
        zoom: 50,
        speed: 10
      });
    }
  };

  const rotateLeft = () => {
    if (viewerRef.current) {
      const { longitude } = viewerRef.current.getPosition();
      viewerRef.current.animate({
        longitude: longitude - 45,
        speed: 20
      });
    }
  };

  const rotateRight = () => {
    if (viewerRef.current) {
      const { longitude } = viewerRef.current.getPosition();
      viewerRef.current.animate({
        longitude: longitude + 45,
        speed: 20
      });
    }
  };

  const rotateUp = () => {
    if (viewerRef.current) {
      const { latitude } = viewerRef.current.getPosition();
      viewerRef.current.animate({
        latitude: Math.min(90, latitude + 45),
        speed: 20
      });
    }
  };

  const rotateDown = () => {
    if (viewerRef.current) {
      const { latitude } = viewerRef.current.getPosition();
      viewerRef.current.animate({
        latitude: Math.max(-90, latitude - 45),
        speed: 20
      });
    }
  };

  return (
    <div className="panorama-container" style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div 
        ref={containerRef} 
        className="panorama-viewer"
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'relative'
        }}
      />

      <img src="/images/eliton-logo-white.png" alt="Eliton Logo" className="panorama-logo" />
      {title && <div className="panorama-title">{title}</div>}

      <div className={`panorama-controls ${isControlsVisible ? 'visible' : 'hidden'}`}>
        <div className="utility-controls">
          <button onClick={resetView} title="Đặt lại góc nhìn">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
          </button>
          <button onClick={rotateLeft} title="Xoay trái">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <button onClick={rotateRight} title="Xoay phải">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </button>
          <button onClick={rotateUp} title="Xoay lên">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
          </button>
          <button onClick={rotateDown} title="Xoay xuống">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
          <button onClick={toggleAutoRotate} title={isAutoRotating ? "Tạm dừng xoay" : "Bắt đầu xoay"}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              {isAutoRotating ? (
                <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              ) : (
                <path fill="currentColor" d="M8 5v14l11-7z"/>
              )}
            </svg>
          </button>
          <button onClick={toggleMagicWindow} title="Cảm biến thiết bị">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d={isMagicWindow 
                ? "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"
                : "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2-2.99L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z"} />
            </svg>
          </button>
          <button onClick={toggleFullscreen} title="Toàn màn hình">
            {isFullscreen ? (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      <button onClick={toggleScenes} className="scenes-button" title="Chọn tầng">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
        </svg>
      </button>

      <div className={`scene-thumbnails ${showScenes ? 'visible' : 'hidden'}`}>
        {SCENES.map((scene) => (
          <div 
            key={scene.id} 
            className={`scene-thumbnail ${imagePath === scene.path ? 'active' : ''}`}
            onClick={() => switchScene(scene.link)}
            title={scene.title}
          >
            <img src={scene.path} alt={scene.title} />
            <div className="scene-id">{scene.id}</div>
          </div>
        ))}
      </div>

      <button onClick={toggleControls} className="toggle-controls" title={isControlsVisible ? "Ẩn điều khiển" : "Hiện điều khiển"}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d={isControlsVisible 
            ? "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"} />
        </svg>
      </button>
    </div>
  );
} 