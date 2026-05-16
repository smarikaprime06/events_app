import React from 'react';
import Navbar from '../components/Navbar';
import forestBg from '../assets/forest_bg.png';
import zenBear from '../assets/zen_bear.png';

const TEAM = [
  { name: 'Arjun Patra',    role: 'President',        emoji: '👑' },
  { name: 'Meera Singh',    role: 'Tech Lead',         emoji: '⚡' },
  { name: 'Dev Mishra',     role: 'Event Coordinator', emoji: '🎯' },
  { name: 'Tanya Rath',     role: 'Design Head',       emoji: '🎨' },
  { name: 'Ravi Mohanty',   role: 'Logistics Head',    emoji: '🛠️' },
  { name: 'Pooja Nair',     role: 'PR & Outreach',     emoji: '📣' },
];

const STATS = [
  { label: 'Active Members', value: '150+' },
  { label: 'Events Hosted', value: '30+' },
  { label: 'Years Running', value: '4' },
  { label: 'Participants', value: '2,500+' },
];

const AboutUsPage = () => (
  <div className="min-h-screen bg-[#0A0E17] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
    <Navbar />

    {/* Hero */}
    <section className="relative h-[45vh] flex items-end overflow-hidden">
      <img src={forestBg} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/60 to-transparent" />
      <div className="relative z-10 container mx-auto px-8 pb-12">
        <p className="text-[#00D1FF] text-xs font-bold uppercase tracking-widest mb-2">Who We Are</p>
        <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">
          Want to Know<br />About <span className="text-[#00D1FF]">Us?</span>
        </h1>
      </div>
    </section>

    <div className="container mx-auto px-6 max-w-5xl pb-24">

      {/* Intro */}
      <div className="grid md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <p className="text-white/50 leading-relaxed text-lg mb-6">
            <span className="text-white font-bold">Zairza</span> is the official coding and tech club of OUTR (CET Campus), Bhubaneswar. We build, hack, and create the future — one event at a time.
          </p>
          <p className="text-white/40 leading-relaxed mb-8">
            From the city of tech, we bring you ZYPHORIA — our annual techfest where the wilderness meets the cyber world. This is where the next generation of innovators are born.
          </p>
          <div className="flex gap-4">
            {['🐦', '📧', '📸', '💬'].map((icon, i) => (
              <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00D1FF]/10 hover:border-[#00D1FF]/40 transition-colors text-lg">
                {icon}
              </button>
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-sm mx-auto">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00D1FF]/10">
            <img src={zenBear} alt="Zen Bear" className="w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center text-4xl">
            🐾
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {STATS.map(s => (
          <div key={s.label} className="p-6 rounded-2xl border border-white/5 bg-white/5 text-center hover:border-[#00D1FF]/20 transition-colors">
            <p className="text-4xl font-black text-[#00D1FF]">{s.value}</p>
            <p className="text-white/40 text-xs mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-black text-white mb-2">The Cyber Crew</h2>
        <p className="text-white/30 text-sm mb-8">The sages behind the wild.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {TEAM.map((t, i) => (
            <div key={t.name} className="p-5 rounded-2xl border border-white/5 bg-[#0f1520] hover:border-[#00D1FF]/20 transition-all group"
              style={{ animation: `fadeUp 0.3s ease ${i * 0.07}s both` }}>
              <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                {t.emoji}
              </div>
              <p className="text-white font-bold text-sm">{t.name}</p>
              <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="p-8 rounded-3xl border border-white/5 bg-[#0f1520] grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-black text-white mb-4">Find Us in the Wild</h3>
          <div className="space-y-2 text-white/40 text-sm">
            <p>📍 OUTR (CET Campus), Kalinga Nagar,</p>
            <p className="pl-6">Ghatikia, Bhubaneswar, Odisha — 751003</p>
            <p>📞 +91 7205883536</p>
            <p>📧 zairza@cetbbs.ac.in</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white/20 text-sm italic">Presented by</p>
          <p className="text-4xl font-black text-white mt-1">Zairza ✦</p>
          <p className="text-[#00D1FF] text-xs mt-2 font-semibold uppercase tracking-wider">Est. 2020</p>
        </div>
      </div>
    </div>
    <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
  </div>
);

export default AboutUsPage;
