import React from 'react'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full blur-xl bg-purple-500/20 animate-pulse"></div>
        
        {/* Main Spinner Container */}
        <div className="relative w-32 h-32">
          {/* Background Ring with Gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-900/50 to-purple-600/50"></div>
          
          {/* Multiple Spinning Rings */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-purple-500 animate-[spin_2s_linear_infinite]"></div>
          <div className="absolute inset-1 rounded-full border-4 border-transparent border-t-purple-400 border-r-purple-400 animate-[spin_1.7s_linear_infinite]"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-300 border-r-purple-300 animate-[spin_1.4s_linear_infinite]"></div>
          
          {/* Inner Rings */}
          <div className="absolute inset-4 rounded-full border-4 border-gray-800"></div>
          <div className="absolute inset-6 rounded-full border-4 border-gray-700"></div>
          
          {/* Center Pulsing Core */}
          <div className="absolute inset-[30px] rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 animate-pulse"></div>
        </div>

        {/* Loading Text Container */}
        <div className="mt-8 text-center relative">
          {/* Glowing Background for Text */}
          <div className="absolute inset-0 blur-md bg-purple-500/20"></div>
          
          {/* Main Text */}
          <div className="relative">
            <span className="text-xl font-medium bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Loading
            </span>
            {/* Animated Dots */}
            <span className="inline-flex ml-1 text-2xl">
              <span className="text-purple-400 animate-[bounce_1s_infinite_100ms]">.</span>
              <span className="text-purple-500 animate-[bounce_1s_infinite_200ms]">.</span>
              <span className="text-purple-600 animate-[bounce_1s_infinite_300ms]">.</span>
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 animate-[progressBar_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
