import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const statusStyles = {
  success: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  warning: 'bg-amber-500/15 text-amber-800 border-amber-500/30',
  danger: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
};

export const RecentActivityList = ({ activities, isLoaded }) => {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <h3 className="font-serif text-2xl font-normal text-(--color-neutral)">
            Recently Added
          </h3>
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            LAST 5 ADDED QUESTIONS
          </span>
        </div>

        <Link
          to="/questions"
          className="text-xs font-mono font-bold text-(--color-neutral) hover:text-(--color-tertiary) flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          View Questions <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Activity Item Rows */}
      <div className="space-y-2.5">
        {!isLoaded ? (
          <p className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 text-sm text-(--color-text-secondary)">
            Loading your questions...
          </p>
        ) : activities.length === 0 ? (
          <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 text-center">
            <p className="font-serif text-lg text-(--color-neutral)">No recent questions</p>
            <p className="mt-1 text-xs text-(--color-text-secondary)">Questions you add will appear here.</p>
            <Link to="/questions/add" className="mt-4 inline-flex text-xs font-mono font-bold text-(--color-tertiary)">
              Add your first question
            </Link>
          </div>
        ) : activities.map((item) => (
          <div
            key={item.id}
            className="bg-(--color-surface) p-4 rounded-2xl border border-(--color-border)/70 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-(--color-border) transition-all"
          >
            {/* Title & Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans font-semibold text-sm text-(--color-neutral)">
                {item.title}
              </span>
              <span className="px-2.5 py-0.5 bg-(--color-surface-muted) border border-(--color-border)/60 text-[11px] font-mono font-medium text-(--color-text-secondary) rounded-md">
              {item.category}
              </span>
            </div>

            {/* Status & Timestamp */}
            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs font-mono">
              <span
                className={`px-3 py-1 rounded-full border text-[11px] font-bold flex items-center gap-1.5 ${statusStyles[item.statusVariant]
                  }`}
              >
                <span className="w-1.5 h-1.5 rounded-full fill-current bg-current" />
                {item.status}
              </span>
              <span className="text-(--color-text-secondary) min-w-22.5 text-right">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityList;