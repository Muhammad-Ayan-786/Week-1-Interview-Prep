import { useAddQuestionForm } from '../../hooks/useAddQuestionForm';
import { Code2, GitBranch, Layers, Kanban, Link as LinkIcon, ArrowLeft } from 'lucide-react';

const categories = [
  { id: 'dsa', name: 'DSA', desc: 'LeetCode & Core Algos', icon: Code2 },
  { id: 'git', name: 'Git & VCS', desc: 'CLI & Internals', icon: GitBranch },
  { id: 'fullstack', name: 'Full-Stack', desc: 'Arch & Web Systems', icon: Layers },
  { id: 'machine', name: 'Machine Coding', desc: 'Timed LLD Builds', icon: Kanban },
];
const complexityOptions = ['Easy', 'Medium', 'Hard'];
const masteryOptions = ['Pending', 'In Flight', 'Done'];

export const AddQuestionPage = () => {
  const {
    register,
    submitQuestion,
    selectedCategory,
    setSelectedCategory,
    complexity,
    setComplexity,
    mastery,
    setMastery,
    cancel,
  } = useAddQuestionForm();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-wrap flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <button
            type="button"
            onClick={cancel}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) mb-1 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Repository
          </button>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-(--color-neutral)">
            Record Problem Entry
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed">
            Log algorithmic patterns, system design drills, and code approaches into your active revision cycle.
          </p>
        </div>

        <div className="self-start sm:self-auto bg-(--color-surface-muted) p-1 rounded-xl border border-(--color-border) flex items-center gap-1 text-xs font-mono font-bold shrink-0">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-(--color-surface) rounded-lg shadow-xs text-(--color-neutral)">
            Create Mode
          </span>
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-(--color-text-secondary)">
            SR-ITEM #142
          </span>
        </div>
      </div>

      <form
        onSubmit={submitQuestion}
        className="bg-(--color-surface) p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-(--color-border)/80 shadow-xs space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between border-b border-(--color-border)/60 pb-3 sm:pb-4 text-xs font-mono gap-2">
          <span className="flex items-center gap-2 font-bold text-(--color-neutral)">
            <span className="w-2 h-2 rounded-full bg-(--color-primary)" />
            ENTRY METADATA
          </span>
          <span className="text-(--color-text-secondary) text-[11px]">Active Cohort: 2026.Q4</span>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral)">Problem Title *</label>
            <span className="text-(--color-text-secondary) text-[11px]">Max 120 chars</span>
          </div>
          <input
            type="text"
            required
            placeholder="e.g. Implement Trie (Prefix Tree) with Wildcard Search"
            {...register('title')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-3.5 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary) transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral)">Core Category *</label>
            <span className="text-(--color-text-secondary) text-[11px]">Taxonomy Group</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  type="button"
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-3 rounded-xl sm:rounded-2xl border text-center space-y-1 transition-all cursor-pointer flex sm:flex-col items-center sm:justify-center justify-start gap-3 sm:gap-1 ${isSelected
                    ? 'border-(--color-primary) bg-(--color-primary)/15 shadow-xs'
                    : 'border-(--color-border) bg-(--color-bg) hover:border-(--color-border)'
                    }`}
                >
                  <Icon className="w-5 h-5 text-(--color-neutral) shrink-0" />
                  <div className="text-left sm:text-center">
                    <div className="text-xs font-sans font-bold">{category.name}</div>
                    <div className="text-[10px] font-mono text-(--color-text-secondary)">{category.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-(--color-neutral)">
              Complexity Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {complexityOptions.map((tier) => (
                <button
                  type="button"
                  key={tier}
                  onClick={() => setComplexity(tier)}
                  className={`py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${complexity === tier
                    ? 'bg-(--color-primary) text-(--color-neutral) border-(--color-primary)'
                    : 'bg-(--color-bg) border-(--color-border) text-(--color-text-secondary)'
                    }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono font-bold text-(--color-neutral)">
              Current Readiness State
            </label>
            <div className="grid grid-cols-3 gap-2">
              {masteryOptions.map((status) => (
                <button
                  type="button"
                  key={status}
                  onClick={() => setMastery(status)}
                  className={`py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${mastery === status
                    ? 'bg-rose-100 text-rose-800 border-rose-300'
                    : 'bg-(--color-bg) border-(--color-border) text-(--color-text-secondary)'
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral)">Problem Reference Link</label>
            <span className="text-(--color-text-secondary) text-[11px]">LeetCode / GitHub</span>
          </div>
          <div className="relative">
            <LinkIcon className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="https://leetcode.com/problems/..."
              {...register('referenceUrl')}
              className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl pl-10 pr-4 py-2.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary) transition-all"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral)">Intuition, Trade-offs & Pitfalls</label>
            <span className="text-(--color-text-secondary) text-[11px]">Whiteboard Notes</span>
          </div>
          <textarea
            rows={4}
            placeholder="Summarize edge cases, time/space complexity, and key pitfalls to remember under pressure..."
            {...register('notes')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl p-3.5 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary) transition-all"
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-4 border-t border-(--color-border)/60">
          <button
            type="button"
            onClick={cancel}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) text-center cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold hover:brightness-95 shadow-xs cursor-pointer text-center"
          >
            Save Entry
          </button>
        </div>
      </form>
    </div>
  )
};

export default AddQuestionPage;
