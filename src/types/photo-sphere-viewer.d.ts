declare module '@photo-sphere-viewer/core' {
  export interface ViewerOptions {
    container: HTMLElement;
    panorama: string;
    navbar?: string[];
    defaultZoomLvl?: number;
    defaultLong?: number;
    defaultLat?: number;
    minFov?: number;
    maxFov?: number;
    moveSpeed?: number;
    zoomSpeed?: number;
    autorotateDelay?: number;
    autorotateSpeed?: string | number;
    mousewheelCtrlKey?: boolean;
    touchmoveTwoFingers?: boolean;
    mousemoveHover?: boolean;
    caption?: string;
    description?: string;
    loadingImg?: string;
    loadingTxt?: string;
    size?: { width: string | number; height: string | number };
  }

  export class Viewer {
    constructor(options: ViewerOptions);
    destroy(): void;
    setPanorama(panorama: string, options?: any): Promise<void>;
    setOptions(options: Partial<ViewerOptions>): void;
    rotate(options: { longitude?: number; latitude?: number; speed?: number }): void;
    zoom(level: number): void;
    startAutorotate(options?: { speed?: number }): void;
    stopAutorotate(): void;
    isAutorotateEnabled(): boolean;
    getZoomLevel(): number;
    getPosition(): { longitude: number; latitude: number };
    animate(options: { longitude?: number; latitude?: number; zoom?: number; speed?: number }): void;
  }
} 