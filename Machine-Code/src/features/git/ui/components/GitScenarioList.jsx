import React from 'react';
import { Clock } from 'lucide-react';

export const GitScenarioList = ({
  scenarios,
  selectedId,
  onSelectScenario,
}) => {
  return (
    <div className="space-y-3">
      {scenarios.map((item) => {
        const isSelected = item.id === selectedId;
        return (
          <div
            key={item.id}
            onClick={() => onSelectScenario(item.id)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${isSelected
                ? 'bg-(--color-surface) border-(--color-primary) ring-2 ring-(--color-primary)/20 shadow-xs'
                : 'bg-(--color-surface) border-(--color-border)/80 hover:border-(--color-border)'
              }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-(--color-surface-muted) text-[10px] font-mono font-bold text-(--color-text-secondary) rounded-md">
                {item.categoryTag}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.difficulty === 'Hard'
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : item.difficulty === 'Medium'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}
              >
                {item.difficulty}
              </span>
            </div>

            <h3 className="font-serif text-base font-normal text-(--color-neutral) leading-snug">
              {item.title}
            </h3>

            <div className="flex items-center justify-between text-[11px] font-mono text-(--color-text-secondary) pt-1 border-t border-(--color-border)/40">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {item.lastRevised}
              </span>
              <span
                className={`font-bold ${isSelected ? 'text-(--color-neutral)' : 'text-emerald-700'
                  }`}
              >
                {isSelected ? 'Selected >' : item.status}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GitScenarioList;