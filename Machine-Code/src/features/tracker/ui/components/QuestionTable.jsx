import React from 'react';
import { Check, Edit3, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router';

const badgeStyles = {
  success: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  warning: 'bg-amber-500/15 text-amber-800 border-amber-500/30',
  danger: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
};

const diffStyles = {
  Easy: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Medium: 'bg-amber-50 text-amber-800 border-amber-200',
  Hard: 'bg-rose-50 text-rose-700 border-rose-200',
};

export const QuestionTable = ({ rows, hasQuestions, onDelete, onReset }) => {
  return (
    <div className="bg-(--color-surface) rounded-2xl border border-(--color-border)/80 shadow-xs overflow-hidden">
      {rows.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-12 text-center">
          <div className="rounded-2xl bg-(--color-surface-muted) p-3 text-(--color-text-secondary)">
            <Plus className="h-6 w-6" />
          </div>
          <div className="max-w-sm space-y-1">
            <h2 className="font-serif text-xl font-normal text-(--color-neutral)">
              {hasQuestions ? 'No matching questions' : 'No questions yet'}
            </h2>
            <p className="text-xs text-(--color-text-secondary)">
              {hasQuestions
                ? 'Try changing your search or filters.'
                : 'Add your first question to start building your practice tracker.'}
            </p>
          </div>
          {hasQuestions ? (
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-2 rounded-xl border border-(--color-border) px-4 py-2 text-xs font-mono font-bold text-(--color-neutral)"
            >
              Clear filters
            </button>
          ) : (
            <Link
              to="/questions/add"
              className="flex items-center gap-2 rounded-xl bg-(--color-primary) px-4 py-2 text-xs font-mono font-bold text-(--color-neutral) hover:opacity-90"
            >
              <Plus className="h-4 w-4" /> Add your first question
            </Link>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-(--color-border) bg-(--color-surface-muted)/40 text-[10px] font-mono font-bold tracking-wider uppercase text-(--color-text-secondary)">
                <th className="py-3 px-4">QUESTION TITLE & CONCEPT</th>
                <th className="py-3 px-4">CATEGORY</th>
                <th className="py-3 px-4">DIFFICULTY</th>
                <th className="py-3 px-4">STATUS</th>
                <th className="py-3 px-4">LAST REVIEWED</th>
                <th className="py-3 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-(--color-border)/60 text-xs font-sans">
              {rows.map((row) => (
                <tr key={row.id} className="hover:bg-(--color-surface-muted)/20 transition-colors">
                  <td className="py-4 px-4 space-y-1.5 max-w-md">
                    <div className="font-semibold text-sm text-(--color-neutral)">{row.title}</div>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-(--color-text-secondary)">
                      <a
                        href={row.tags[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1.5 py-0.5 bg-(--color-surface-muted) rounded border border-(--color-border)/50">
                        {row.tags[0]}
                      </a>
                      <span>•</span>
                      <span>{row.tags[1]}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-0.5 bg-(--color-surface-muted) border border-(--color-border) text-[11px] font-mono font-bold rounded text-(--color-neutral)">
                      {row.category}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${diffStyles[row.difficulty]}`}>
                      {row.difficulty}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border flex items-center gap-1.5 w-fit ${badgeStyles[row.statusVariant]}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-mono text-(--color-text-secondary)">
                    {row.lastReviewed}
                  </td>
                  <td className="py-4 px-4 text-right relative">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        title="Edit (UPCOMING)"
                        className="p-1 hover:bg-(--color-surface-muted) rounded text-(--color-text-secondary) cursor-not-allowed"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        title="Delete question"
                        type="button"
                        aria-label={`Delete ${row.title}`}
                        onClick={() => onDelete(row.id)}
                        className="p-1 hover:bg-(--color-surface-muted) rounded text-(--color-text-secondary) cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QuestionTable;