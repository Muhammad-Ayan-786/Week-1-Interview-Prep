import React from 'react';
import { ArrowRight, GitBranch, Plus } from 'lucide-react';

export const GitReferenceSpecs = ({ onNavigateAdd }) => {
  return (
    <div className="space-y-4 pt-8 border-t border-(--color-border)/60">
      <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
        <span>SYSTEM SPECIMENS • Reference Specification: Add Git Question & Empty States</span>
        <span className="px-2 py-0.5 bg-(--color-surface-muted) rounded border border-(--color-border)">
          Design Mirror: Page 7
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Specimen A */}
        <div className="bg-(--color-surface) p-6 rounded-3xl border border-(--color-border)/80 space-y-4 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-(--color-text-secondary) uppercase text-[10px]">
              Specimen A • Add Git Scenario Form
            </span>
            <span className="text-[10px] text-(--color-text-secondary)">Form Modal Spec</span>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[10px] font-mono font-bold text-(--color-text-secondary) uppercase">
                Scenario Title
              </label>
              <div className="p-2.5 bg-(--color-bg) border border-(--color-border) rounded-xl text-xs font-sans text-(--color-text-secondary)">
                e.g., Resolving Detached HEAD with Anonymous Branches (Max 140 chars)
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono font-bold text-(--color-text-secondary) uppercase">
                Topic Track Chip Pill
              </label>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-(--color-primary) text-(--color-neutral) rounded-lg text-xs font-mono font-bold">
                  Disaster Recovery ✓
                </span>
                <span className="px-2.5 py-1 bg-(--color-surface-muted) text-(--color-text-secondary) rounded-lg text-xs font-mono">
                  Rebase & History
                </span>
                <span className="px-2.5 py-1 bg-(--color-surface-muted) text-(--color-text-secondary) rounded-lg text-xs font-mono">
                  Internals
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono font-bold text-(--color-text-secondary) uppercase">
                Deep Technical Explanation
              </label>
              <div className="p-3 bg-(--color-bg) border border-(--color-border) rounded-xl text-xs font-mono text-(--color-text-secondary)">
                // Markdown supported: Detail graph mutations, reflog structures, and recovery sequence...
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateAdd}
            className="w-full py-2.5 bg-(--color-surface-muted) border border-(--color-border) text-(--color-neutral) text-xs font-mono font-bold rounded-xl hover:bg-(--color-surface) flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            Open Dedicated Add Form <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Specimen B */}
        <div className="bg-(--color-surface) p-6 rounded-3xl border border-(--color-border)/80 text-center space-y-4 flex flex-col items-center justify-center shadow-xs">
          <div className="w-full flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-(--color-text-secondary) uppercase text-[10px]">
              Specimen B • Unselected / Empty Filter State
            </span>
            <span className="text-[10px] text-(--color-text-secondary)">Zero Query State</span>
          </div>

          <div className="p-3 rounded-2xl bg-(--color-surface-muted) text-(--color-text-secondary)">
            <GitBranch className="w-6 h-6" />
          </div>

          <div className="space-y-1 max-w-sm">
            <h4 className="font-serif text-xl font-normal text-(--color-neutral)">
              No Git Scenarios Matched
            </h4>
            <p className="text-xs font-sans text-(--color-text-secondary)">
              No scenarios match the selected filter. Document a new disaster recovery command or git plumbing edge case to enrich your repository.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateAdd}
            className="px-4 py-2 bg-(--color-primary) text-(--color-neutral) font-mono text-xs font-bold rounded-xl hover:brightness-95 shadow-xs flex items-center gap-2 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Add New Git Question
          </button>

          <div className="w-full flex items-center justify-between text-[10px] font-mono text-(--color-text-secondary) pt-2 border-t border-(--color-border)/60">
            <span>Filter: Submodules & Monorepo</span>
            <span>0 matches found</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitReferenceSpecs;