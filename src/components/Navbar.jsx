import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const displayName = user.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : 'Arena Beast';
  const initials = displayName.slice(0, 2).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0E17]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#00D1FF] rounded-lg rotate-12 flex items-center justify-center font-black text-black group-hover:rotate-0 transition-transform duration-300">Z</div>
          <span className="text-2xl font-black text-white tracking-tighter">ZYPHORIA</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-white/60 font-medium text-sm">
          <Link to="/home" className="hover:text-[#00D1FF] transition-colors py-1 border-b-2 border-transparent hover:border-[#00D1FF]">Events</Link>
          <Link to="/home" className="hover:text-[#00D1FF] transition-colors py-1 border-b-2 border-transparent hover:border-[#00D1FF]">Workshops</Link>
          <Link to="/home" className="hover:text-[#00D1FF] transition-colors py-1 border-b-2 border-transparent hover:border-[#00D1FF]">About Us</Link>
        </div>

        {/* My Arena Avatar */}
        <div className="relative" ref={dropdownRef}>
          <button
            id="my-arena-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseEnter={() => setDropdownOpen(true)}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 hover:border-[#00D1FF]/50 bg-white/5 hover:bg-white/10 transition-all group"
          >
            {/* Avatar circle */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D1FF] to-blue-600 flex items-center justify-center text-black font-black text-sm shadow-lg shadow-[#00D1FF]/20">
              {initials}
            </div>
            <span className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors hidden sm:block">
              My Arena
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-white/40 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute right-0 mt-2 w-56 bg-[#111827]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
            >
              {/* User info header */}
              <div className="px-4 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D1FF] to-blue-600 flex items-center justify-center text-black font-black text-sm">
                    {initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{displayName}</p>
                    <p className="text-white/40 text-xs truncate">{user.email || 'zyphoria.member'}</p>
                  </div>
                </div>
              </div>

              {/* View profile */}
              <Link
                to="/my-arena"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00D1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                View My Avatar
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
