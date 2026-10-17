import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

export const QuestionFilterBar = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  difficulty,
  setDifficulty,
  resetFilters,
}) => {
  return (
    <div className="bg-(--color-surface) p-4 rounded-2xl border border-(--color-border)/80 shadow-xs space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="md:col-span-5 relative">
          <Search className="w-4 h-4 text-(--color-text-secondary) absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions by title, pattern or key concept..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl pl-10 pr-4 py-2 text-xs font-sans text-(--color-neutral) placeholder:text-(--color-text-secondary) focus:outline-none focus:border-(--color-primary)"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="md:col-span-2">
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-3 py-2 text-xs font-sans text-(--color-neutral) focus:outline-none">
            <option value="">All Categories</option>
            <option value="dsa">DSA</option>
            <option value="fullstack">Full-Stack</option>
            <option value="git">Git & VCS</option>
            <option value="machine">Machine Coding</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-3 py-2 text-xs font-sans text-(--color-neutral) focus:outline-none">
            <option value="">All Statuses</option>
            <option value="Done">Completed</option>
            <option value="In Flight">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)} className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-3 py-2 text-xs font-sans text-(--color-neutral) focus:outline-none">
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Reset Action */}
        <div className="md:col-span-1 flex justify-end">
          <button
            type="button"
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-xs font-mono text-(--color-text-secondary) hover:text-(--color-neutral) py-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionFilterBar;