import React from 'react';
import SignUpForm from './SignUpForm';
import forestBg from '../assets/forest_bg.png';

const HeroSection = () => {
  return (
    <section className="relative min-height-[100vh] w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={forestBg} 
          alt="Forest Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
              Enter the untamed wilderness with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">ZYPHORIA</span>
            </h1>
            <div className="w-24 h-1 bg-brand-cyan rounded-full"></div>
            <p className="text-lg text-white/80 max-w-lg leading-relaxed font-light">
              Release all your stress with the exciting Tech and Fun events in the most awaited fest. <span className="font-bold text-brand-cyan">ZYPHORIA 3.0</span> presented by Zairza.
            </p>
          </div>
          
          <div className="flex gap-6 items-center">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-dark bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className={`w-full h-full bg-gradient-to-br from-brand-cyan to-blue-500 opacity-80`}></div>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              <span className="text-white font-bold">2,500+</span> already registered
            </p>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="flex justify-center lg:justify-end">
          <SignUpForm />
        </div>
      </div>
      
      {/* Decorative bioluminescent dots */}
      <div className="absolute bottom-10 left-10 flex gap-4">
        <div className="w-4 h-4 rounded-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
        <div className="w-4 h-4 rounded-full bg-brand-cyan animate-pulse delay-75 shadow-[0_0_15px_rgba(0,209,255,0.8)]"></div>
        <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse delay-150 shadow-[0_0_15px_rgba(74,222,128,0.8)]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
