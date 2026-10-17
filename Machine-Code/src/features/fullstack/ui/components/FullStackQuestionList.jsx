import React from 'react';

export const FullStackQuestionList = ({
  questions,
  selectedId,
  onSelectQuestion,
}) => {
  return (
    <div className="space-y-3">
      {questions.map((q) => {
        const isSelected = q.id === selectedId;
        return (
          <div
            key={q.id}
            onClick={() => onSelectQuestion(q.id)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2.5 ${isSelected
                ? 'bg-(--color-surface) border-(--color-primary) ring-2 ring-(--color-primary)/20 shadow-sm'
                : 'bg-(--color-surface) border-(--color-border)/80 hover:border-(--color-border)'
              }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-(--color-surface-muted) text-[10px] font-mono font-bold text-(--color-text-secondary) rounded-md">
                {q.tag}
              </span>
              {isSelected && (
                <span className="w-2 h-2 rounded-full bg-(--color-primary)" />
              )}
            </div>

            <h3 className="font-serif text-base font-normal text-(--color-neutral) leading-snug">
              {q.title}
            </h3>

            <div className="flex items-center justify-between text-[11px] font-mono text-(--color-text-secondary) pt-1 border-t border-(--color-border)/40">
              <span>Last revised {q.lastRevised}</span>
              <span
                className={`font-bold ${q.difficulty === 'Hard'
                    ? 'text-rose-600'
                    : 'text-amber-700'
                  }`}
              >
                {q.difficulty}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FullStackQuestionList;