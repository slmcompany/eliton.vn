declare module 'pannellum-react' {
  import { Component } from 'react'

  export interface PannellumProps {
    width: string
    height: string
    image: string
    pitch?: number
    yaw?: number
    hfov?: number
    autoLoad?: boolean
    autoRotate?: number
    compass?: boolean
    showZoomCtrl?: boolean
    showFullscreenCtrl?: boolean
    mouseZoom?: boolean
    ref?: any
  }

  export class Pannellum extends Component<PannellumProps> {
    getViewer(): {
      setPitch(pitch: number): void
      setYaw(yaw: number): void
      setHfov(hfov: number): void
      getPitch(): number
      getYaw(): number
    }
  }
} 