declare module 'react-360-view' {
  interface React360ViewerProps {
    amount?: number;
    imagePath: string;
    spinReverse?: boolean;
    autoplay?: boolean;
    buttonClass?: string;
  }
  
  const React360Viewer: React.FC<React360ViewerProps>;
  export default React360Viewer;
} 