import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Plus } from 'lucide-react';
import GitScenarioList from '../components/GitScenarioList';
import GitDetailView from '../components/GitDetailView';
import GitReferenceSpecs from '../components/GitReferenceSpecs';

const gitScenariosData = [
  {
    id: 'git-reset-hard',
    categoryTag: 'DISASTER RECOVERY & HEAD',
    difficulty: 'Hard',
    title: "Recovering from Accidental 'git reset --hard' with git reflog",
    subtitle: "Step-by-step restoration of unreferenced orphan commits using Git's reference log and fsck after destructive branch resets.",
    lastRevised: 'Revised Yesterday',
    status: 'Ready',
    points: [
      {
        label: 'Reflog vs Log Distinction',
        text: 'git log walks the ancestor graph backwards exclusively from the current branch HEAD; conversely, git reflog records an append-only chronological log of every local pointer mutation (checkouts, merges, resets, commits) irrespective of graph reachability.',
      },
      {
        label: 'Deterministic Recovery Sequence',
        text: 'Execute git reflog, locate the SHA immediately preceding the destructive operation (e.g., HEAD@{1}), and run git branch recovery-branch HEAD@{1}. Never re-reset immediately; anchor the orphaned SHA into a named branch first.',
      },
      {
        label: 'Uncommitted Work Edge Case',
        text: 'Staged index files survive as dangling blobs accessible via git fsck --lost-found. However, raw working tree modifications that were never staged with git add prior to reset --hard bypass the store entirely and are irreversibly lost.',
      },
      {
        label: 'Oral Delivery Anchor',
        text: '"Git is fundamentally an append-only directed acyclic graph. Destructive branch commands only sever reference pointers—the underlying commit trees and blob objects remain physically intact in the store until aggressive GC."',
      },
    ],
  },
  {
    id: 'interactive-rebase',
    categoryTag: 'BRANCHING & HISTORY',
    difficulty: 'Medium',
    title: 'Interactive Rebase vs Cherry-Pick: Cleaning Dirty Feature Branches',
    subtitle: 'Squashing WIP commits and rewriting authorship stamps before upstream PR submission.',
    lastRevised: 'Oct 24',
    status: 'Ready',
    points: [{ label: 'Squash Workflow', text: 'Combine multiple fixup commits into atomic units.' }],
  },
  {
    id: 'three-way-merge',
    categoryTag: 'MERGE CONFLICTS & PLUMBING',
    difficulty: 'Hard',
    title: 'Three-Way Merge Algorithm & Rerere (Reuse Recorded Resolution)',
    subtitle: 'Using common ancestors and driver plugins to auto-resolve recurring merge conflicts.',
    lastRevised: 'Oct 21',
    status: 'Ready',
    points: [{ label: 'Rerere Engine', text: 'Record conflict resolutions for future rebases.' }],
  },
  {
    id: 'git-object-model',
    categoryTag: 'GIT INTERNALS',
    difficulty: 'Medium',
    title: 'Git Object Model: Blobs, Trees, Commits, and Annotated Tags',
    subtitle: 'SHA-1 hashing mechanics and content-addressable filesystem internals.',
    lastRevised: 'Oct 19',
    status: 'Ready',
    points: [{ label: 'Tree Objects', text: 'Store directory hierarchies and file permission attributes.' }],
  },
  {
    id: 'trunk-based-dev',
    categoryTag: 'TEAM WORKFLOWS',
    difficulty: 'Easy',
    title: 'Trunk-Based Development vs GitFlow: Release Engineering Tradeoffs',
    subtitle: 'Feature flags, short-lived branches, and continuous deployment pipeline cadences.',
    lastRevised: 'Oct 15',
    status: 'Ready',
    points: [{ label: 'Feature Flags', text: 'Decouple merge from deployment.' }],
  },
];

export const GitScenariosPage = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState('git-reset-hard');
  const [activeFilter, setActiveFilter] = useState('All (26)');

  const selectedScenario = gitScenariosData.find((s) => s.id === selectedId);

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            PRACTICE / GIT & GITHUB • SCENARIO REPOSITORY
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Git & GitHub Scenarios
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) max-w-xl">
            Real-world merge conflict resolution, detached HEAD recovery, rebase workflows, and deterministic version control interview responses.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-(--color-surface-muted) border border-(--color-border)/80 rounded-xl text-xs font-mono font-bold text-(--color-text-secondary)">
            Queue: <span className="text-(--color-neutral)">24 Mastered</span> / <span className="text-(--color-tertiary)">2 In Revision</span>
          </div>
          <button
            type="button"
            onClick={() => navigate('/git/add')}
            className="px-4 py-2 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Add Git Question
          </button>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Search & List (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Git scenarios, commands..."
              className="w-full bg-(--color-surface) border border-(--color-border) rounded-2xl pl-10 pr-4 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:ring-2 focus:ring-(--color-primary) shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
            {['All (26)', 'Rebase & Merge (8)', 'Disaster Recovery (6)'].map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => setActiveFilter(pill)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${activeFilter === pill
                  ? 'bg-(--color-neutral) text-white shadow-xs'
                  : 'bg-(--color-surface-muted) text-(--color-text-secondary) border border-(--color-border)/60'
                  }`}
              >
                {pill}
              </button>
            ))}
          </div>

          <GitScenarioList
            scenarios={gitScenariosData}
            selectedId={selectedId}
            onSelectScenario={(id) => setSelectedId(id)}
          />
        </div>

        {/* Right Column: Detailed View (7 Cols) */}
        <div className="lg:col-span-7">
          <GitDetailView scenario={selectedScenario} />
        </div>
      </div>

      {/* System Specimens Reference Frames */}
      <GitReferenceSpecs onNavigateAdd={() => navigate('/git/add')} />
    </div>
  );
};

export default GitScenariosPage;