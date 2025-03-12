// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// interface PanoramaProps {
//   imageUrl: string;
//   width?: string;
//   height?: string;
// }

// const Panorama = ({ imageUrl, width = '100%', height = '400px' }: PanoramaProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const controlsRef = useRef<OrbitControls | null>(null);

//   // Hàm xử lý resize
//   const handleResize = () => {
//     if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
    
//     const width = containerRef.current.clientWidth;
//     const height = containerRef.current.clientHeight;
    
//     cameraRef.current.aspect = width / height;
//     cameraRef.current.updateProjectionMatrix();
    
//     rendererRef.current.setSize(width, height);
//   };

//   // Cập nhật hàm toggleFullscreen
//   const toggleFullscreen = async () => {
//     if (!document.fullscreenElement) {
//       await containerRef.current?.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       await document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//     // Đợi một chút để DOM cập nhật kích thước
//     setTimeout(handleResize, 100);
//   };

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       containerRef.current.clientWidth / containerRef.current.clientHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true,
//       alpha: true 
//     });
    
//     // Xóa phần cấu hình VR
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Thiết lập OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.enableZoom = false;
//     controls.enablePan = false;
//     controls.rotateSpeed = 0.5;
//     controls.autoRotate = false;
//     controls.minPolarAngle = Math.PI * 0.1;
//     controls.maxPolarAngle = Math.PI * 0.9;

//     camera.position.set(0, 0, 0.1);
//     controls.update();

//     // Tạo sphere geometry cho panorama
//     const geometry = new THREE.SphereGeometry(500, 60, 40);
//     geometry.scale(-1, 1, 1);

//     const texture = new THREE.TextureLoader().load(imageUrl);
//     texture.mapping = THREE.EquirectangularReflectionMapping;
//     const material = new THREE.MeshBasicMaterial({ 
//       map: texture,
//       side: THREE.DoubleSide
//     });
//     const sphere = new THREE.Mesh(geometry, material);
    
//     scene.add(sphere);

//     // Cập nhật animation loop để bao gồm controls.update()
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Lưu refs
//     rendererRef.current = renderer;
//     cameraRef.current = camera;
//     controlsRef.current = controls;

//     // Event listeners
//     window.addEventListener('resize', handleResize);
//     document.addEventListener('fullscreenchange', handleResize);

//     // Cleanup
//     return () => {
//       controls.dispose();
//       renderer.dispose();
//       containerRef.current?.removeChild(renderer.domElement);
//       window.removeEventListener('resize', handleResize);
//       document.removeEventListener('fullscreenchange', handleResize);
//     };
//   }, [imageUrl]);

//   // Cập nhật các hàm điều khiển để sử dụng OrbitControls
//   const rotateLeft = () => {
//     if (controlsRef.current) {
//       const currentRotation = controlsRef.current.getAzimuthalAngle();
//       controlsRef.current.setAzimuthalAngle(currentRotation + Math.PI / 6);
//     }
//   };

//   const rotateRight = () => {
//     if (controlsRef.current) {
//       const currentRotation = controlsRef.current.getAzimuthalAngle();
//       controlsRef.current.setAzimuthalAngle(currentRotation - Math.PI / 6);
//     }
//   };

//   const rotateUp = () => {
//     if (controlsRef.current) {
//       const currentPolar = controlsRef.current.getPolarAngle();
//       controlsRef.current.setPolarAngle(Math.max(Math.PI * 0.1, currentPolar - Math.PI / 6));
//     }
//   };

//   const rotateDown = () => {
//     if (controlsRef.current) {
//       const currentPolar = controlsRef.current.getPolarAngle();
//       controlsRef.current.setPolarAngle(Math.min(Math.PI * 0.9, currentPolar + Math.PI / 6));
//     }
//   };

//   const resetView = () => {
//     if (controlsRef.current) {
//       controlsRef.current.reset();
//     }
//   };

//   return (
//     <div className="panorama-container">
//       <div 
//         ref={containerRef} 
//         className="panorama-viewer"
//       >
//         <div className="panorama-controls">
//           <button onClick={rotateLeft} title="Xoay trái">
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
//             </svg>
//           </button>
//           <button onClick={rotateRight} title="Xoay phải">
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
//             </svg>
//           </button>
//           <button onClick={rotateUp} title="Xoay lên">
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path fill="currentColor" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
//             </svg>
//           </button>
//           <button onClick={rotateDown} title="Xoay xuống">
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path fill="currentColor" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
//             </svg>
//           </button>
//           <button onClick={resetView} title="Đặt lại góc nhìn">
//             <svg viewBox="0 0 24 24" width="24" height="24">
//               <path fill="currentColor" d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
//             </svg>
//           </button>
//           <button onClick={toggleFullscreen} title="Toàn màn hình">
//             {isFullscreen ? (
//               <svg viewBox="0 0 24 24" width="24" height="24">
//                 <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
//               </svg>
//             ) : (
//               <svg viewBox="0 0 24 24" width="24" height="24">
//                 <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Thêm CSS vào file của bạn
// const styles = `
// .panorama-container {
//   width: 100%;
//   padding-top: 100%; /* Tạo tỉ lệ 1:1 */
//   position: relative;
// }

// .panorama-viewer {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// .panorama-controls {
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 10px;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 10px;
//   border-radius: 8px;
//   z-index: 1000;
//   justify-content: center;
//   width: auto;
//   max-width: 90%;
// }

// .panorama-controls button {
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
//   padding: 8px;
//   border-radius: 4px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: background-color 0.2s;
// }

// .panorama-controls button:hover {
//   background: rgba(255, 255, 255, 0.2);
// }

// .panorama-controls button:active {
//   background: rgba(255, 255, 255, 0.3);
// }

// @media (max-width: 768px) {
//   .panorama-controls {
//     bottom: 10px;
//     gap: 5px;
//     padding: 5px;
//     width: 90%;
//   }
  
//   .panorama-controls button {
//     padding: 5px;
//     flex: 0 0 auto;
//   }
  
//   .panorama-controls svg {
//     width: 20px;
//     height: 20px;
//   }
// }
// `;

// // Thêm styles vào head
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement('style');
//   styleSheet.textContent = styles;
//   document.head.appendChild(styleSheet);
// }

// export default Panorama;
