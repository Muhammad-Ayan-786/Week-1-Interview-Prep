import React from 'react';

export const AuthEditorialPanel = () => {
  return (
    <div className="bg-(--color-primary) p-8 lg:p-12 flex flex-col justify-between text-(--color-neutral) relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold tracking-widest uppercase">
          Editorial Principle
        </span>
        <div className="w-8 h-8 rounded-full border border-(--color-neutral)/30 flex items-center justify-center font-mono text-xs font-bold">
          02
        </div>
      </div>

      {/* Statement */}
      <div className="my-10 space-y-6">
        <div className="inline-block px-3 py-1 bg-(--color-neutral) text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-md">
          Deterministic Mastery
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1]">
          Patience precedes proficiency.
        </h1>

        <hr className="border-t border-(--color-neutral)/20 my-6" />

        <p className="text-sm sm:text-base font-sans font-medium text-(--color-neutral)/80 leading-relaxed max-w-md">
          A quiet sanctuary for rigorous interview preparation. Replace frantic cramming with calm, deliberate rehearsal.
        </p>
      </div>

      {/* Footer info */}
      <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-(--color-neutral)/10">
        <span className="text-(--color-neutral)/70">Sunday Benchmark Cycle</span>
        <span className="font-bold tracking-wider">20:00 UTC</span>
      </div>
    </div>
  );
};

export default AuthEditorialPanel;