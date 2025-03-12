// src/ThreeSixtyViewer.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Định nghĩa kiểu props
interface ThreeSixtyViewerProps {
  imageURL: string;
}

const ThreeSixtyViewer: React.FC<ThreeSixtyViewerProps> = ({ imageURL }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Tạo Scene, Camera và Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Tải ảnh 360 độ (sử dụng texture spherical mapping)
    const texture = new THREE.TextureLoader().load(imageURL);
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Đặt camera vào trong quả cầu (để nhìn từ bên trong)
    camera.position.set(0, 0, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.005; // Quay ảnh 360 độ
      renderer.render(scene, camera);
    };

    animate();

    // Xử lý thay đổi kích thước cửa sổ
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup khi component bị unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [imageURL]);

  return <div ref={containerRef} />;
};

export default ThreeSixtyViewer;
