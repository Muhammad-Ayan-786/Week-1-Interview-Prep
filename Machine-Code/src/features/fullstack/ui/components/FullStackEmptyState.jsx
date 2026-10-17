import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

export const FullStackEmptyState = ({ onAddClick }) => {
  return (
    <div className="space-y-4 pt-8 border-t border-(--color-border)/60">
      <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
        <span>REFERENCE SPECIFICATION</span>
        <span className="px-2 py-0.5 bg-(--color-surface-muted) rounded border border-(--color-border)">
          Empty State Variant
        </span>
      </div>

      <div className="bg-(--color-surface) p-8 sm:p-12 rounded-3xl border border-(--color-border)/80 text-center space-y-4 flex flex-col items-center justify-center">
        <div className="p-4 rounded-2xl bg-(--color-surface-muted) text-(--color-tertiary)">
          <BookOpen className="w-8 h-8" />
        </div>

        <div className="space-y-1.5 max-w-md">
          <h3 className="font-serif text-2xl font-normal text-(--color-neutral)">
            Interactive State: Unselected or Empty Filter State
          </h3>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed">
            Choose any question from the repository list on the left to review its explanation, key takeaways, and verified interview answer.
          </p>
        </div>

        <button
          type="button"
          onClick={onAddClick}
          className="px-5 py-2.5 bg-(--color-surface-muted) border border-(--color-border) text-(--color-neutral) font-mono text-xs font-bold rounded-xl hover:bg-(--color-surface) flex items-center gap-2 transition-all cursor-pointer mt-2"
        >
          <Plus className="w-4 h-4" /> Add Full-Stack Question
        </button>
      </div>
    </div>
  );
};

export default FullStackEmptyState;