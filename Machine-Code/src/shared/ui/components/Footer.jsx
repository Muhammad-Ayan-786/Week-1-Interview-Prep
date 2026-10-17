import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-(--color-text-secondary) border-t border-(--color-border)/60 bg-(--color-bg)/80">

      <div>
        <span className="font-semibold text-(--color-neutral)">Sunday Ready</span>
        <span className="mx-2">•</span>
        <span>Solo Interview Preparation Tracker</span>
      </div>

      <div>
        <span>Rigor</span>
        <span className="mx-2">•</span>
        <span>Composure</span>
        <span className="mx-2">•</span>
        <span>Deterministic Outcomes</span>
      </div>
    </footer>
  );
};

export default Footer;