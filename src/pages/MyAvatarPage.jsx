import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';

// ─── Level Config ────────────────────────────────────────────────
const LEVELS = [
  { level: 1, title: 'Forest Cub',    minXP: 0,    maxXP: 200,  color: '#6EE7B7', glow: 'shadow-emerald-400/30' },
  { level: 2, title: 'Cyber Wolf',    minXP: 200,  maxXP: 500,  color: '#00D1FF', glow: 'shadow-[#00D1FF]/30' },
  { level: 3, title: 'Neon Panther',  minXP: 500,  maxXP: 900,  color: '#A78BFA', glow: 'shadow-purple-400/30' },
  { level: 4, title: 'Techno Dragon', minXP: 900,  maxXP: 1400, color: '#F97316', glow: 'shadow-orange-400/30' },
  { level: 5, title: 'Cyber Titan',   minXP: 1400, maxXP: 1400, color: '#FBBF24', glow: 'shadow-yellow-400/30' },
];

const TIER_BADGES = ['🌿', '🐺', '🐆', '🐉', '⚡'];

const EVENT_POINTS = 120;
const STORY_POINTS = 50;

function getCurrentLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return LEVELS[i];
  }
  return LEVELS[0];
}

function getProgress(xp) {
  const lvl = getCurrentLevel(xp);
  if (lvl.level === 5) return 100;
  const next = LEVELS[lvl.level]; // next level
  return Math.min(100, ((xp - lvl.minXP) / (next.minXP - lvl.minXP)) * 100);
}

// ─── Mock initial data ───────────────────────────────────────────
const INITIAL_EVENTS = [
  { id: 1, name: 'Hackathon 3.0',   type: 'Tech',     claimed: false, completed: true  },
  { id: 2, name: 'CTF Challenge',   type: 'Tech',     claimed: false, completed: false },
  { id: 3, name: 'Mushroom Nights', type: 'Fun',      claimed: true,  completed: true  },
  { id: 4, name: 'React Workshop',  type: 'Workshop', claimed: false, completed: true  },
];

const STORY_STATUS = { IDLE: 'idle', PENDING: 'pending', APPROVED: 'approved' };

