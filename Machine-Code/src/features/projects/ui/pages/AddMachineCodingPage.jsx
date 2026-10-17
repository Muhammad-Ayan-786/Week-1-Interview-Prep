import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import {
  Clock,
  Link as LinkIcon,
  Code,
  Video,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  X,
  Plus,
} from 'lucide-react';

const sprintWeeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9'];

export const AddMachineCodingPage = () => {
  const navigate = useNavigate();
  const [sprintWeek, setSprintWeek] = useState('W9');
  const [verificationStatus, setVerificationStatus] = useState('In Progress');
  const [techTags, setTechTags] = useState([]);
  const [newTagInput, setNewTagInput] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: 'Distributed Job Scheduler & Live Execution Timeline',
      architectureOverview:
        'Visual concurrency orchestrator displaying task worker pools, priority DAG task dependencies, pause/resume execution controls, and streaming logs under 120-minute SLA.',
      timeTaken: '1 hr 45 min',
      liveUrl: 'https://job-scheduler.sundayready.dev',
      githubUrl: 'https://github.com/ayan/sunday-job-schedul',
      loomUrl: 'https://loom.com/share/928f09d2a45a19cb2',
      postMortemNotes:
        'Built a non-blocking queue model with dedicated worker thread communication. Priority sorting was initially recalculated on every step; optimized into an incremental binary heap to reduce JS heap churn during rapid task spikes.',
      elevatorPitch:
        'Decouple DAG topological sorting from worker execution threads via Web Workers to keep UI frame rate locked at 60fps even under 10k task bursts.',
    },
  });

  const handleAddTag = () => {
    if (newTagInput.trim() && !techTags.includes(newTagInput.trim())) {
      setTechTags([...techTags, newTagInput.trim()]);
      setNewTagInput('');
      setShowTagInput(false);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTechTags(techTags.filter((t) => t !== tagToRemove));
  };

  const onSubmit = (data) => {
    const payload = {
      ...data,
      sprintWeek,
      verificationStatus,
      techStack: techTags,
    };
    // TODO: Connect submission API / Redux hook
    console.log('Machine Coding Project Saved:', payload);
    navigate('/machine-coding');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Breadcrumb & Title */}
      <div className="flex flex-wrap flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => navigate('/machine-coding')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) mb-1 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BUILD / MACHINE CODING / ADD PROJECT
          </button>
          <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            ● SYSTEM CONSTRUCTION RECORD
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Add Machine Coding Project
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed max-w-xl">
            Document weekly timed low-level architectures, tech stack decisions, deployment links, and core engineering takeaways under real interview constraints.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="self-start sm:self-auto bg-(--color-surface-muted) p-1 rounded-xl border border-(--color-border) flex items-center gap-1 text-xs font-mono font-bold shrink-0">
          <span className="px-3 py-1.5 bg-(--color-primary) text-(--color-neutral) rounded-lg shadow-xs">
            Create New (Active)
          </span>
          <span className="px-3 py-1.5 text-(--color-text-secondary) hover:text-(--color-neutral) cursor-pointer">
            Prefilled Edit
          </span>
        </div>
      </div>

      {/* Main Form Container */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-(--color-surface) p-6 sm:p-8 rounded-3xl border border-(--color-border)/80 shadow-xs space-y-6"
      >
        {/* Banner */}
        <div className="flex items-center justify-between border-b border-(--color-border)/60 pb-4 text-xs font-mono">
          <span className="px-3 py-1 bg-(--color-surface-muted) rounded-lg border border-(--color-border)/60 font-bold text-(--color-neutral)">
            ● SR-LLD • WEEK 09 SPRINT
          </span>
          <div className="flex items-center gap-1.5 text-(--color-text-secondary)">
            <Clock className="w-3.5 h-3.5" />
            <span>Interview SLA Target: 120 mins</span>
          </div>
        </div>

        {/* Sprint Cohort / Week Index */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              SPRINT COHORT / WEEK INDEX
            </label>
            <span className="text-(--color-text-secondary)">Deterministic Cadence</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
            {sprintWeeks.map((w) => {
              const isSelected = sprintWeek === w;
              return (
                <button
                  type="button"
                  key={w}
                  onClick={() => setSprintWeek(w)}
                  className={`py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${isSelected
                    ? 'bg-(--color-primary) text-(--color-neutral) border-(--color-primary) shadow-xs'
                    : 'bg-(--color-bg) border-(--color-border) text-(--color-text-secondary) hover:text-(--color-neutral)'
                    }`}
                >
                  {w}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Title & System Scope */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              PROJECT TITLE & SYSTEM SCOPE *
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">56 / 100</span>
          </div>
          <input
            type="text"
            required
            {...register('title')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-4 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary)"
          />
        </div>

        {/* Architecture & Problem Definition */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              ARCHITECTURE & PROBLEM DEFINITION
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">Executive Overview</span>
          </div>
          <textarea
            rows={3}
            {...register('architectureOverview')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl p-3.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary)"
          />
        </div>

        {/* Technical Stack & Primitives Tags */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              TECHNICAL STACK & PRIMITIVES
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">{techTags.length} applied</span>
          </div>

          <div className="p-3 bg-(--color-bg) border border-(--color-border) rounded-xl flex flex-wrap items-center gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-(--color-surface) border border-(--color-border) rounded-lg text-xs font-mono font-medium text-(--color-neutral) flex items-center gap-1.5 shadow-2xs"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {showTagInput ? (
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  placeholder="Tag name..."
                  value={newTagInput}
                  onChange={(e) => setNewTagInput(e.target.value)}
                  className="px-2.5 py-1 text-xs font-mono bg-white border border-(--color-border) rounded-lg focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-2.5 py-1 bg-(--color-primary) text-xs font-mono font-bold rounded-lg cursor-pointer"
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowTagInput(true)}
                className="px-2.5 py-1 bg-(--color-surface-muted) border border-(--color-border)/60 rounded-lg text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) flex items-center gap-1 transition-all cursor-pointer"
              >
                <Plus className="w-3 h-3" /> Add Tech Tag
              </button>
            )}
          </div>
        </div>

        {/* Time Taken & Verification Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
                TIME TAKEN (TIMED SLA)
              </label>
              <span className="text-emerald-700 font-bold text-[11px]">Within Target</span>
            </div>
            <div className="relative">
              <Clock className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                {...register('timeTaken')}
                className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-(--color-neutral) focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              VERIFICATION STATUS
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Completed', color: 'emerald' },
                { label: 'In Progress', color: 'amber' },
                { label: 'Revision', color: 'rose' },
              ].map((st) => {
                const isSelected = verificationStatus === st.label;
                return (
                  <button
                    type="button"
                    key={st.label}
                    onClick={() => setVerificationStatus(st.label)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${isSelected
                      ? 'bg-(--color-surface-muted) border-(--color-neutral) text-(--color-neutral) shadow-xs'
                      : 'bg-(--color-bg) border-(--color-border) text-(--color-text-secondary)'
                      }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${st.color === 'emerald'
                        ? 'bg-emerald-500'
                        : st.color === 'amber'
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                        }`}
                    />
                    {st.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Deploy & GitHub URL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              LIVE PRODUCTION LINK
            </label>
            <div className="relative">
              <LinkIcon className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                {...register('liveUrl')}
                className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl pl-10 pr-4 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              GITHUB REPOSITORY URL *
            </label>
            <div className="relative">
              <Code className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                {...register('githubUrl')}
                className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl pl-10 pr-4 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Post-Mortem & Architecture Notes */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              POST-MORTEM & ARCHITECTURE NOTES
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">Active Recall Drill</span>
          </div>
          <textarea
            rows={4}
            {...register('postMortemNotes')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl p-3.5 text-xs font-sans text-(--color-neutral) focus:outline-none"
          />
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-(--color-border)/60">
          <span className="text-[11px] font-mono text-emerald-700 font-medium">
            ● All modifications autosaved locally
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => navigate('/machine-coding')}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-(--color-surface-muted) border border-(--color-border) rounded-xl text-xs font-mono font-bold text-(--color-neutral) hover:bg-(--color-surface) cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold hover:brightness-95 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Save Project Entry <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMachineCodingPage;