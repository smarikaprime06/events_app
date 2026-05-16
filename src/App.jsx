import React from 'react';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-cyan selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-cyan rounded-lg rotate-12 flex items-center justify-center font-black text-black">Z</div>
            <span className="text-2xl font-black text-white tracking-tighter">ZYPHORIA</span>
          </div>
          <div className="hidden md:flex gap-10 text-white/60 font-medium">
            <a href="#" className="hover:text-brand-cyan transition-colors">Home</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Events</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Timeline</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Sponsors</a>
          </div>
          <button className="px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all font-semibold">
            Login
          </button>
        </div>
      </nav>

      <main>
        <HeroSection />
        
        {/* Features Section - Briefly adding to make it feel like a website */}
        <section className="py-24 bg-[#080B12]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-cyan/50 transition-colors group">
                <div className="w-12 h-12 bg-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Tech Events</h3>
                <p className="text-white/40">From hackathons to robotics, compete with the best minds in the country.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-cyan/50 transition-colors group">
                <div className="w-12 h-12 bg-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fun Activities</h3>
                <p className="text-white/40">Experience gaming tournaments, workshops, and night-life cultural fests.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-brand-cyan/50 transition-colors group">
                <div className="w-12 h-12 bg-brand-cyan/20 rounded-lg flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <p className="text-white/40">3 days of non-stop excitement, starting from October 24th to 26th.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-white/20 text-sm">
          &copy; 2026 ZYPHORIA. Presented by Zairza. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
