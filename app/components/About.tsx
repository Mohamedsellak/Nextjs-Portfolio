import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full text-center py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-purple-700 bg-black" id="about">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-bold">My Intro</h3>
        <h2 className="text-4xl font-bold text-purple-700 mt-2">About Me</h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Container */}
          <div className="flex justify-center">
            <Image
              src="/images/about.png"
              className="rounded-lg h-auto max-h-72 w-auto object-cover"
              alt="About Me"
              width={500}
              height={500}
            />
          </div>

          {/* Content Container */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-lg">
                <i className="fas fa-award text-purple-700 text-xl mb-2"></i>
                <h3 className="font-bold text-lg">Experience</h3>
                <span className="text-purple-300">3 Years</span>
              </div>

              <div className="bg-gray-950 p-4 rounded-lg">
                <i className="fas fa-briefcase text-purple-700 text-xl mb-2"></i>
                <h3 className="font-bold text-lg">Completed</h3>
                <span className="text-purple-300">+10 Projects</span>
              </div>

              <div className="bg-gray-950 p-4 rounded-lg">
                <i className="fas fa-headset text-purple-700 text-xl mb-2"></i>
                <h3 className="font-bold text-lg">Support</h3>
                <span className="text-purple-300">Online 24/7</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-left text-base sm:text-lg leading-relaxed">
              I&apos;m Mohammed Sellak, FullStack Developer, I create Web Applications & Web Pages With UI / UX Interfaces, 
              i have Years OF Experience And Many Clients Are Happy With The Projects Carried Out
            </p>

            {/* Contact Button */}
            <div className="text-center">
              <a 
                href="#contact" 
                className="inline-block rounded-lg bg-purple-700 px-6 py-3 text-sm sm:text-base font-medium transition-colors hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
