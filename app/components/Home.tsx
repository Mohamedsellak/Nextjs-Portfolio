'use client';

import { useState, useEffect } from 'react';
import Loader from './Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [firstModelLoaded, setFirstModelLoaded] = useState(false);
  const [secondModelLoaded, setSecondModelLoaded] = useState(false);

  // Check if both models are loaded
  useEffect(() => {
    if (firstModelLoaded && secondModelLoaded) {
      // Add a small delay to ensure models are rendered
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds delay
    }
  }, [firstModelLoaded, secondModelLoaded]);

  return (
    <>
      {isLoading && <Loader />}
      
      <section id="home" className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
{/*         <div className="w-screen h-screen">
          <iframe 
            src="https://my.spline.design/humanmachine-02a6d7b1c0adaf9ce8a708fe8c0ae372/" 
            frameBorder="0" 
            className="w-screen h-screen"
            onLoad={() => setFirstModelLoaded(true)}
          />
        </div> */}

        <div className="w-screen h-screen relative flex items-center justify-center mt-8">
          <iframe 
            src="https://my.spline.design/cybernetichuman-b472d7d3ddd0b994e6f235f35e314d81/" 
            frameBorder="0" 
            className="h-full w-full"
            onLoad={() => setSecondModelLoaded(true)}
          />
      
          <div className="absolute text-white text-center font-bold mx-3">
            <h3 className="lg:text-xl md:text-lg text-base">Hello, I&apos;m</h3>
            <h1 className="lg:text-7xl md:text-6xl text-6xl mb-2">Mohammed Sellak</h1>
            <h3 className="lg:text-xl md:text-lg text-base">Full Stack Developer | AI & Data Scientist</h3>
      
            <div className="font-bold mt-8">
              <a download="" href="./assets/cv/cv.pdf" className="border border-purple-700 rounded-lg text-purple-700 p-2 hover:bg-purple-700 hover:text-white">Download CV</a>
              <a href="#about" className="rounded-lg bg-purple-700 p-2 ml-2">About Me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
