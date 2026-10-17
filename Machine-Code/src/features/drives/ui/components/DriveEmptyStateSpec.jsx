import React from 'react';
import { CloudOff, Plus, ShieldCheck, Database, KeyRound } from 'lucide-react';

export const DriveEmptyStateSpec = ({ onAddClick }) => {
  return (
    <div className="space-y-4 pt-8 border-t border-(--color-border)/60">
      <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
        <span>REFERENCE SPECIFICATION • EMPTY STATE (ZERO RESULTS / FRESH LIBRARY)</span>
        <span className="px-2 py-0.5 bg-(--color-surface-muted) rounded border border-(--color-border)">
          Component Spec #13-B
        </span>
      </div>

      <div className="bg-(--color-surface) p-8 sm:p-12 rounded-3xl border border-(--color-border)/80 text-center space-y-6 flex flex-col items-center justify-center shadow-xs">
        {/* Icon Badge */}
        <div className="p-4 rounded-2xl bg-(--color-surface-muted) text-(--color-text-secondary) border border-(--color-border)/60">
          <CloudOff className="w-8 h-8" />
        </div>

        {/* Text Details */}
        <div className="space-y-1.5 max-w-md">
          <h3 className="font-serif text-2xl font-normal text-(--color-neutral)">
            No Drive links archived yet
          </h3>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed">
            Store weekly interview rubrics, company question banks, and mentor evaluation sheets linked directly to your cloud drive.
          </p>
        </div>

        {/* Add CTA */}
        <button
          type="button"
          onClick={onAddClick}
          className="px-5 py-2.5 bg-(--color-primary) text-(--color-neutral) font-mono text-xs font-bold rounded-xl hover:brightness-95 shadow-xs flex items-center gap-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add First Drive Link
        </button>

        {/* Technical Security Footer Meta */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-(--color-text-secondary) pt-4 border-t border-(--color-border)/40 w-full">
          <span className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-(--color-neutral)" /> Google Drive API v3
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5 text-(--color-neutral)" /> Encrypted URL Storage
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-(--color-neutral)" /> Real-time Permissions
          </span>
        </div>
      </div>
    </div>
  );
};

export default DriveEmptyStateSpec;