import React from "react";

interface BackgroundVideoProps {
  opacity?: number;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  opacity = 0.9, // Higher opacity to clearly see the glowing lines and circles on the dark background
}) => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#0b0b24]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src="/videos/bg_animation.webm" type="video/webm" />
      </video>
      {/* Smooth fade transitions at the top and bottom edges */}
      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0b0b24]/40 via-transparent to-[#0b0b24]" 
      />
    </div>
  );
};

export default BackgroundVideo;
