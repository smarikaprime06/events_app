import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// ─── Event Data ──────────────────────────────────────────────────
import imgTreasureHunt   from '../assets/event_treasure_hunt.png';
import imgJammingNight   from '../assets/event_jamming_night.png';
import imgPvpGaming      from '../assets/event_pvp_gaming_png_1778928486488.png';
import imgPaperDance     from '../assets/event_paper_dance_png_1778928508203.png';
import imgTwister        from '../assets/event_twister_png_1778928537973.png';
import imgProgrammer     from '../assets/event_programmer_png_1778928614367.png';
import imgDigTheWeb      from '../assets/event_dig_the_web_png_1778928576445.png';
import imgRoboSumo       from '../assets/event_robo_sumo_png_1778928592182.png';
import imgCpRush         from '../assets/event_cp_rush_png_1778928739732.png';
import imgIdeathon       from '../assets/event_ideathon_png_1778928757787.png';
import imgDesignathon    from '../assets/event_designathon_png_1778928775683.png';

const ALL_EVENTS = {
  fun: [
    { id: 'treasure-hunt',  name: 'Treasure Hunt',  img: imgTreasureHunt,  date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['adventure', 'team'] },
    { id: 'jamming-night',  name: 'Jamming Night',  img: imgJammingNight,  date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['music', 'culture'] },
    { id: 'paper-dance',    name: 'Paper Dance',    img: imgPaperDance,    date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['dance', 'culture'] },
    { id: 'twister',        name: 'Twister',        img: imgTwister,       date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['game', 'team'] },
    { id: 'pvp-gaming',     name: 'PVP Gaming',     img: imgPvpGaming,     date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['game', 'competitive'] },
    { id: 'programmer',     name: 'Programmer',     img: imgProgrammer,    date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['tech', 'fun'] },
  ],
  tech: [
    { id: 'dig-the-web',    name: 'Dig The Web',    img: imgDigTheWeb,     date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['hacking', 'web'] },
    { id: 'cp-rush',        name: 'CP Rush',        img: imgCpRush,        date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['coding', 'competitive'] },
    { id: 'robo-sumo',      name: 'Robo Sumo',      img: imgRoboSumo,      date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['robotics', 'competitive'] },
    { id: 'ideathon',       name: 'Ideathon',       img: imgIdeathon,      date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['ideas', 'innovation'] },
    { id: 'designathon',    name: 'Designathon',    img: imgDesignathon,   date: '27 Apr - 9:00 AM', venue: 'SAC Area', tags: ['design', 'ui'] },
  ],
};

