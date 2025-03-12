import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { ErrorBoundary } from 'react-error-boundary'

interface ThreeDViewerProps {
  modelPath: string
}

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath)
  return <primitive object={scene} />
}

function Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-red-500">Có lỗi khi tải mô hình 3D</p>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default function ThreeDViewer({ modelPath }: ThreeDViewerProps) {
  return (
    <div className="w-full h-screen">
      <ErrorBoundary FallbackComponent={Fallback}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ background: '#f0f0f0' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model modelPath={modelPath} />
            <OrbitControls enableZoom={true} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  )
} 