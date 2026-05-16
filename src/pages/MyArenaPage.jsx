import React from 'react';
import Navbar from '../components/Navbar';

const MyArenaPage = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const displayName = user.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : 'Arena Beast';
  const initials = displayName.slice(0, 2).toUpperCase();

  const stats = [
    { label: 'Events Joined', value: '4' },
    { label: 'Workshops', value: '2' },
    { label: 'Points', value: '820' },
    { label: 'Rank', value: '#42' },
  ];

  const registeredEvents = [
    { name: 'Hackathon 3.0', type: 'Tech', status: 'Confirmed', color: 'text-[#00D1FF] bg-[#00D1FF]/10 border-[#00D1FF]/20' },
    { name: 'CTF Challenge', type: 'Tech', status: 'Pending', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
    { name: 'Mushroom Nights', type: 'Fun', status: 'Confirmed', color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { name: 'React Workshop', type: 'Workshop', status: 'Confirmed', color: 'text-green-400 bg-green-400/10 border-green-400/20' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-white font-[Outfit]">
      <Navbar />

      <div className="pt-24 pb-20 container mx-auto px-8">

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8 mb-12 pb-10 border-b border-white/5">
          {/* Avatar */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#00D1FF] to-blue-700 flex items-center justify-center text-black font-black text-4xl shadow-2xl shadow-[#00D1FF]/20">
              {initials}
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-400 rounded-full border-2 border-[#0A0E17] flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-green-900 rounded-full" />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-[#00D1FF] text-xs font-bold uppercase tracking-widest mb-1">Arena Member</p>
            <h1 className="text-4xl font-black text-white">{displayName}</h1>
            <p className="text-white/40 text-sm mt-1">{user.email || 'zyphoria.member@zairza.in'}</p>
          </div>

          <div className="md:ml-auto">
            <button className="px-6 py-2.5 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-all text-sm font-semibold">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#00D1FF]/20 transition-colors text-center group"
            >
              <p className="text-3xl font-black text-white group-hover:text-[#00D1FF] transition-colors">{s.value}</p>
              <p className="text-white/40 text-xs mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Registered Events */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">My Registered Events</h2>
          <div className="space-y-3">
            {registeredEvents.map((evt) => (
              <div
                key={evt.name}
                className="flex items-center justify-between px-6 py-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div>
                  <p className="text-white font-semibold text-sm">{evt.name}</p>
                  <p className="text-white/30 text-xs mt-0.5">{evt.type}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${evt.color}`}>
                  {evt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyArenaPage;