// ─── Component ───────────────────────────────────────────────────
const MyAvatarPage = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const displayName = user.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : 'Arena Beast';
  const initials = displayName.slice(0, 2).toUpperCase();
  const zenId = `ZEN-${(user.email || 'user@zyrpha').split('@')[0].slice(0, 4).toUpperCase()}-${Math.floor(3000 + displayName.length * 137)}`;

  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [stories, setStories] = useState([]);     // { id, file, status, pts }
  const [xp, setXp] = useState(
    INITIAL_EVENTS.filter(e => e.claimed).length * EVENT_POINTS
  );
  const [toast, setToast] = useState(null);
  const fileRef = useRef();

  const lvl = getCurrentLevel(xp);
  const progress = getProgress(xp);
  const nextLvl = lvl.level < 5 ? LEVELS[lvl.level] : null;

  const showToast = (msg, color = '#00D1FF') => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 2500);
  };

  const claimEvent = (id) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, claimed: true } : e));
    setXp(prev => prev + EVENT_POINTS);
    showToast(`+${EVENT_POINTS} XP — Event Participation!`, '#00D1FF');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const newStory = { id: Date.now(), name: file.name, status: STORY_STATUS.PENDING, pts: STORY_POINTS };
    setStories(prev => [newStory, ...prev]);
    showToast('Story uploaded! Pending review.', '#A78BFA');
    // Simulate approval after 3 s
    setTimeout(() => {
      setStories(prev => prev.map(s => s.id === newStory.id ? { ...s, status: STORY_STATUS.APPROVED } : s));
      setXp(prev => prev + STORY_POINTS);
      showToast(`+${STORY_POINTS} XP — Story Approved! 🎉`, '#6EE7B7');
    }, 3000);
  };

  const participationXP = events.filter(e => e.claimed).length * EVENT_POINTS;
  const storyXP = stories.filter(s => s.status === STORY_STATUS.APPROVED).length * STORY_POINTS;

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
      <Navbar />

      {/* Toast */}
      {toast && (
        <div
          className="fixed top-20 right-6 z-50 px-5 py-3 rounded-xl font-semibold text-sm shadow-2xl transition-all"
          style={{ background: toast.color, color: '#000', boxShadow: `0 0 24px ${toast.color}66` }}
        >
          {toast.msg}
        </div>
      )}

      <div className="pt-24 pb-24 container mx-auto px-6 max-w-4xl space-y-8">

        {/* ── Profile Card ── */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f1520] to-[#090d14] p-8 shadow-2xl">
          {/* Glow backdrop */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
            style={{ background: lvl.color, filter: 'blur(80px)' }} />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-black font-black text-3xl shadow-xl"
                style={{ background: `linear-gradient(135deg, ${lvl.color}, #1e3a5f)`, boxShadow: `0 0 32px ${lvl.color}55` }}
              >
                {initials}
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#0f1520] border border-white/10 flex items-center justify-center text-base">
                {TIER_BADGES[lvl.level - 1]}
              </div>
            </div>

            {/* Info */}
            <div className="text-center sm:text-left flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: lvl.color }}>
                Lv.{lvl.level} · {lvl.title}
              </p>
              <h1 className="text-3xl font-black text-white">{displayName}</h1>
              <p className="text-white/40 text-sm mt-1 font-mono">{zenId}</p>
              <p className="text-white/30 text-xs mt-1">{user.email || 'zyphoria.member@zairza.in'}</p>
            </div>

            {/* Total XP badge */}
            <div className="shrink-0 text-center">
              <div
                className="px-5 py-3 rounded-2xl border"
                style={{ borderColor: `${lvl.color}44`, background: `${lvl.color}11` }}
              >
                <p className="text-3xl font-black" style={{ color: lvl.color }}>{xp}</p>
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">Total XP</p>
              </div>
            </div>
          </div>

          {/* Level progress bar */}
          <div className="mt-8">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>{lvl.title}</span>
              <span>{nextLvl ? `${nextLvl.minXP - xp} XP to ${nextLvl.title}` : '🏆 Max Level Reached!'}</span>
            </div>
            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${lvl.color}99, ${lvl.color})`,
                  boxShadow: `0 0 12px ${lvl.color}88`,
                }}
              />
            </div>
            {/* Level dots */}
            <div className="flex justify-between mt-3">
              {LEVELS.map((l) => (
                <div key={l.level} className="flex flex-col items-center gap-1">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 transition-all duration-500"
                    style={{
                      borderColor: xp >= l.minXP ? l.color : '#ffffff22',
                      background: xp >= l.minXP ? `${l.color}22` : 'transparent',
                    }}
                  >
                    {TIER_BADGES[l.level - 1]}
                  </div>
                  <span className="text-[10px] text-white/30">{l.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── XP Breakdown ── */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-[#00D1FF]/15 bg-[#00D1FF]/5 p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎯</span>
              <p className="text-white/60 text-sm font-semibold">Event Participation</p>
            </div>
            <p className="text-3xl font-black text-[#00D1FF]">{participationXP} <span className="text-sm font-normal text-white/30">XP</span></p>
            <p className="text-white/30 text-xs mt-1">{events.filter(e => e.claimed).length} event(s) completed</p>
          </div>
          <div className="rounded-2xl border border-purple-400/15 bg-purple-400/5 p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📸</span>
              <p className="text-white/60 text-sm font-semibold">Story Uploads</p>
            </div>
            <p className="text-3xl font-black text-purple-400">{storyXP} <span className="text-sm font-normal text-white/30">XP</span></p>
            <p className="text-white/30 text-xs mt-1">{stories.filter(s => s.status === STORY_STATUS.APPROVED).length} story approved</p>
          </div>
        </div>

        {/* ── Event Participation ── */}
        <div className="rounded-3xl border border-white/5 bg-[#0f1520] p-6">
          <h2 className="text-lg font-bold text-white mb-1">Event Participation</h2>
          <p className="text-white/30 text-sm mb-5">Claim {EVENT_POINTS} XP after completing each event you're registered for.</p>
          <div className="space-y-3">
            {events.map((evt) => (
              <div key={evt.id}
                className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div>
                  <p className="text-white font-semibold text-sm">{evt.name}</p>
                  <p className="text-white/30 text-xs mt-0.5">{evt.type} · {EVENT_POINTS} XP on completion</p>
                </div>
                {evt.claimed ? (
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                    ✓ Claimed
                  </span>
                ) : evt.completed ? (
                  <button
                    onClick={() => claimEvent(evt.id)}
                    className="text-xs font-bold px-4 py-2 rounded-full bg-[#00D1FF] text-black hover:bg-[#00D1FF]/80 transition-all active:scale-95"
                  >
                    Claim XP
                  </button>
                ) : (
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white/30 bg-white/5 border border-white/10">
                    In Progress
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Story Upload ── */}
        <div className="rounded-3xl border border-white/5 bg-[#0f1520] p-6">
          <h2 className="text-lg font-bold text-white mb-1">Story Upload Rewards</h2>
          <p className="text-white/30 text-sm mb-5">
            Screenshot a story tagging <span className="text-purple-400 font-semibold">@ZYPHORIA</span> and upload it here to earn {STORY_POINTS} XP per story. Points credited after review.
          </p>

          {/* Upload zone */}
          <button
            onClick={() => fileRef.current.click()}
            className="w-full border-2 border-dashed border-purple-400/20 hover:border-purple-400/50 rounded-2xl py-10 flex flex-col items-center gap-3 transition-all group hover:bg-purple-400/5"
          >
            <span className="text-4xl group-hover:scale-110 transition-transform">📸</span>
            <p className="text-white/50 text-sm font-semibold group-hover:text-white/70 transition-colors">
              Click to upload your story screenshot
            </p>
            <p className="text-white/20 text-xs">JPG, PNG, WEBP · Max 10MB</p>
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />

          {/* Uploaded stories list */}
          {stories.length > 0 && (
            <div className="mt-5 space-y-3">
              {stories.map((s) => (
                <div key={s.id}
                  className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🖼️</span>
                    <div>
                      <p className="text-white text-sm font-semibold truncate max-w-[200px]">{s.name}</p>
                      <p className="text-white/30 text-xs">+{s.pts} XP on approval</p>
                    </div>
                  </div>
                  {s.status === STORY_STATUS.APPROVED ? (
                    <span className="text-xs font-bold px-3 py-1 rounded-full text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                      ✓ Approved
                    </span>
                  ) : (
                    <span className="text-xs font-bold px-3 py-1 rounded-full text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 animate-pulse">
                      ⏳ Reviewing
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Level Guide ── */}
        <div className="rounded-3xl border border-white/5 bg-[#0f1520] p-6">
          <h2 className="text-lg font-bold text-white mb-5">Level Tiers</h2>
          <div className="space-y-3">
            {LEVELS.map((l) => (
              <div key={l.level}
                className="flex items-center gap-4 px-5 py-3 rounded-xl transition-all"
                style={{
                  background: xp >= l.minXP ? `${l.color}0D` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${xp >= l.minXP ? `${l.color}33` : '#ffffff0A'}`,
                }}
              >
                <span className="text-xl w-8 text-center">{TIER_BADGES[l.level - 1]}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold" style={{ color: xp >= l.minXP ? l.color : '#ffffff44' }}>
                    Lv.{l.level} · {l.title}
                  </p>
                  <p className="text-white/30 text-xs">{l.minXP}{l.level < 5 ? `–${LEVELS[l.level]?.minXP}` : '+'} XP</p>
                </div>
                {xp >= l.minXP && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ color: l.color, background: `${l.color}22` }}>
                    {lvl.level === l.level ? 'Current' : '✓ Unlocked'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyAvatarPage;
