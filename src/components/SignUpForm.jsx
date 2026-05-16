import React from 'react';

const SignUpForm = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-2">Become the Beast of the Cyber Forest</h2>
      <p className="text-white/60 mb-8 text-sm italic">Sign in to get into Zairzest</p>
      
      <form className="space-y-6">
        <div>
          <input 
            type="email" 
            placeholder="Email here" 
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-brand-cyan transition-colors"
          />
        </div>
        <div className="relative">
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-brand-cyan transition-colors"
          />
          <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
        
        <p className="text-xs text-white/40">
          Already a Member Yet? <a href="#" className="text-brand-cyan hover:underline">Sign In</a>
        </p>

        <div className="flex gap-4 pt-4">
          <button className="flex-1 py-3 bg-brand-cyan text-black font-bold rounded-lg hover:bg-brand-cyan/90 transition-all active:scale-95">
            Sign Up
          </button>
          <div className="flex items-center text-white/20 px-2 font-medium">or</div>
          <button className="flex-[1.5] py-3 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-white/90 transition-all active:scale-95 border border-black/10">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
