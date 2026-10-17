import React from 'react';
import { useNavigate } from 'react-router';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    // <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between border-b border-(--color-border)/60 bg-(--color-bg)/80 backdrop-blur-md sticky top-0 z-50">
      {/* Brand Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-(--color-primary) flex items-center justify-center font-serif font-bold text-lg text-(--color-neutral) shadow-xs">
          S
        </div>
        <span className="font-serif font-bold text-xl tracking-tight text-(--color-neutral)">
          Sunday Ready
        </span>
      </div>

      {/* Navigation Right */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden md:flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-(--color-text-secondary) uppercase">
          <span className="w-2 h-2 rounded-full bg-(--color-primary)" />
          Candidate Portal
        </div>

        <span className="hidden md:block text-(--color-border)">|</span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-(--color-neutral) hover:bg-(--color-surface-muted) rounded-lg transition-colors cursor-pointer"
            onClick={() => navigate('/')}
          >
            Sign In
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-semibold text-(--color-neutral) bg-(--color-primary) hover:brightness-95 rounded-lg transition-all shadow-xs cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;