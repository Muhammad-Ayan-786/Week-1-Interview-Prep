import { ExternalLink, KeyRound } from 'lucide-react';

export const DsaApproachList = ({ entries }) => (
  <section className="space-y-6 pt-4">
    <div>
      <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
        SECTION 02 • TACTICAL APPROACHES & MENTAL MODELS
      </p>
      <h2 className="font-serif text-2xl font-normal text-(--color-neutral)">
        Approaches for the Selected Week
      </h2>
      <p className="text-xs text-(--color-text-secondary)">
        Review the reasoning and complexity notes saved with each problem.
      </p>
    </div>

    <div className="space-y-5">
      {entries.map((entry, index) => (
        <article
          key={entry.id}
          className="space-y-5 rounded-3xl border border-(--color-border)/80 bg-(--color-surface) p-5 shadow-xs sm:p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-serif text-xl text-(--color-neutral)">
                {String(index + 1).padStart(2, '0')}. {entry.title}
              </h3>
              <span className="rounded-full border border-(--color-border) px-2.5 py-0.5 text-[10px] font-mono font-bold">
                {entry.difficulty}
              </span>
            </div>
            {entry.leetcodeLink && (
              <a
                href={entry.leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-(--color-border) bg-(--color-surface-muted) px-3.5 py-1.5 text-xs font-mono font-bold"
              >
                LeetCode {entry.lc} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          {entry.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {entry.categories.map((category) => (
                <span key={category} className="rounded-md border border-(--color-border)/60 bg-(--color-surface-muted) px-2.5 py-1 text-xs font-mono text-(--color-text-secondary)">
                  {category}
                </span>
              ))}
            </div>
          )}

          <div className="grid gap-5 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <div className="space-y-1.5">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)">
                  APPROACH & REASONING
                </p>
                <p className="whitespace-pre-wrap text-xs leading-relaxed text-(--color-neutral)">
                  {entry.explanation || entry.description || 'No approach notes saved.'}
                </p>
              </div>
              {entry.panicAnchor && (
                <div className="flex items-start gap-3 rounded-2xl border border-(--color-primary)/40 bg-(--color-primary)/20 p-4">
                  <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-(--color-neutral)" />
                  <div>
                    <p className="mb-1 text-[10px] font-mono font-bold uppercase text-(--color-neutral)">KEY INVARIANT</p>
                    <p className="text-xs leading-relaxed text-(--color-neutral)">{entry.panicAnchor}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3 rounded-2xl border border-(--color-border)/70 bg-(--color-surface-muted)/60 p-5 font-mono text-xs lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-(--color-text-secondary)">COMPLEXITY</p>
              <div className="flex justify-between gap-2 text-(--color-text-secondary)">
                <span>Time</span><strong className="text-(--color-neutral)">{entry.timeComp || '—'}</strong>
              </div>
              <div className="flex justify-between gap-2 text-(--color-text-secondary)">
                <span>Space</span><strong className="text-(--color-neutral)">{entry.spaceComp || '—'}</strong>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default DsaApproachList;
