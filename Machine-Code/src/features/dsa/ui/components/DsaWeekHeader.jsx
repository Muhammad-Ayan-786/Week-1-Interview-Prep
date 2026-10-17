export const DsaWeekHeader = ({ weeks, selectedWeek, onSelectWeek, entries }) => {
  const solvedCount = entries.length;
  const mediumCount = entries.filter((entry) => entry.difficulty === 'Medium').length;
  const hardCount = entries.filter((entry) => entry.difficulty === 'Hard').length;

  return (
    <div className="space-y-4 rounded-3xl border border-(--color-border)/80 bg-(--color-surface) p-4 shadow-xs sm:p-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono">
        {weeks.map((week) => (
          <button
            key={week}
            type="button"
            onClick={() => onSelectWeek(week)}
            aria-pressed={selectedWeek === week}
            className={`whitespace-nowrap rounded-xl border px-3.5 py-2 font-bold transition-colors ${selectedWeek === week
              ? 'border-(--color-primary) bg-(--color-primary) text-(--color-neutral)'
              : 'border-(--color-border) bg-(--color-bg) text-(--color-text-secondary) hover:text-(--color-neutral)'
              }`}
          >
            {week.replace('W', 'Week ')}
          </button>
        ))}
      </div>

      <div className="flex flex-col justify-between gap-3 rounded-2xl border border-(--color-border)/60 bg-(--color-bg) p-4 text-xs font-mono sm:flex-row sm:items-center">
        <div className="font-bold text-(--color-neutral)">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-(--color-tertiary)" />
          {selectedWeek.replace('W', 'Week ')} Summary
        </div>
        <div className="flex flex-wrap items-center gap-3 text-(--color-text-secondary)">
          <span><strong className="text-(--color-neutral)">{solvedCount}</strong> {solvedCount === 1 ? 'Question' : 'Questions'}</span>
          <span>•</span>
          <span><strong className="text-amber-700">{mediumCount}</strong> Medium</span>
          <span>•</span>
          <span><strong className="text-rose-700">{hardCount}</strong> Hard</span>
        </div>
      </div>
    </div>
  );
};

export default DsaWeekHeader;
