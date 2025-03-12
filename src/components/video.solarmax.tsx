import { useState, useEffect } from "react";

const VideoSolarmax = () => {
  const isIphone = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const videoSrc = isIphone
    ? "/images/Eliton_homepagevideo_720p.mp4"
    : "/images/Eliton_homepagevideo.webm";

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Chỉ tải video khi component trong viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
      observer.observe(videoContainer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:hidden md:hidden relative w-full pb-[177.78%] video-container">
      <img
        src="/images/cabin-home-thumb.jpeg"
        alt="Fallback"
        loading="lazy"
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          videoLoaded && !videoError ? "hidden" : ""
        }`}
      />
      {shouldLoadVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          poster="/images/cabin-home-thumb.jpeg"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type={isIphone ? "video/mp4" : "video/webm"} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoSolarmax;
