import React, { useState } from 'react';

export const MachineCodingHeaderStats = () => {
  const [activeTab, setActiveTab] = useState('All Weeks (8)');

  return (
    <div className="bg-(--color-surface) p-6 rounded-3xl border border-(--color-border)/80 shadow-xs flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Challenges */}
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)">
            TOTAL CHALLENGES
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-normal text-(--color-neutral)">
              8
            </span>
            <span className="text-xs font-mono font-bold text-(--color-neutral)">
              Completed
            </span>
          </div>
          <p className="text-[11px] font-mono text-(--color-text-secondary)">
            Across 9 scheduled cycles
          </p>
        </div>

        {/* Avg Time to Complete */}
        <div className="space-y-1 border-t md:border-t-0 md:border-l border-(--color-border)/60 pt-4 md:pt-0 md:pl-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)">
            AVG TIME TO COMPLETE
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-3xl font-normal text-(--color-neutral)">
              104
            </span>
            <span className="text-xs font-mono font-bold text-(--color-neutral)">
              mins
            </span>
          </div>
          <p className="text-[11px] font-mono text-emerald-700 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Target SLA: Under 120 mins
          </p>
        </div>

        {/* Prompt Compliance */}
        <div className="space-y-1 border-t md:border-t-0 md:border-l border-(--color-border)/60 pt-4 md:pt-0 md:pl-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)">
            PROMPT COMPLIANCE
          </p>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-serif text-3xl font-normal text-(--color-neutral)">
              100%
            </span>
            <span className="text-xs font-mono font-bold text-(--color-text-secondary)">
              Deterministic
            </span>
          </div>
          <div className="w-24 bg-(--color-surface-muted) h-1.5 rounded-full overflow-hidden mt-1">
            <div className="bg-(--color-primary) h-full w-full rounded-full" />
          </div>
        </div>
      </div>

      {/* Filter Tabs Pill */}
      <div className="bg-(--color-surface-muted) p-1 rounded-2xl border border-(--color-border)/60 flex flex-wrap items-center gap-1 text-xs font-mono font-bold w-full">
        {['All Weeks (8)', 'Completed (7)', 'In Progress (1)'].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${isActive
                ? 'bg-(--color-surface) text-(--color-neutral) shadow-xs'
                : 'text-(--color-text-secondary) hover:text-(--color-neutral)'
                }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MachineCodingHeaderStats;