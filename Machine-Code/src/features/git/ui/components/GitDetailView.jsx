import React, { useState } from 'react';
import { Bookmark, Copy, SlidersHorizontal, Clock, CheckCircle2 } from 'lucide-react';

export const GitDetailView = ({ scenario }) => {
  const [activeTab, setActiveTab] = useState('points'); // 'explanation' | 'points' | 'answer'

  if (!scenario) return null;

  return (
    <div className="bg-(--color-surface) rounded-3xl border border-(--color-border)/80 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Top Header Badges & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-(--color-border)/60 pb-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono font-bold">
          <span className="px-2.5 py-1 bg-(--color-surface-muted) text-(--color-neutral) rounded-md border border-(--color-border)/60">
            {scenario.categoryTag}
          </span>
          <span className="px-2.5 py-1 bg-rose-500/10 text-rose-700 rounded-md border border-rose-500/20">
            {scenario.difficulty} Difficulty
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-800 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Mastered
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-(--color-neutral) tracking-tight">
          {scenario.title}
        </h2>
        <p className="text-xs sm:text-sm font-sans text-(--color-text-secondary) leading-relaxed">
          {scenario.subtitle}
        </p>
      </div>

      {/* Core Mental Model Box */}
      <div className="bg-(--color-surface-muted)/60 border border-(--color-border)/80 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
        <div className="w-7 h-7 rounded-lg bg-(--color-primary) flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle2 className="w-4 h-4 text-(--color-neutral)" />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-base font-semibold text-(--color-neutral)">
            CORE MENTAL MODEL & GUARDRAILS
          </h4>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed">
            Every commit object written to disk remains immutable in the{' '}
            <code className="bg-(--color-surface) px-1.5 py-0.5 rounded font-mono text-xs border border-(--color-border)">
              .git/objects
            </code>{' '}
            database for a minimum 30-day grace period (
            <code className="bg-(--color-surface) px-1.5 py-0.5 rounded font-mono text-xs border border-(--color-border)">
              gc.reflogExpire
            </code>
            ) before garbage collection prune.
          </p>
        </div>
      </div>

      {/* Recall Takeaways Header */}
      <div className="flex items-center justify-between text-xs font-mono pt-2">
        <span className="font-bold uppercase tracking-wider text-(--color-neutral)">
          High-Retention Active Recall Takeaways
        </span>
        <span className="text-(--color-text-secondary)">4 PRECISION ANCHORS</span>
      </div>

      {/* Takeaway Points List */}
      <div className="space-y-3">
        {scenario.points.map((pt, idx) => (
          <div
            key={idx}
            className="p-4 bg-(--color-surface-muted)/40 rounded-2xl border border-(--color-border)/60 flex items-start gap-3.5"
          >
            <div className="w-6 h-6 rounded-md bg-(--color-primary) text-(--color-neutral) font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </div>
            <div className="space-y-1 text-xs font-sans">
              <p className="text-(--color-neutral) leading-relaxed">
                <span className="font-bold bg-(--color-primary)/30 px-1 py-0.5 rounded font-mono mr-1">
                  {pt.label}:
                </span>
                {pt.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Timings */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-(--color-text-secondary) pt-4 border-t border-(--color-border)/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-(--color-secondary)" />
          <span>Next scheduled review: Sunday morning rehearsal</span>
        </div>
      </div>
    </div>
  );
};

export default GitDetailView;