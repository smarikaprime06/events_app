import React from 'react';
import Navbar from '../components/Navbar';
import forestBg from '../assets/forest_bg.png';
import zenBear from '../assets/zen_bear.png';

const eventCards = [
  {
    id: 'tech-events',
    label: 'Tech Events',
    emoji: '⚡',
    gradient: 'from-[#00D1FF] to-blue-700',
    description: 'Hackathons, CTFs, robotics & more',
  },
  {
    id: 'fun-events',
    label: 'Fun Events',
    emoji: '🎉',
    gradient: 'from-purple-500 to-pink-600',
    description: 'Gaming, treasure hunts & cultural nights',
  },
  {
    id: 'workshops',
    label: 'Workshops',
    emoji: '🛠️',
    gradient: 'from-green-400 to-teal-600',
    description: 'Deep dives into tech stacks & tools',
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-white font-[Outfit]">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <img
          src={forestBg}
          alt="Cyber Forest"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-8 pb-12">
          <p className="text-[#00D1FF] font-semibold text-sm uppercase tracking-widest mb-2">ZYPHORIA 3.0 — October 24–26</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Hunt the Future in<br />the <span className="text-[#00D1FF]">Cyber Forest</span>
          </h1>
          <button className="px-8 py-3 bg-[#00D1FF] text-black font-bold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#00D1FF]/30 transition-all active:scale-95">
            Register Now
          </button>
        </div>
      </section>

      {/* Zen 4.0 Section */}
      <section className="py-20 bg-[#080B12]">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Placeholder art card */}
          <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00D1FF]/10 relative group">
            <img
              src={zenBear}
              alt="Zen 4.0 Cyber Bear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-[#00D1FF] text-xs font-bold tracking-widest uppercase drop-shadow-lg">Zen 4.0 — Your Guide</span>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white mb-4">
              <span className="text-[#00D1FF]">Zen 4.0:</span> Your Guide in<br />The Cyber Wild!
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              The best way to live the future is to create it. Moving on from the safari around the tech forest, we now bring you the city of tech. Experience the new future with us. We shall lead you to explore through the suburb of the cybercity, to dive into various tech stacks, dev branches, recursion, trees and languages like firefox and python. The Best is yet to come. Stay tuned for something awesome!
            </p>
            <button className="px-6 py-2.5 border border-[#00D1FF]/40 text-[#00D1FF] rounded-full font-semibold hover:bg-[#00D1FF]/10 transition-colors text-sm">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section id="events" className="py-20 container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-3">Events for you</h2>
          <p className="text-white/40 max-w-md mx-auto text-sm">
            Everything has been made simple for you to scroll around and get the most out of the options available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {eventCards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="relative p-8 min-h-[200px] flex flex-col justify-between bg-white/5">
                <span className="text-5xl">{card.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{card.label}</h3>
                  <p className="text-white/40 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-[#080B12]">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-white mb-6">
              Want to Know<br />about us?
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Come and know more about Zairza and join our community to experience such more amazing stuffs.
            </p>
            <div className="flex gap-4">
              {['🐦', '📧', '📸', '💬'].map((icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00D1FF]/10 hover:border-[#00D1FF]/40 transition-colors text-lg"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <div className="text-white/20 text-sm space-y-2">
            <p className="font-semibold text-white/40">OUTR (CET Campus), Kalinga Nagar,</p>
            <p>Ghatikia, Bhubaneswar, Odisha.</p>
            <p>+91 7205883536</p>
            <p className="pt-4 text-white/20 italic">Presented by Zairza ✦</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-white/20 text-sm">
        © 2026 ZYPHORIA. Presented by Zairza. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
