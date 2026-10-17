import React from 'react';

export const ReadinessHeroCard = ({ readiness, total, completed }) => {
  return (
    <div className="bg-(--color-primary) rounded-3xl p-6 sm:p-8 lg:p-10 text-(--color-neutral) shadow-md relative overflow-hidden space-y-6">
      {/* Card Header Tag & Pace Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-(--color-neutral)/80">
          Evaluation Index
        </span>
        <div className="px-3 py-1 bg-(--color-neutral)/5 border border-(--color-neutral)/20 rounded-full text-xs font-mono font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-(--color-neutral)" />
          {total ? `${completed} of ${total} completed` : 'Start by adding a question'}
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="space-y-3">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight">
          Practice Progress: {readiness}%
        </h2>
        <p className="text-sm sm:text-base font-sans font-medium text-(--color-neutral)/80 max-w-2xl leading-relaxed">
          {total
            ? 'Your progress is based on questions you have marked completed.'
            : 'Add questions to your tracker and mark them complete to see your progress here.'}
        </p>
      </div>

      {/* Progress Metric Bar */}
      <div className="space-y-2 pt-2">
        <div className="w-full bg-(--color-neutral)/15 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-(--color-neutral) h-full rounded-full transition-all duration-500"
            style={{ width: `${readiness}%` }}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono font-bold text-(--color-neutral)/90">
          <span>{completed} of {total} questions completed</span>
          <span>{total - completed} remaining</span>
        </div>
      </div>
    </div>
  );
};

export default ReadinessHeroCard;