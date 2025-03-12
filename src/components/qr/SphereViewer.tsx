import React, { useEffect, useRef } from 'react'
import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/core/index.css'

interface SphereViewerProps {
  imagePath: string
}

export default function SphereViewer({ imagePath }: SphereViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<Viewer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    viewerRef.current = new Viewer({
      container: containerRef.current,
      panorama: imagePath,
      defaultZoomLvl: 50,
      moveSpeed: 1,
      navbar: ['autorotate', 'zoom', 'fullscreen']
    })

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy()
      }
    }
  }, [imagePath])

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100vh',
        backgroundColor: '#000'
      }}
    />
  )
} 