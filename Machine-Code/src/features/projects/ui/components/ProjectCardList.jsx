import React from 'react';
import { ExternalLink, Code, Clock, ArrowRight, Video } from 'lucide-react';

const projects = [
  {
    id: 1,
    weekTag: 'WEEK 08 • RECENT SUBMISSION',
    status: 'Completed',
    statusVariant: 'success',
    title: 'Infinite Canvas with Quadtree Spatial Indexing',
    description:
      'High-performance infinite 2D canvas with panning, pinch-to-zoom, virtualized DOM rendering, and quadtree spatial query optimization to render 10,000+ interactive nodes at 60fps.',
    tags: ['React 19', 'TypeScript', 'Canvas API', 'Quadtree', 'Tailwind CSS'],
    timeLog: '1 hr 45 min (Target: 2 hrs)',
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    weekTag: 'WEEK 07 • ARCHITECTURE REVIEW PASSED',
    status: 'Completed',
    statusVariant: 'success',
    title: 'Real-time Collaborative Kanban Board',
    description:
      'Trello-style board with optimistic UI updates, drag-and-drop column reordering, WebSocket broadcast sync, and deterministic offline rollback using IndexedDB.',
    tags: ['Next.js 14', 'WebSockets', 'TanStack Query', 'Framer Motion', 'Zustand'],
    timeLog: '1 hr 52 min (Target: 2 hrs)',
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    weekTag: 'WEEK 06 • ZERO DEPENDENCIES',
    status: 'Completed',
    statusVariant: 'success',
    title: 'Custom Autocomplete & Command Palette (cmdk clone)',
    description:
      'Accessible modal command palette with trie-based fuzzy search ranking, keyboard navigation (arrow keys, escape trap, enter), LRU recent query caching, and async debounced network fetching.',
    tags: ['Vanilla TS', 'Web Components', 'Trie Structure', 'ARIA Spec'],
    timeLog: '1 hr 28 min (Target: 1.5 hrs)',
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    weekTag: 'WEEK 09 • CURRENT FOCUS',
    status: 'In Progress',
    statusVariant: 'warning',
    title: 'Distributed Job Scheduler & Live Execution Timeline',
    description:
      'Visual concurrency orchestrator displaying task worker pools, priority DAG task dependencies, pause/resume execution controls, and streaming logs.',
    tags: ['React', 'Web Workers', 'RxJS', 'SVG Pipelines'],
    timeLog: 'In Progress (Started 45m ago)',
    isFocusBorder: true,
    githubBranch: 'GitHub (Branch: w09-scheduler)',
    continueAction: true,
  },
];

export const ProjectCardList = () => {
  return (
    <div className="space-y-6">
      {projects.map((item) => (
        <div
          key={item.id}
          className={`bg-(--color-surface) rounded-3xl p-6 sm:p-8 border shadow-xs space-y-5 transition-all ${item.isFocusBorder
            ? 'border-l-4 border-l-(--color-secondary) border-t border-r border-b border-(--color-border)/80'
            : 'border-(--color-border)/80 hover:border-(--color-border)'
            }`}
        >
          {/* Top Header Tag & Status Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="font-bold tracking-wider text-(--color-text-secondary) uppercase text-[11px]">
              {item.weekTag}
            </span>
            <span
              className={`px-3 py-0.5 rounded-full font-bold uppercase text-[10px] flex items-center gap-1.5 ${item.statusVariant === 'success'
                ? 'bg-emerald-500/10 text-emerald-800 border border-emerald-500/20'
                : 'bg-amber-500/15 text-amber-800 border border-amber-500/30'
                }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${item.statusVariant === 'success' ? 'bg-emerald-500' : 'bg-amber-600'
                  }`}
              />
              {item.status}
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-(--color-neutral) tracking-tight">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm font-sans text-(--color-text-secondary) leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {item.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 bg-(--color-surface-muted) border border-(--color-border)/60 text-(--color-neutral) rounded-md font-medium text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer Action Controls & Duration Metrics */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-(--color-border)/50 text-xs font-mono text-(--color-text-secondary)">
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-3 py-1 bg-(--color-surface-muted) rounded-lg border border-(--color-border)/60 flex items-center gap-1.5 text-(--color-neutral) font-semibold">
                <Clock className="w-3.5 h-3.5 text-(--color-text-secondary)" />
                {item.timeLog}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {item.githubBranch && (
                <a
                  href="#github-branch"
                  className="hover:underline flex items-center gap-1.5 text-(--color-neutral) font-bold"
                >
                  <Code className="w-3.5 h-3.5" />
                  {item.githubBranch} <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {item.liveDemoUrl && (
                <a
                  href={item.liveDemoUrl}
                  className="hover:underline flex items-center gap-1 text-(--color-neutral) font-bold"
                >
                  Live Demo <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  className="hover:underline flex items-center gap-1 text-(--color-neutral) font-bold"
                >
                  <Code className="w-3.5 h-3.5" /> GitHub Repo <ExternalLink className="w-3 h-3" />
                </a>
              )}

              {item.continueAction && (
                <button
                  type="button"
                  className="px-4 py-2 bg-(--color-primary) text-(--color-neutral) rounded-xl font-bold flex items-center gap-1.5 hover:brightness-95 shadow-xs transition-all cursor-pointer"
                >
                  Continue Project <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardList;