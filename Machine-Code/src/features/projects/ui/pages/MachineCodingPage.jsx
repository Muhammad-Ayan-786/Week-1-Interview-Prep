import React from 'react';
import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';
import MachineCodingHeaderStats from '../components/MachineCodingHeaderStats';
import ProjectCardList from '../components/ProjectCardList';
import MachineCodingEmptyState from '../components/MachineCodingEmptyState';

export const MachineCodingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Top Header & Page Action */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            BUILD / MACHINE CODING • TIMED LLD CHALLENGES
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Machine Coding Projects
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) max-w-xl">
            Weekly timed low-level design challenges, production-ready frontend architectures, and component implementations under strict interview constraints.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/machine-coding/add')}
          className="px-5 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add Project
        </button>
      </div>

      {/* Top Header SLA & Compliance Metrics */}
      <MachineCodingHeaderStats />

      {/* Project Card List */}
      <ProjectCardList />

      {/* Empty State Specification Frame */}
      <MachineCodingEmptyState onAddClick={() => navigate('/machine-coding/add')} />
    </div>
  );
};

export default MachineCodingPage;