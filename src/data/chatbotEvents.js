// ─── Central event data for the ZEN 4.0 chatbot ─────────────────
import imgTreasureHunt from '../assets/event_treasure_hunt.png';
import imgJammingNight from '../assets/event_jamming_night.png';
import imgPvpGaming    from '../assets/event_pvp_gaming_png_1778928486488.png';
import imgTwister      from '../assets/event_twister_png_1778928537973.png';
import imgDigTheWeb    from '../assets/event_dig_the_web_png_1778928576445.png';
import imgRoboSumo     from '../assets/event_robo_sumo_png_1778928592182.png';
import imgCpRush       from '../assets/event_cp_rush_png_1778928739732.png';
import imgIdeathon     from '../assets/event_ideathon_png_1778928757787.png';
import imgDesignathon  from '../assets/event_designathon_png_1778928775683.png';
import imgProgrammer   from '../assets/event_programmer_png_1778928614367.png';

export const CATEGORIES = [
  { id: 'fun',      label: 'Fun Events',    icon: '🎉', color: '#A855F7', desc: 'Games, dance & cultural madness' },
  { id: 'tech',     label: 'Tech Events',   icon: '⚡', color: '#00D1FF', desc: 'Code, hack & build the future' },
  { id: 'gaming',   label: 'Gaming Events', icon: '🎮', color: '#F97316', desc: 'Compete in the ultimate arenas' },
  { id: 'workshop', label: 'Workshops',     icon: '🛠️', color: '#22C55E', desc: 'Learn from the cyber sages' },
];

