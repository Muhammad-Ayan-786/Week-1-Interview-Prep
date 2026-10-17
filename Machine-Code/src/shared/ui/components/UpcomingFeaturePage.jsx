import { createElement } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  Blocks,
  Check,
  CircleDashed,
  Clock3,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router';

const workInProgress = [
  {
    icon: Blocks,
    title: 'Shaping the workflow',
    description: 'Making the tools feel clear, focused, and useful in your daily prep.',
  },
  {
    icon: CircleDashed,
    title: 'Connecting the pieces',
    description: 'Bringing your notes, practice, and progress together in one place.',
  },
  {
    icon: Check,
    title: 'Getting the details right',
    description: 'Polishing the experience before this part of your workspace opens.',
  },
];

export const UpcomingFeaturePage = ({
  featureName,
  description,
  icon = Sparkles,
}) => (
  <main className="mx-auto w-full max-w-6xl space-y-8 py-2 sm:py-6">
    <Link
      to="/dashboard"
      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-(--color-text-secondary) transition-colors hover:text-(--color-neutral)"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      BACK TO YOUR DASHBOARD
    </Link>

    <section className="relative isolate min-w-0 overflow-hidden rounded-4xl border border-(--color-border) bg-(--color-surface) shadow-xs">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-(--color-primary)/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-(--color-secondary)/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(var(--color-neutral)_1px,transparent_1px),linear-gradient(90deg,var(--color-neutral)_1px,transparent_1px)] bg-size-[36px_36px]" />
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-8 p-5 sm:p-8 2xl:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] 2xl:items-center 2xl:gap-10 2xl:p-12">
        <div className="min-w-0 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-(--color-primary)/60 bg-(--color-primary)/15 px-3.5 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-(--color-neutral)">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-tertiary) opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-(--color-tertiary)" />
            </span>
            Currently in the workshop
          </div>

          <div className="space-y-4">
            <div className="flex min-w-0 items-center gap-3 text-(--color-tertiary)">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-(--color-border) bg-(--color-surface)/80 shadow-xs">
                {createElement(icon, { className: 'h-5 w-5' })}
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-(--color-text-secondary)">
                Sunday Ready • New workspace
              </span>
            </div>

            <h1 className="max-w-2xl wrap-break-word font-serif text-3xl font-normal leading-[1.08] tracking-tight text-(--color-neutral) min-[420px]:text-4xl sm:text-5xl 2xl:text-6xl">
              A new home for
              <span className="relative mx-1 inline wrap-break-word sm:mx-2">
                {featureName}
                <span aria-hidden="true" className="absolute -bottom-1 left-0 -z-10 h-2 w-full -rotate-1 rounded-sm bg-(--color-primary)/60 sm:h-3" />
              </span>
              is on its way.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-xl bg-(--color-neutral) px-5 py-3 text-xs font-mono font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Back to dashboard
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="inline-flex items-center gap-2 px-2 py-3 text-xs font-mono text-(--color-text-secondary)">
              <Clock3 className="h-3.5 w-3.5" />
              Thoughtfully in progress
            </span>
          </div>
        </div>

        <aside className="relative min-w-0">
          <div className="absolute -right-2 -top-3 z-10 flex h-12 w-12 rotate-6 items-center justify-center rounded-2xl bg-(--color-primary) text-(--color-neutral) shadow-md sm:-right-4 sm:-top-5">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-(--color-border) bg-(--color-bg)/90 p-5 shadow-sm backdrop-blur-sm sm:p-7">
            <div className="mb-7 flex items-center justify-between border-b border-(--color-border) pb-4">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-(--color-text-secondary)">
                  Build journal
                </p>
                <p className="mt-1 font-serif text-xl text-(--color-neutral)">What we’re working on</p>
              </div>
              <ArrowDownRight className="h-5 w-5 text-(--color-tertiary)" />
            </div>

            <div className="space-y-3">
              {workInProgress.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-(--color-border)/80 bg-(--color-surface) p-4 transition-transform hover:translate-x-1"
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${index === 0 ? 'bg-(--color-primary)/25 text-(--color-tertiary)' : 'bg-(--color-surface-muted) text-(--color-text-secondary)'}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm font-bold text-(--color-neutral)">{item.title}</h2>
                      <p className="text-xs leading-relaxed text-(--color-text-secondary)">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-(--color-neutral) px-4 py-3 text-white">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70">
                Status
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-primary)" />
                In progress
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <p className="text-center text-[10px] font-mono uppercase tracking-[0.18em] text-(--color-text-secondary)/80">
      Good preparation takes intention. So does building the right tools.
    </p>
  </main>
);

export default UpcomingFeaturePage;
