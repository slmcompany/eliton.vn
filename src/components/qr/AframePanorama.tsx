import { useEffect } from 'react';
import 'aframe';

interface AframePanoramaProps {
  imagePath: string;
  title?: string;
}

export default function AframePanorama({ imagePath, title }: AframePanoramaProps) {
  useEffect(() => {
    // Ensure AFRAME is loaded
    if (typeof AFRAME !== 'undefined') {
      // Register custom components here if needed
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <a-scene embedded>
        <a-sky src={imagePath} rotation="0 -90 0"></a-sky>
        <a-camera position="0 1.6 0" look-controls="reverseMouseDrag: true"></a-camera>
      </a-scene>
      {title && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
            fontSize: '24px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            zIndex: 1000
          }}
        >
          {title}
        </div>
      )}
    </div>
  );
} 