// ─── Event Card ──────────────────────────────────────────────────
const EventCard = ({ event, enrolled, onEnroll, small = false }) => (
  <div className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f1520] hover:border-[#00D1FF]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00D1FF]/10`}>
    {/* Image */}
    <div className={`relative overflow-hidden ${small ? 'h-36' : 'h-52'}`}>
      <img
        src={event.img}
        alt={event.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1520] via-transparent to-transparent" />
      <button className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#00D1FF]/20 border border-[#00D1FF]/40 flex items-center justify-center text-[#00D1FF] text-xs font-bold hover:bg-[#00D1FF]/40 transition-colors">
        i
      </button>
      {enrolled && (
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-400 text-xs font-bold">
          ✓ Enrolled
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-4">
      <h3 className="text-white font-bold text-base mb-3">{event.name}</h3>
      <div className="flex justify-between text-xs text-white/30 mb-4">
        <div>
          <p className="text-white/20 text-[10px] uppercase tracking-wider mb-0.5">Date & Time</p>
          <p className="text-white/50">{event.date}</p>
        </div>
        <div className="text-right">
          <p className="text-white/20 text-[10px] uppercase tracking-wider mb-0.5">Venue</p>
          <p className="text-white/50">{event.venue}</p>
        </div>
      </div>

      {enrolled ? (
        <div className="w-full py-2.5 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-bold text-sm text-center">
          ✓ Enrolled
        </div>
      ) : (
        <button
          onClick={() => onEnroll(event.id)}
          className="w-full py-2.5 rounded-lg bg-[#00D1FF] text-black font-bold text-sm hover:bg-[#00D1FF]/80 hover:shadow-lg hover:shadow-[#00D1FF]/30 transition-all active:scale-95"
        >
          ENROLL NOW
        </button>
      )}
    </div>
  </div>
);

// ─── Inline Recommendations Strip ─────────────────────────────────
const RecommendationStrip = ({ recs, enrolled, onEnroll, otherCategory, otherTitle }) => (
  <div
    className="col-span-full mt-1 mb-3 rounded-2xl border border-[#00D1FF]/10 bg-[#00D1FF]/3 p-5"
    style={{ animation: 'fadeSlideIn 0.4s ease both' }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1 bg-[#00D1FF]/10" />
      <p className="text-[#00D1FF] text-xs font-bold uppercase tracking-widest whitespace-nowrap">
        ✦ You might also like
      </p>
      <div className="h-px flex-1 bg-[#00D1FF]/10" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {recs.map(event => (
        <EventCard
          key={event.id}
          event={event}
          enrolled={!!enrolled[event.id]}
          onEnroll={onEnroll}
          small
        />
      ))}
    </div>

    <div className="mt-5 p-4 rounded-xl border border-white/5 bg-white/3 flex items-center justify-between">
      <div>
        <p className="text-white font-semibold text-sm">Explore {otherTitle} too →</p>
        <p className="text-white/30 text-xs mt-0.5">More adventures await in the cyber wild.</p>
      </div>
      <Link
        to={`/events/${otherCategory}`}
        className="px-4 py-2 rounded-full border border-[#00D1FF]/40 text-[#00D1FF] text-xs font-bold hover:bg-[#00D1FF]/10 transition-colors shrink-0 ml-4"
      >
        View {otherTitle}
      </Link>
    </div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────
const EventsPage = () => {
  const { category } = useParams();
  const events = ALL_EVENTS[category] || ALL_EVENTS.fun;
  const title = category === 'tech' ? 'Tech Events' : 'Fun Events';
  const otherCategory = category === 'tech' ? 'fun' : 'tech';
  const otherTitle = category === 'tech' ? 'Fun Events' : 'Tech Events';

  const [enrolled, setEnrolled]         = useState({});
  // Track the index after which we inject recommendations
  const [recAfterIdx, setRecAfterIdx]   = useState(null);

  const handleEnroll = (id) => {
    if (enrolled[id]) return;
    const idx = events.findIndex(e => e.id === id);
    setEnrolled(prev => ({ ...prev, [id]: true }));
    setRecAfterIdx(idx);
  };

  // 3 recommendations: not the just-enrolled event, not already enrolled
  const enrolledId = recAfterIdx !== null ? events[recAfterIdx]?.id : null;
  const recommendations = events
    .filter(e => e.id !== enrolledId && !enrolled[e.id])
    .slice(0, 3);

  // Build rows: each card, then inject recs strip right after the enrolled one
  const rows = [];
  events.forEach((evt, idx) => {
    rows.push(
      <EventCard
        key={evt.id}
        event={evt}
        enrolled={!!enrolled[evt.id]}
        onEnroll={handleEnroll}
      />
    );
    if (idx === recAfterIdx && recommendations.length > 0) {
      rows.push(
        <RecommendationStrip
          key="recs"
          recs={recommendations}
          enrolled={enrolled}
          onEnroll={handleEnroll}
          otherCategory={otherCategory}
          otherTitle={otherTitle}
        />
      );
    }
  });

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <Navbar />

      <div className="pt-24 pb-20 container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/home" className="text-white/30 hover:text-white/60 transition-colors text-sm">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-[#00D1FF] text-sm font-semibold">{title}</span>
          </div>
          <h1 className="text-5xl font-black text-white">{title}</h1>
          <p className="text-white/40 mt-2 text-sm">Register for your favourite events before slots run out.</p>
        </div>

        {/* Events Grid — with inline recommendation injection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rows}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default EventsPage;