export const EVENTS = {
  fun: [
    {
      id: 'treasure-hunt', name: 'Treasure Hunt', img: imgTreasureHunt,
      xp: 150, difficulty: 'Medium', desc: 'Decode clues and race through the cyber forest to claim the hidden relic.',
      venue: 'Main Campus', date: '27 Apr 2026', time: '9:00 AM', fee: '₹100', team: '2–4', prize: '₹5,000',
      rules: ['Teams of 2–4 only', 'No external devices', 'Follow the QR trail', 'First team to finish wins'],
      contact: 'Rohan: +91 98765 00001',
    },
    {
      id: 'jamming-night', name: 'Jamming Night', img: imgJammingNight,
      xp: 120, difficulty: 'Easy', desc: 'Unleash your inner rockstar in a neon-lit cyber stage battle.',
      venue: 'SAC Auditorium', date: '27 Apr 2026', time: '7:00 PM', fee: 'Free', team: 'Solo / Duo', prize: '₹3,000',
      rules: ['Original compositions preferred', 'Max 10 min per act', 'Instruments provided on request'],
      contact: 'Priya: +91 98765 00002',
    },
    {
      id: 'twister', name: 'Twister', img: imgTwister,
      xp: 100, difficulty: 'Easy', desc: 'Glow-in-the-dark holographic twister in the cyber grove. Don\'t fall!',
      venue: 'Open Ground', date: '28 Apr 2026', time: '11:00 AM', fee: '₹50', team: 'Solo', prize: '₹2,000',
      rules: ['Standard Twister rules apply', 'Referee decisions are final', 'Fun dress code encouraged'],
      contact: 'Kiran: +91 98765 00003',
    },
    {
      id: 'paper-dance', name: 'Paper Dance', img: imgProgrammer,
      xp: 80, difficulty: 'Easy', desc: 'Dance your way to victory on a shrinking digital platform.',
      venue: 'SAC Area', date: '28 Apr 2026', time: '3:00 PM', fee: '₹50', team: 'Duo', prize: '₹2,500',
      rules: ['Pairs only', 'Music stops = freeze', 'Last pair standing wins'],
      contact: 'Sneha: +91 98765 00004',
    },
  ],
  tech: [
    {
      id: 'dig-the-web', name: 'Dig The Web', img: imgDigTheWeb,
      xp: 200, difficulty: 'Hard', desc: 'Hunt hidden flags across encrypted layers of the dark web simulation.',
      venue: 'CS Lab Block A', date: '27 Apr 2026', time: '9:00 AM', fee: '₹150', team: '1–2', prize: '₹10,000',
      rules: ['No external help', 'Active internet allowed', 'First to complete all flags wins', 'No brute force attacks'],
      contact: 'Arjun: +91 98765 00005',
    },
    {
      id: 'cp-rush', name: 'CP Rush', img: imgCpRush,
      xp: 220, difficulty: 'Hard', desc: 'Competitive programming sprint — solve as many problems as you can before time runs out.',
      venue: 'CS Lab Block B', date: '27 Apr 2026', time: '10:00 AM', fee: '₹100', team: 'Solo', prize: '₹8,000',
      rules: ['HackerRank platform', 'Any language allowed', 'Time penalty for wrong submissions', '3 hour duration'],
      contact: 'Meera: +91 98765 00006',
    },
    {
      id: 'robo-sumo', name: 'Robo Sumo', img: imgRoboSumo,
      xp: 250, difficulty: 'Expert', desc: 'Build and battle — your robot vs theirs in the cyber sumo ring.',
      venue: 'Mech Arena', date: '28 Apr 2026', time: '9:00 AM', fee: '₹300', team: '2–3', prize: '₹12,000',
      rules: ['Robot weight max 2kg', 'Autonomous mode only', 'Custom builds allowed', '3 rounds per match'],
      contact: 'Dev: +91 98765 00007',
    },
    {
      id: 'ideathon', name: 'Ideathon', img: imgIdeathon,
      xp: 180, difficulty: 'Medium', desc: 'Pitch your wildest tech idea to a panel of futurists and investors.',
      venue: 'Main Seminar Hall', date: '28 Apr 2026', time: '2:00 PM', fee: '₹200', team: '2–4', prize: '₹15,000',
      rules: ['10 min pitch + 5 min Q&A', 'PPT or prototype required', 'Original ideas only'],
      contact: 'Tanya: +91 98765 00008',
    },
    {
      id: 'designathon', name: 'Designathon', img: imgDesignathon,
      xp: 160, difficulty: 'Medium', desc: 'Design a futuristic UI/UX in 4 hours. May the best interface win.',
      venue: 'Design Studio', date: '29 Apr 2026', time: '10:00 AM', fee: '₹100', team: 'Solo / Duo', prize: '₹6,000',
      rules: ['Figma or Adobe XD only', 'Theme revealed on day', '4 hour time limit'],
      contact: 'Isha: +91 98765 00009',
    },
  ],
  gaming: [
    {
      id: 'bgmi', name: 'BGMI Tournament', img: imgPvpGaming,
      xp: 300, difficulty: 'Expert', desc: 'Squad up and survive the cyber battleground. Only one team claims the Chicken Dinner.',
      venue: 'Main Arena', date: '27 Apr 2026', time: '4:00 PM', fee: '₹400', team: '4', prize: '₹20,000',
      rules: ['Registered squad only', 'Emulators banned', 'Custom room codes provided', '3 matches total'],
      contact: 'Raj: +91 98765 00010',
    },
    {
      id: 'valorant', name: 'Valorant Clash', img: imgDigTheWeb,
      xp: 280, difficulty: 'Expert', desc: '5v5 tactical warfare in the neon grid. Strategize, aim, dominate.',
      venue: 'Main Arena', date: '24 Aug 2026', time: '5:00 PM', fee: '₹200', team: '5', prize: '₹15,000',
      rules: ['PC only', 'No cheats/hacks', 'Best of 3 format', 'Team registered in advance'],
      contact: 'Varun: +91 98765 00011',
    },
    {
      id: 'fifa', name: 'FIFA Faceoff', img: imgTwister,
      xp: 180, difficulty: 'Medium', desc: 'The beautiful game meets the cyber era. Dribble past your opponents to glory.',
      venue: 'Gaming Zone', date: '28 Apr 2026', time: '11:00 AM', fee: '₹150', team: 'Solo', prize: '₹5,000',
      rules: ['FIFA 25 on PS5', 'Random team selection', 'Knockout format', 'No extra time abuse'],
      contact: 'Sid: +91 98765 00012',
    },
  ],
  workshop: [
    {
      id: 'react-ws', name: 'React & Vite', img: imgDesignathon,
      xp: 120, difficulty: 'Beginner', desc: 'Build blazing-fast web apps with React 19 and Vite. From zero to hero.',
      venue: 'Lab 201', date: '27 Apr 2026', time: '10:00 AM', fee: '₹100', team: 'Solo', prize: 'Certificate',
      rules: ['Laptop required', 'Node.js pre-installed', '4 hour hands-on session'],
      contact: 'Anika: +91 98765 00013',
    },
    {
      id: 'python-ws', name: 'Python & ML', img: imgCpRush,
      xp: 140, difficulty: 'Intermediate', desc: 'From pandas to neural nets — explore machine learning in the cyber lab.',
      venue: 'AI Lab', date: '28 Apr 2026', time: '10:00 AM', fee: '₹150', team: 'Solo', prize: 'Certificate',
      rules: ['Python 3.10+ required', 'Anaconda preferred', '5 hour workshop'],
      contact: 'Ravi: +91 98765 00014',
    },
    {
      id: 'uiux-ws', name: 'UI/UX Design', img: imgIdeathon,
      xp: 100, difficulty: 'Beginner', desc: 'Learn Figma like a pro and design interfaces that feel alive.',
      venue: 'Design Studio', date: '29 Apr 2026', time: '9:00 AM', fee: '₹100', team: 'Solo', prize: 'Certificate',
      rules: ['Figma account required', 'No prior experience needed', '3 hour session'],
      contact: 'Pooja: +91 98765 00015',
    },
  ],
};
