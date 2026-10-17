import React from 'react';
import { Inbox, FilterX, Plus } from 'lucide-react';
import { useNavigate } from 'react-router';

export const ReferenceFrames = () => {

  const navigate = useNavigate();

  return (
    <div className="space-y-4 pt-6 border-t border-(--color-border)/60">
      <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
        DESIGN SYSTEM REFERENCE FRAMES • Interactive States
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frame A: Empty Category */}
        <div className="bg-(--color-surface) p-8 rounded-2xl border border-(--color-border) text-center space-y-4 flex flex-col items-center justify-center">
          <div className="p-3 rounded-2xl bg-(--color-surface-muted) text-(--color-text-secondary)">
            <Inbox className="w-6 h-6" />
          </div>
          <div className="space-y-1 max-w-sm">
            <h4 className="font-serif text-xl font-normal text-(--color-neutral)">
              No questions logged yet
            </h4>
            <p className="text-xs font-sans text-(--color-text-secondary)">
              This module has zero repository items. Initialize your collection by logging classic interview problems or architecture drills.
            </p>
          </div>
          <button
            onClick={() => navigate('/questions/add')}
            className="px-4 py-2 bg-(--color-primary) text-(--color-neutral) font-mono text-xs font-bold rounded-xl flex items-center gap-2 hover:opacity-90"
          >
            <Plus className="w-4 h-4" /> Add Your First Question
          </button>
        </div>

        {/* Frame B: Filter Exhaustion */}
        <div className="bg-(--color-surface) p-8 rounded-2xl border border-(--color-border) text-center space-y-4 flex flex-col items-center justify-center">
          <div className="p-3 rounded-2xl bg-(--color-surface-muted) text-(--color-text-secondary)">
            <FilterX className="w-6 h-6" />
          </div>
          <div className="space-y-1 max-w-sm">
            <h4 className="font-serif text-xl font-normal text-(--color-neutral)">
              No matching questions found
            </h4>
            <p className="text-xs font-sans text-(--color-text-secondary)">
              No records matched your current query criteria <span className="font-mono bg-(--color-surface-muted) px-1 rounded">Hard</span> + <span className="font-mono bg-(--color-surface-muted) px-1 rounded">Pending</span>. Try loosening the filter constraints.
            </p>
          </div>
          <button className="px-4 py-2 bg-(--color-surface-muted) border border-(--color-border) text-(--color-neutral) font-mono text-xs font-bold rounded-xl hover:bg-(--color-surface)">
            Reset All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferenceFrames;