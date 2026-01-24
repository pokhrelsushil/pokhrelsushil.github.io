import React from 'react';

const ScrollToExplore = () => {
  return (
    <div className="
      absolute 
      bottom-6 sm:bottom-12 md:bottom-38
      left-1/2 
      -translate-x-1/2 
      z-30 
      flex flex-col items-center gap-2 sm:gap-3 
      pointer-events-none
    ">
      {/* Mouse icon */}
      <div className="relative w-9 h-14 sm:w-10 sm:h-16 md:w-11 md:h-18">
        {/* Mouse outline */}
        <div className="
          absolute inset-0 
          border-2 border-blue-500/60 rounded-3xl 
          bg-gradient-to-b from-gray-900/50 to-black/70 
          backdrop-blur-sm
        "></div>

        {/* Animated scroll indicator */}
        <div className="
          absolute left-1/2 top-2.5 sm:top-3 
          -translate-x-1/2 
          w-1.5 sm:w-2 h-5 sm:h-6 
          bg-blue-400 rounded-full 
          animate-scroll-down 
          shadow-md shadow-blue-500/50
        "></div>
      </div>

      {/* Text */}
      <span className="
        text-blue-400/90 font-medium 
        text-xs sm:text-sm md:text-base 
        tracking-wide 
        animate-pulse
      ">
        Scroll to explore
      </span>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll-down {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
        .animate-scroll-down {
          animation: scroll-down 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ScrollToExplore;