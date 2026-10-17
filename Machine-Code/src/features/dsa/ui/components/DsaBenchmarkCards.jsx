import { ExternalLink, ImageOff } from 'lucide-react';

export const DsaBenchmarkCards = ({ entries }) => (
  <section className="space-y-4">
    <div>
      <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
        SECTION 01 • SOLUTION SCREENSHOTS
      </p>
      <h2 className="font-serif text-2xl font-normal text-(--color-neutral)">
        Solution Images
      </h2>
      <p className="text-xs text-(--color-text-secondary)">
        Uploaded solution images for the selected week.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {entries.map((entry) => (
        <article
          key={entry.id}
          className="overflow-hidden rounded-3xl border border-(--color-border)/80 bg-(--color-surface) shadow-xs"
        >
          {entry.image ? (
            <a href={entry.image} target="_blank" rel="noopener noreferrer">
              <img
                src={entry.image}
                alt={`Solution screenshot for ${entry.title}`}
                className="h-52 w-full object-cover"
              />
            </a>
          ) : (
            <div className="flex h-52 flex-col items-center justify-center gap-2 bg-(--color-surface-muted) text-xs text-(--color-text-secondary)">
              <ImageOff className="h-6 w-6" />
              No solution image saved
            </div>
          )}
          <div className="space-y-3 p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold text-(--color-text-secondary)">{entry.lc}</span>
              <span className="rounded-full border border-(--color-border) px-2.5 py-0.5 text-[10px] font-mono font-bold text-(--color-neutral)">
                {entry.difficulty}
              </span>
            </div>
            <h3 className="font-serif text-lg text-(--color-neutral)">{entry.title}</h3>
            {entry.leetcodeLink && (
              <a
                href={entry.leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral)"
              >
                Open problem <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default DsaBenchmarkCards;
