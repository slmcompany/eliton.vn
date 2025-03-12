declare namespace JSX {
  interface IntrinsicElements {
    'a-scene': any;
    'a-entity': any;
    'a-camera': any;
    'a-box': any;
    'a-sphere': any;
    'a-cylinder': any;
    'a-plane': any;
    'a-sky': any;
    'a-assets': any;
    'a-image': any;
    'a-video': any;
    'a-cursor': any;
  }
}

declare module 'aframe' {
  const AFRAME: any;
  export default AFRAME;
}

declare const AFRAME: any; 