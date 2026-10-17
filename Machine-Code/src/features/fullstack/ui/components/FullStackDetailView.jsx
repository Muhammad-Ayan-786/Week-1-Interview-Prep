import React, { useState } from 'react';
import { Bookmark, Copy, SlidersHorizontal, Clock, CheckCircle2 } from 'lucide-react';

export const FullStackDetailView = ({ question }) => {
  // const [activeTab, setActiveTab] = useState('points'); // 'explanation' | 'points' | 'answer'

  if (!question) return null;

  return (
    <div className="bg-(--color-surface) rounded-3xl border border-(--color-border)/80 p-6 sm:p-8 space-y-6 shadow-xs">
      {/* Detail Header Badges & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-(--color-border)/60 pb-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono font-bold">
          <span className="px-2.5 py-1 bg-(--color-surface-muted) text-(--color-neutral) rounded-md border border-(--color-border)/60">
            {question.category}
          </span>
          <span className="px-2.5 py-1 bg-amber-500/10 text-amber-800 rounded-md border border-amber-500/20">
            {question.difficulty} Difficulty
          </span>
          <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-800 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Mastered
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 text-(--color-text-secondary)">
          <button
            type="button"
            className="p-2 hover:bg-(--color-surface-muted) rounded-lg transition-colors cursor-not-allowed"
            title="Bookmark (Upcoming)"
          >
            <Bookmark className="w-4 h-4" />
          </button>
          {/* <button
            type="button"
            className="p-2 hover:bg-(--color-surface-muted) rounded-lg transition-colors cursor-pointer"
            title="Copy Content"
          >
            <Copy className="w-4 h-4" />
          </button> */}
        </div>
      </div>

      {/* Main Question Title & Summary */}
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-(--color-neutral) tracking-tight">
          {question.title}
        </h2>
        <p className="text-xs sm:text-sm font-sans text-(--color-text-secondary) leading-relaxed">
          {question.summary}
        </p>
      </div>

      {/* Tabs */}
      {/* <div className="bg-(--color-surface-muted) p-1 rounded-2xl border border-(--color-border)/60 flex flex-wrap items-center gap-1 text-xs font-mono font-bold w-fit">
        <button
          type="button"
          onClick={() => setActiveTab('explanation')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'explanation'
            ? 'bg-(--color-surface) text-(--color-neutral) shadow-xs'
            : 'text-(--color-text-secondary) hover:text-(--color-neutral)'
            }`}
        >
          1. Explanation
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('points')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'points'
            ? 'bg-(--color-surface) text-(--color-neutral) shadow-xs'
            : 'text-(--color-text-secondary) hover:text-(--color-neutral)'
            }`}
        >
          2. Important Points
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('answer')}
          className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${activeTab === 'answer'
            ? 'bg-(--color-surface) text-(--color-neutral) shadow-xs'
            : 'text-(--color-text-secondary) hover:text-(--color-neutral)'
            }`}
        >
          3. Interview Answer
        </button>
      </div> */}

      {/* Mental Model Callout */}
      <div className="bg-(--color-surface-muted)/60 border border-(--color-border)/80 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
        <div className="w-7 h-7 rounded-lg bg-(--color-primary) flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle2 className="w-4 h-4 text-(--color-neutral)" />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-base font-semibold text-(--color-neutral)">
            Core Mental Model & Guardrails
          </h4>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed">
            Key mechanisms interviewers look for when evaluating distributed fault tolerance and client-side composure.
          </p>
        </div>
      </div>

      {/* Key Points List */}
      <div className="space-y-3">
        {question.points.map((pt, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 bg-(--color-surface-muted)/40 rounded-2xl border border-(--color-border)/60 flex items-start gap-3.5"
          >
            <div className="w-6 h-6 rounded-md bg-(--color-primary) text-(--color-neutral) font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {idx + 1}
            </div>
            <div className="space-y-1.5 text-xs font-sans">
              <p className="text-(--color-neutral) leading-relaxed">
                <span className="font-bold bg-(--color-primary)/30 px-1 py-0.5 rounded text-(--color-neutral) mr-1 font-mono">
                  {pt.label}:
                </span>
                {pt.text}
                {pt.code && (
                  <code className="mx-1 px-1.5 py-0.5 bg-(--color-neutral) text-white font-mono text-[11px] rounded">
                    {pt.code}
                  </code>
                )}
              </p>
              <p className="text-[11px] font-mono text-(--color-text-secondary)">
                {pt.takeaway}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Footer Stats */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-(--color-text-secondary) pt-4 border-t border-(--color-border)/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-(--color-secondary)" />
          <span>Next scheduled review: Sunday morning session</span>
        </div>
      </div>
    </div>
  );
};

export default FullStackDetailView;