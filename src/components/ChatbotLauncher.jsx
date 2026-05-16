import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, EVENTS } from '../data/chatbotEvents';

// ─── Difficulty Badge ────────────────────────────────────────────
const DIFF_COLORS = {
  Beginner:     { bg: '#22C55E22', border: '#22C55E44', text: '#22C55E' },
  Easy:         { bg: '#22C55E22', border: '#22C55E44', text: '#22C55E' },
  Medium:       { bg: '#F59E0B22', border: '#F59E0B44', text: '#F59E0B' },
  Hard:         { bg: '#EF444422', border: '#EF444444', text: '#EF4444' },
  Expert:       { bg: '#A855F722', border: '#A855F744', text: '#A855F7' },
  Intermediate: { bg: '#F59E0B22', border: '#F59E0B44', text: '#F59E0B' },
};

// ─── Typing dots ─────────────────────────────────────────────────
const TypingDots = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map(i => (
      <motion.div key={i} className="w-2 h-2 rounded-full bg-[#00D1FF]"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

// ─── Message Bubble ───────────────────────────────────────────────
const MessageBubble = ({ msg }) => {
  const isBot = msg.from === 'bot';
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00D1FF] to-blue-700 flex items-center justify-center text-black font-black text-xs mr-2 mt-1 shrink-0 shadow-lg shadow-[#00D1FF]/30">
          Z
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isBot
            ? 'bg-white/5 border border-white/10 text-white/90 rounded-tl-sm'
            : 'bg-[#00D1FF]/15 border border-[#00D1FF]/30 text-[#00D1FF] rounded-tr-sm'
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  );
};

// ─── Category Cards ───────────────────────────────────────────────
const CategoryCards = ({ onSelect }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-2 mt-2">
    {CATEGORIES.map((cat, i) => (
      <motion.button
        key={cat.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${cat.color}55` }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onSelect(cat)}
        className="relative overflow-hidden p-3 rounded-xl border text-left transition-all"
        style={{ borderColor: `${cat.color}33`, background: `${cat.color}0D` }}
      >
        <div className="absolute top-0 right-0 w-12 h-12 rounded-full opacity-10 blur-xl"
          style={{ background: cat.color }} />
        <span className="text-2xl block mb-1">{cat.icon}</span>
        <p className="text-white font-bold text-xs">{cat.label}</p>
        <p className="text-white/40 text-[10px] mt-0.5 leading-tight">{cat.desc}</p>
      </motion.button>
    ))}
  </motion.div>
);

// ─── Event Cards List ─────────────────────────────────────────────
const EventCardList = ({ events, onSelect }) => (
  <div className="mt-2 space-y-3">
    {events.map((evt, i) => {
      const diff = DIFF_COLORS[evt.difficulty] || DIFF_COLORS.Medium;
      return (
        <motion.div
          key={evt.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#00D1FF]/30 transition-all"
        >
          {/* Banner */}
          <div className="relative h-24 overflow-hidden">
            <img src={evt.img} alt={evt.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] to-transparent" />
            <div className="absolute bottom-2 left-3 flex items-center gap-2">
              <span className="text-white font-bold text-sm drop-shadow">{evt.name}</span>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                style={{ color: diff.text, background: diff.bg, borderColor: diff.border }}
              >
                {evt.difficulty}
              </span>
            </div>
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#00D1FF]/20 border border-[#00D1FF]/40 text-[#00D1FF] text-[10px] font-bold">
              ⚡ {evt.xp} XP
            </div>
          </div>
          {/* Body */}
          <div className="px-3 py-2">
            <p className="text-white/40 text-xs leading-snug mb-2">{evt.desc}</p>
            <button
              onClick={() => onSelect(evt)}
              className="w-full py-1.5 rounded-lg bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-[#00D1FF] text-xs font-bold hover:bg-[#00D1FF]/20 transition-all"
            >
              View Details →
            </button>
          </div>
        </motion.div>
      );
    })}
  </div>
);

// ─── Event Detail Card ────────────────────────────────────────────
const EventDetailCard = ({ event, onBack, onRegister }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mt-2 rounded-2xl overflow-hidden border border-[#00D1FF]/30 bg-white/5"
    style={{ boxShadow: '0 0 24px #00D1FF22' }}
  >
    {/* Banner */}
    <div className="relative h-32">
      <img src={event.img} alt={event.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/50 to-transparent" />
      <div className="absolute bottom-3 left-3">
        <p className="text-[#00D1FF] text-xs font-bold uppercase tracking-widest">Event Details</p>
        <h3 className="text-white font-black text-lg">{event.name}</h3>
      </div>
    </div>

    {/* Info grid */}
    <div className="p-3 grid grid-cols-2 gap-2 text-xs">
      {[
        ['📍 Venue',    event.venue],
        ['📅 Date',     event.date],
        ['🕐 Time',     event.time],
        ['💰 Fee',      event.fee],
        ['👥 Team',     event.team],
        ['🏆 Prize',    event.prize],
      ].map(([label, val]) => (
        <div key={label} className="px-3 py-2 rounded-lg bg-white/5 border border-white/5">
          <p className="text-white/30 text-[10px] mb-0.5">{label}</p>
          <p className="text-white font-semibold">{val}</p>
        </div>
      ))}
    </div>

    {/* Description */}
    <div className="px-3 pb-2">
      <p className="text-white/50 text-xs leading-relaxed">{event.desc}</p>
    </div>

    {/* Rules */}
    <div className="px-3 pb-2">
      <p className="text-[#00D1FF] text-[10px] font-bold uppercase tracking-wider mb-1">Rules</p>
      {event.rules.map((r, i) => (
        <p key={i} className="text-white/40 text-xs">• {r}</p>
      ))}
    </div>

    {/* Contact */}
    <div className="px-3 pb-3">
      <p className="text-white/30 text-[10px]">📞 Coordinator: <span className="text-white/60">{event.contact}</span></p>
    </div>

    {/* Buttons */}
    <div className="px-3 pb-3 flex gap-2">
      <button
        onClick={onBack}
        className="flex-1 py-2 rounded-lg border border-white/10 text-white/50 text-xs font-bold hover:border-white/30 hover:text-white transition-all"
      >
        ← Back
      </button>
      <button
        onClick={onRegister}
        className="flex-[2] py-2 rounded-lg bg-[#00D1FF] text-black text-xs font-black hover:bg-[#00D1FF]/80 transition-all"
        style={{ boxShadow: '0 0 16px #00D1FF55' }}
      >
        Register Now ⚡
      </button>
    </div>
  </motion.div>
);

// ─── Main Chat Window ─────────────────────────────────────────────
const ZEN_FLOW = { WELCOME: 'welcome', CATEGORY: 'category', EVENTS: 'events', DETAIL: 'detail', REGISTERED: 'registered' };

const ChatWindow = ({ onClose, fileRef, onScreenshot }) => {
  const [messages, setMessages] = useState([]);
  const [flow, setFlow]         = useState(ZEN_FLOW.WELCOME);
  const [typing, setTyping]     = useState(false);
  const [category, setCategory] = useState(null);
  const [selEvent, setSelEvent] = useState(null);
  const [widget, setWidget]     = useState(null); // 'categories' | 'events' | 'detail'
  const bottomRef = useRef();

  const addBot = (text, delay = 0) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + Math.random(), from: 'bot', text }]);
    }, delay + 800);
  };

  const addUser = (text) => {
    setMessages(prev => [...prev, { id: Date.now(), from: 'user', text }]);
  };

  // Welcome on mount
  useEffect(() => {
    setTimeout(() => {
      setMessages([{ id: 1, from: 'bot', text: '🌿 Welcome to Zyphoria, Explorer.\nWhich zone would you like to enter?' }]);
      setWidget('categories');
    }, 400);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, widget]);

  const handleSelectCategory = (cat) => {
    setWidget(null);
    addUser(cat.label);
    setCategory(cat);
    setFlow(ZEN_FLOW.EVENTS);
    addBot(`Loading ${cat.label} Arenas…`, 0);
    setTimeout(() => setWidget('events'), 1800);
  };

  const handleSelectEvent = (evt) => {
    setWidget(null);
    addUser(`Tell me about ${evt.name}`);
    setSelEvent(evt);
    setFlow(ZEN_FLOW.DETAIL);
    addBot(`Here are the full details for ${evt.name}:`, 0);
    setTimeout(() => setWidget('detail'), 1600);
  };

  const handleBack = () => {
    setWidget(null);
    setSelEvent(null);
    setFlow(ZEN_FLOW.EVENTS);
    addBot(`Back in ${category.label}. Pick another event or I can show all categories again.`, 0);
    setTimeout(() => setWidget('events'), 1600);
  };

  const handleRegister = () => {
    setWidget(null);
    addUser('Register Now!');
    setFlow(ZEN_FLOW.REGISTERED);
    addBot(`🎉 You're registered for ${selEvent.name}! You've earned ⚡ ${selEvent.xp} XP. Check your My Avatar page for your rewards!`, 0);
    setTimeout(() => {
      addBot('Want to explore more zones?', 1600);
      setTimeout(() => setWidget('categories'), 3200);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="fixed bottom-24 right-4 sm:right-6 w-[340px] sm:w-[380px] max-h-[600px] rounded-3xl overflow-hidden z-50 flex flex-col"
      style={{
        background: 'rgba(10, 14, 23, 0.92)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(0,209,255,0.25)',
        boxShadow: '0 0 60px rgba(0,209,255,0.1), 0 24px 60px rgba(0,0,0,0.6)',
      }}
    >
      {/* ── Header ── */}
      <div className="relative px-4 py-3 border-b border-white/5 shrink-0"
        style={{ background: 'linear-gradient(135deg, rgba(0,209,255,0.08) 0%, rgba(10,14,23,0) 100%)' }}
      >
        {/* Scan icon top-right */}
        <div className="absolute top-3 right-12 flex items-center gap-2">
          <button
            onClick={onScreenshot}
            title="Upload Screenshot"
            className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#00D1FF] hover:border-[#00D1FF]/40 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        <button onClick={onClose} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D1FF] to-blue-700 flex items-center justify-center font-black text-black text-sm shadow-lg shadow-[#00D1FF]/30">
              Z
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0A0E17]" />
          </div>
          <div>
            <p className="text-white font-black text-sm tracking-wide">ZEN 4.0</p>
            <p className="text-[#00D1FF] text-[10px] font-medium">Your Guide in the Cyber Wild</p>
          </div>
        </div>

        {/* Scanning line animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent"
          animate={{ scaleX: [0, 1, 0], x: ['-100%', '0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '50%' }}
        />
      </div>

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        <AnimatePresence>
          {messages.map(msg => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00D1FF] to-blue-700 flex items-center justify-center text-black font-black text-xs shrink-0">Z</div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm">
                <TypingDots />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Widgets */}
        <AnimatePresence mode="wait">
          {!typing && widget === 'categories' && (
            <motion.div key="cats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CategoryCards onSelect={handleSelectCategory} />
            </motion.div>
          )}
          {!typing && widget === 'events' && category && (
            <motion.div key="evts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <EventCardList events={EVENTS[category.id]} onSelect={handleSelectEvent} />
            </motion.div>
          )}
          {!typing && widget === 'detail' && selEvent && (
            <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <EventDetailCard event={selEvent} onBack={handleBack} onRegister={handleRegister} />
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* ── Particles (purely decorative) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00D1FF]"
            style={{ left: `${10 + i * 16}%`, top: `${20 + (i % 3) * 25}%`, opacity: 0.15 }}
            animate={{ y: [-6, 6, -6], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ─── Launcher Button ─────────────────────────────────────────────
const ChatbotLauncher = () => {
  const [open, setOpen]   = useState(false);
  const [pulse, setPulse] = useState(true);
  const fileRef = useRef();

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleScreenshot = () => fileRef.current?.click();

  return (
    <>
      <input ref={fileRef} type="file" accept="image/*" className="hidden"
        onChange={(e) => {
          if (e.target.files[0]) alert('Screenshot uploaded! Our team will review it for Story XP rewards.');
        }}
      />

      <AnimatePresence>
        {open && (
          <ChatWindow
            key="window"
            onClose={() => setOpen(false)}
            fileRef={fileRef}
            onScreenshot={handleScreenshot}
          />
        )}
      </AnimatePresence>

      {/* Floating button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip */}
        <AnimatePresence>
          {!open && pulse && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              className="px-3 py-1.5 rounded-full bg-[#0A0E17] border border-[#00D1FF]/30 text-[#00D1FF] text-xs font-semibold shadow-lg"
              style={{ boxShadow: '0 0 16px #00D1FF33' }}
            >
              Ask ZEN 4.0 ✦
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => { setOpen(o => !o); setPulse(false); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center font-black text-black text-lg shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #00D1FF, #0066FF)',
            boxShadow: '0 0 32px rgba(0,209,255,0.5), 0 8px 24px rgba(0,0,0,0.4)',
          }}
        >
          {/* Ping ring */}
          {!open && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00D1FF]"
              animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="text-sm">✕</motion.span>
            ) : (
              <motion.span key="z" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="font-black text-base">Z</motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default ChatbotLauncher;
