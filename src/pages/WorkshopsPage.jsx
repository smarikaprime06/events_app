import React from 'react';
import Navbar from '../components/Navbar';
import imgDesignathon from '../assets/event_designathon_png_1778928775683.png';
import imgCpRush      from '../assets/event_cp_rush_png_1778928739732.png';
import imgIdeathon    from '../assets/event_ideathon_png_1778928757787.png';

const WORKSHOPS = [
  {
    id: 'react-ws', name: 'React & Vite', img: imgDesignathon,
    date: '27 Apr 2026', time: '10:00 AM', venue: 'Lab 201',
    duration: '4 hrs', level: 'Beginner', fee: '₹100', seats: 30, filled: 18,
    desc: 'Build blazing-fast web apps with React 19 and Vite. Hands-on coding from zero to hero.',
    topics: ['React Hooks', 'Component Design', 'Vite Setup', 'Routing', 'State Management'],
    instructor: 'Anika Sharma',
  },
  {
    id: 'python-ws', name: 'Python & ML', img: imgCpRush,
    date: '28 Apr 2026', time: '10:00 AM', venue: 'AI Lab',
    duration: '5 hrs', level: 'Intermediate', fee: '₹150', seats: 25, filled: 20,
    desc: 'From pandas to neural nets — explore machine learning in the cyber lab.',
    topics: ['NumPy & Pandas', 'Scikit-learn', 'Neural Networks', 'Data Visualisation'],
    instructor: 'Ravi Kumar',
  },
  {
    id: 'uiux-ws', name: 'UI/UX Design', img: imgIdeathon,
    date: '29 Apr 2026', time: '9:00 AM', venue: 'Design Studio',
    duration: '3 hrs', level: 'Beginner', fee: '₹100', seats: 20, filled: 7,
    desc: 'Learn Figma like a pro and design interfaces that feel alive and futuristic.',
    topics: ['Figma Basics', 'Design Systems', 'Prototyping', 'User Research'],
    instructor: 'Pooja Nair',
  },
];

const LEVEL_STYLE = {
  Beginner:     { color: '#22C55E', bg: '#22C55E15' },
  Intermediate: { color: '#F59E0B', bg: '#F59E0B15' },
};

const WorkshopsPage = () => (
  <div className="min-h-screen bg-[#0A0E17] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
    <Navbar />
    <div className="pt-28 pb-20 container mx-auto px-6 max-w-5xl">
      <div className="mb-12">
        <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">Learn · Build · Grow</p>
        <h1 className="text-5xl font-black text-white mb-3">Workshops</h1>
        <p className="text-white/40 text-sm max-w-lg">Hands-on sessions with the cyber sages to level up your skills in the wild.</p>
      </div>

      <div className="space-y-6">
        {WORKSHOPS.map((ws, i) => {
          const lvl = LEVEL_STYLE[ws.level] || LEVEL_STYLE.Beginner;
          const pct = Math.round((ws.filled / ws.seats) * 100);
          return (
            <div key={ws.id} className="rounded-3xl border border-white/5 bg-[#0f1520] overflow-hidden hover:border-green-400/20 transition-all group"
              style={{ animation: `fadeUp 0.35s ease ${i * 0.1}s both` }}>
              <div className="grid md:grid-cols-[260px_1fr]">
                <div className="relative h-44 md:h-auto overflow-hidden">
                  <img src={ws.img} alt={ws.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1520] hidden md:block" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">{ws.name}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{ws.desc}</p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full shrink-0"
                      style={{ color: lvl.color, background: lvl.bg }}>{ws.level}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {[['📅', ws.date], ['🕐', `${ws.time} · ${ws.duration}`], ['📍', ws.venue], ['💰', ws.fee]].map(([icon, val]) => (
                      <div key={val} className="px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                        <p className="text-white/30 text-[10px] mb-0.5">{icon}</p>
                        <p className="text-white/70 text-xs font-semibold">{val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ws.topics.map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-[10px] text-white/30 mb-1">
                        <span>Seats</span><span>{ws.seats - ws.filled} left</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5">
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct > 80 ? '#EF4444' : '#22C55E' }} />
                      </div>
                    </div>
                    <button className="px-5 py-2.5 rounded-xl bg-green-400/10 border border-green-400/30 text-green-400 text-sm font-bold hover:bg-green-400/20 transition-all">
                      Register →
                    </button>
                  </div>
                  <p className="text-white/20 text-xs mt-3">🎓 <span className="text-white/40">{ws.instructor}</span></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
  </div>
);

export default WorkshopsPage;
