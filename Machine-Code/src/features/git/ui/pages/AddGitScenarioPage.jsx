import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Plus, X, Star } from 'lucide-react';

const topicTracks = [
  'Disaster Recovery',
  'Rebase & Cherry-Pick',
  'Merge Conflicts & Rerere',
  'Git Internals (Plumbing vs Porcelain)',
  'Submodules & Monorepo',
  'Branching & Release Workflows',
];

const difficultyTiers = ['Easy', 'Medium', 'Hard (Staff)'];
const oralDurations = ['3 min', '5 min (Standard)', '8 min (Deep Dive)'];
const frequencies = ['High Frequency (Staff/Principal)', 'Mid-level Core', 'Niche Plumbing'];

export const AddGitScenarioPage = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('Disaster Recovery');
  const [difficulty, setDifficulty] = useState('Hard (Staff)');
  const [duration, setDuration] = useState('5 min (Standard)');
  const [frequency, setFrequency] = useState('High Frequency (Staff/Principal)');

  const [points, setPoints] = useState([]);
  const [newPointInput, setNewPointInput] = useState('');
  const [showAddPointInput, setShowAddPointInput] = useState(false);

  const handleAddPoint = () => {
    if (newPointInput.trim()) {
      setPoints([...points, newPointInput.trim()]);
      setNewPointInput('');
      setShowAddPointInput(false);
    }
  };


  const handleRemovePoint = (index) => {
    setPoints(points.filter((_, i) => i !== index));
  };



  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "Recovering from Accidental 'git reset --hard' with git reflog",
      coreMentalModel:
        'The immutable graph invariant: Git commits and blobs are never actually destroyed by normal branch resets or pointer shifts. Everything committed lives in .git/objects and is safeguarded until unreachable garbage collection pruning (standard default: 30 days for reflogs, 90 days for loose objects).',
      cliCommandSequence: `git reflog show --date=relative\n  e71c9b2 (HEAD -> main) HEAD@{0}: reset: moving to HEAD~3\n  94a1b08 HEAD@{1}: commit: feat(billing): Stripe webhooks idempotency handler\n  3f82aa1 HEAD@{2}: commit: fix(auth): session refresh cookie ttl\n\ngit branch recovery-safeguard 94a1b08\n# Target ref reconstructed without modifying current destructive state\n\ngit reset --hard recovery-safeguard\nHEAD is now at 94a1b08 feat(billing): Stripe webhooks idempotency handler`,
      oralExplanation:
        "Explain to the interviewer: 'First, don't panic. A hard reset moves the branch tip pointer and changes the working tree, but does not wipe loose commit objects. We immediately invoke `git reflog` to examine HEAD pointer history, locate the SHA-1 prior to the reset, and safely spin up a rescue branch before touching main again.'",
      takeaway1Title: 'Reflog vs Log Distinction',
      takeaway1Text: 'Reflog is strictly local machine history of HEAD pointer updates; git log traverses commit DAG history.',
      takeaway2Title: 'Defensive Branching Pattern',
      takeaway2Text: 'Never jump straight to resetting back on dirty main. Always branch out to a recovery ref first to verify work tree state.',
      takeaway3Title: 'Uncommitted Changes Edge Case',
      takeaway3Text: 'Hard reset completely obliterates uncommitted changes in the working tree. Only staged files can be salvaged via git fsck.',
      takeaway4Title: 'Oral Elevator Pitch',
      takeaway4Text: '"Git is an append-only content-addressable storage engine wrapped in a DAG graph interface."',
    },
  });

  const onSubmit = (data) => {
    const payload = {
      ...data,
      topic: selectedTopic,
      difficulty,
      duration,
      frequency,
    };
    console.log('Saved Git Scenario:', payload);
    navigate('/git');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Breadcrumb & Calibration Node Banner */}
      <div className="flex flex-wrap flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => navigate('/git')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) mb-1 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> PRACTICE / GIT & GITHUB / ADD SCENARIO
          </button>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Add Git Scenario
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed max-w-xl">
            Catalog real-world version control scenarios, disaster recovery sequences, and mental models for deterministic oral delivery.
          </p>
        </div>

        {/* View Mode Switcher Pill */}
        <div className="self-start sm:self-auto bg-(--color-surface-muted) p-1 rounded-xl border border-(--color-border) flex items-center gap-1 text-xs font-mono font-bold shrink-0">
          <span className="px-3 py-1.5 bg-(--color-surface) rounded-lg shadow-xs text-(--color-neutral)">
            Create Mode (Active)
          </span>
          <span className="px-3 py-1.5 text-(--color-text-secondary) hover:text-(--color-neutral) cursor-pointer">
            Prefilled Edit Mode
          </span>
        </div>
      </div>

      {/* Main Form Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-(--color-surface) p-6 sm:p-8 rounded-3xl border border-(--color-border)/80 shadow-xs space-y-8"
      >
        {/* 01 Topic Track & Taxonomy */}
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-mono border-b border-(--color-border)/60 pb-2">
            <span className="font-bold text-(--color-neutral) uppercase tracking-wider">
              01 // Topic Track & Taxonomy
            </span>
            <span className="text-(--color-text-secondary)">Deterministic Scope</span>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {topicTracks.map((trk) => {
                const isSelected = selectedTopic === trk;
                return (
                  <button
                    type="button"
                    key={trk}
                    onClick={() => setSelectedTopic(trk)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${isSelected
                      ? 'bg-(--color-primary) text-(--color-neutral) border-(--color-primary) shadow-xs'
                      : 'bg-(--color-bg) border-(--color-border) text-(--color-text-secondary) hover:text-(--color-neutral)'
                      }`}
                  >
                    {trk}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono font-bold text-(--color-text-secondary) uppercase">
                  DIFFICULTY TIER
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {difficultyTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setDifficulty(tier)}
                      className={`py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${difficulty === tier
                        ? 'bg-(--color-primary) text-(--color-neutral) border-(--color-primary) shadow-xs'
                        : 'bg-(--color-bg) border-(--color-border) text-(--color-text-secondary)'
                        }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02 Scenario Title & Interview Context */}
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-mono border-b border-(--color-border)/60 pb-2">
            <span className="font-bold text-(--color-neutral) uppercase tracking-wider">
              02 // Scenario Title & Interview Context
            </span>
            <span className="text-(--color-text-secondary)">Character limit: 74/120</span>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              required
              {...register('title')}
              className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-4 py-3 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary)"
            />

            {/* Core Mental Model & Guardrails Box */}
            <div className="bg-(--color-primary)/20 border border-(--color-primary)/50 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-(--color-neutral)">
                <span>§</span>
                <span>Core Mental Model & Guardrails</span>
                <span className="px-2 py-0.5 bg-(--color-surface) rounded text-[9px] font-bold">
                  UNSHAKEABLE ANCHOR
                </span>
              </div>
              <textarea
                rows={3}
                {...register('coreMentalModel')}
                className="w-full bg-(--color-surface) border border-(--color-border) rounded-xl p-3 text-xs font-sans text-(--color-neutral) focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 04 Step-by-Step Recovery & Command Sequence */}
        <div className="space-y-4">
          <div className="flex justify-between text-xs font-mono border-b border-(--color-border)/60 pb-2">
            <span className="font-bold text-(--color-neutral) uppercase tracking-wider">
              04 // Step-by-Step Recovery & Command Sequence
            </span>
            <span className="text-(--color-text-secondary)">Interactive CLI Specimen</span>
          </div>

          <div className="space-y-3">
            {/* Terminal Mock */}
            <div className="bg-[#18181B] p-5 rounded-2xl border border-zinc-800 text-emerald-400 font-mono text-xs space-y-2 shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-zinc-400 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-zinc-300">zsh — incident-recovery-drill</span>
                </div>
                <span className="text-zinc-500">git-core:v2.44</span>
              </div>

              <textarea
                rows={9}
                {...register('cliCommandSequence')}
                className="w-full bg-transparent text-emerald-400 font-mono text-xs focus:outline-none resize-none pt-2"
              />
            </div>

            {/* Oral Explanation Script */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-mono font-bold text-(--color-text-secondary) uppercase">
                ORAL EXPLANATION SCRIPT / MARKDOWN NOTES
              </span>
              <textarea
                rows={3}
                {...register('oralExplanation')}
                className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl p-3.5 text-xs font-sans text-(--color-neutral) focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 05 Important Points (Key Takeaways) */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              IMPORTANT POINTS (KEY TAKEAWAYS) *
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">
              High-retention active recall markers
            </span>
          </div>
          <p className="text-xs font-sans text-(--color-text-secondary)">
            Formatted for rapid rehearsal drills prior to onsite rounds. Highlighted with Sunday Ready signature accents.
          </p>

          {/* Key Point List */}
          <div className="space-y-2">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="p-3 bg-(--color-bg) border border-(--color-border) rounded-xl flex items-center justify-between gap-3 text-xs font-sans"
              >
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <span className="w-5 h-5 rounded bg-(--color-primary) text-(--color-neutral) font-mono font-bold text-[11px] flex items-center justify-center shrink-0">
                    {idx < 9 && '0'}{idx + 1}
                  </span>
                  <span className="truncate text-(--color-neutral) font-medium">{pt}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemovePoint(idx)}
                  className="p-1 text-(--color-text-secondary) hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Add Key Highlight Input / Trigger */}
          {showAddPointInput ? (
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                placeholder="Type key highlight point..."
                value={newPointInput}
                onChange={(e) => setNewPointInput(e.target.value)}
                className="flex-1 bg-(--color-bg) border border-(--color-border) rounded-xl px-3.5 py-2 text-xs font-sans focus:outline-none focus:border-(--color-primary)"
              />
              <button
                type="button"
                onClick={handleAddPoint}
                className="px-4 py-2 bg-(--color-primary) text-(--color-neutral) text-xs font-mono font-bold rounded-xl hover:brightness-95 cursor-pointer"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowAddPointInput(false)}
                className="px-3 py-2 text-xs font-mono text-(--color-text-secondary) hover:text-(--color-neutral) cursor-pointer"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAddPointInput(true)}
              className="px-4 py-2 bg-(--color-surface-muted) border border-(--color-border) rounded-xl text-xs font-mono font-bold text-(--color-neutral) hover:bg-(--color-surface) flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> Add Key Highlight Point
            </button>
          )}
        </div>

        {/* Target Rehearsal Cohort & Retention Confidence */}
        <div className="bg-(--color-bg) p-5 rounded-2xl border border-(--color-border) flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)">
              TARGET REHEARSAL COHORT
            </span>
            <div className="font-serif text-lg font-normal text-(--color-neutral)">
              Sunday Morning Live Drill Cadence
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-(--color-text-secondary)">RETENTION CONFIDENCE:</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-(--color-primary) text-(--color-primary)" />
              <Star className="w-4 h-4 fill-(--color-primary) text-(--color-primary)" />
              <Star className="w-4 h-4 fill-(--color-primary) text-(--color-primary)" />
              <Star className="w-4 h-4 fill-(--color-primary) text-(--color-primary)" />
              <Star className="w-4 h-4 text-(--color-border)" />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-(--color-border)/60">
          <span className="text-[11px] font-mono text-emerald-700 font-medium">
            ● Autosaved locally (14:38:12)
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => navigate('/git')}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold hover:brightness-95 shadow-xs cursor-pointer"
            >
              Publish Git Scenario →
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddGitScenarioPage;