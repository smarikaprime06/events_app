import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import imgDigTheWeb   from '../assets/event_dig_the_web_png_1778928576445.png';
import imgCpRush      from '../assets/event_cp_rush_png_1778928739732.png';
import imgIdeathon    from '../assets/event_ideathon_png_1778928757787.png';
import imgDesignathon from '../assets/event_designathon_png_1778928775683.png';
import imgPvpGaming   from '../assets/event_pvp_gaming_png_1778928486488.png';

const TABS = ['All', 'Tech', 'Fun', 'Gaming'];

const ALL_EVENTS_LIST = [
  {
    id: 'dig-the-web', name: 'Dig The Web',    img: imgDigTheWeb,
    type: 'Tech',  date: '27 Apr - 9:00 AM',  venue: 'CS Lab A',  slots: 30, filled: 22,
    desc: 'Hunt hidden flags across encrypted layers of the cyber simulation.',
    link: '/events/tech',
  },
  {
    id: 'cp-rush', name: 'CP Rush',         img: imgCpRush,
    type: 'Tech',  date: '27 Apr - 10:00 AM', venue: 'CS Lab B',  slots: 40, filled: 17,
    desc: 'Competitive programming sprint — solve problems against the clock.',
    link: '/events/tech',
  },
  {
    id: 'ideathon', name: 'Ideathon',        img: imgIdeathon,
    type: 'Tech',  date: '28 Apr - 2:00 PM',  venue: 'Seminar Hall', slots: 20, filled: 12,
    desc: 'Pitch your wildest tech idea to a panel of futurists.',
    link: '/events/tech',
  },
  {
    id: 'designathon', name: 'Designathon',     img: imgDesignathon,
    type: 'Tech',  date: '29 Apr - 10:00 AM', venue: 'Design Studio', slots: 25, filled: 8,
    desc: 'Design a futuristic UI/UX in 4 hours. May the best interface win.',
    link: '/events/tech',
  },
  {
    id: 'pvp-gaming', name: 'PVP Gaming',      img: imgPvpGaming,
    type: 'Gaming', date: '27 Apr - 4:00 PM', venue: 'Main Arena', slots: 50, filled: 41,
    desc: 'Cyber-wolf warriors clash in the ultimate gaming arena.',
    link: '/events/fun',
  },
];

const TYPE_COLORS = {
  Tech:    { bg: '#00D1FF15', border: '#00D1FF33', text: '#00D1FF' },
  Fun:     { bg: '#A855F715', border: '#A855F733', text: '#A855F7' },
  Gaming:  { bg: '#F9731615', border: '#F9731633', text: '#F97316' },
  Workshop:{ bg: '#22C55E15', border: '#22C55E33', text: '#22C55E' },
};

const EventsLandingPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? ALL_EVENTS_LIST
    : ALL_EVENTS_LIST.filter(e => e.type === activeTab);

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <Navbar />

      <div className="pt-28 pb-20 container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#00D1FF] text-xs font-bold uppercase tracking-widest mb-2">ZYPHORIA 3.0</p>
          <h1 className="text-5xl font-black text-white mb-3">All Events</h1>
          <p className="text-white/40 text-sm max-w-lg">Explore every arena in the cyber wild. Register before slots run out.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${
                activeTab === tab
                  ? 'bg-[#00D1FF] text-black border-[#00D1FF] shadow-lg shadow-[#00D1FF]/30'
                  : 'bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filtered.map((evt, i) => {
            const c = TYPE_COLORS[evt.type] || TYPE_COLORS.Tech;
            const pct = Math.round((evt.filled / evt.slots) * 100);
            return (
              <div
                key={evt.id}
                className="flex gap-5 rounded-2xl border border-white/5 bg-[#0f1520] hover:border-[#00D1FF]/20 transition-all p-4 group"
                style={{ animation: `fadeUp 0.3s ease ${i * 0.06}s both` }}
              >
                {/* Thumbnail */}
                <div className="w-28 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={evt.img} alt={evt.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-base">{evt.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border" style={{ color: c.text, background: c.bg, borderColor: c.border }}>
                      {evt.type}
                    </span>
                  </div>
                  <p className="text-white/40 text-xs mb-2 line-clamp-1">{evt.desc}</p>
                  <div className="flex gap-4 text-white/30 text-xs">
                    <span>📅 {evt.date}</span>
                    <span>📍 {evt.venue}</span>
                  </div>
                  {/* Slots bar */}
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: pct > 80 ? '#EF4444' : '#00D1FF' }}
                      />
                    </div>
                    <span className="text-[10px] text-white/30">{evt.slots - evt.filled} slots left</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center shrink-0">
                  <Link
                    to={evt.link}
                    className="px-4 py-2 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-[#00D1FF] text-xs font-bold hover:bg-[#00D1FF]/20 transition-all whitespace-nowrap"
                  >
                    Enroll →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick links */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {[
            { label: 'Tech Events', sub: 'Hack, code & build', to: '/events/tech', color: '#00D1FF' },
            { label: 'Fun Events',  sub: 'Dance, play & vibe', to: '/events/fun',  color: '#A855F7' },
          ].map(c => (
            <Link key={c.label} to={c.to}
              className="p-5 rounded-2xl border border-white/5 bg-white/5 hover:border-white/15 transition-all flex justify-between items-center group"
            >
              <div>
                <p className="text-white font-bold">{c.label}</p>
                <p className="text-white/30 text-xs mt-0.5">{c.sub}</p>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform" style={{ color: c.color }}>→</span>
            </Link>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  );
};

export default EventsLandingPage;
