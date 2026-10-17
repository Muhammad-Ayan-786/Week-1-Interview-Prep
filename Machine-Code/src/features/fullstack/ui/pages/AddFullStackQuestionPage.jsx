import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Plus, X, ArrowLeft } from 'lucide-react';

const defaultTakeaways = [
  'Idempotency Key Scope: Generated strictly on the client (UUIDv4) and injected via X-Idempotency-Key header.',
  'Deterministic Rollback Strategy: Mutate client state immediately, keep immutable prior snapshot, restore on error.',
  'Offline IndexedDB Buffering: If offline, queue mutations in IndexedDB with original timestamps.',
];

const topicTracks = [
  'API Reliability',
  'System Design',
  'Concurrency & State',
  'Frontend Architecture',
  'Databases & Storage',
  'Node.js Runtimes',
];

export const AddFullStackQuestionPage = () => {
  const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState('API Reliability');
  const [points, setPoints] = useState(defaultTakeaways);
  const [newPointInput, setNewPointInput] = useState('');
  const [showAddPointInput, setShowAddPointInput] = useState(false);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      explanation: '',
      verbatimResponse: '',
    },
  });

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

  const onSubmit = (data) => {
    const payload = {
      ...data,
      topicTrack: selectedTrack,
      keyPoints: points,
    };
    // TODO: Connect Redux / API submission logic
    console.log('Full-Stack Question saved:', payload);
    navigate('/fullstack');
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Header & Breadcrumbs */}
      <div className="flex flex-wrap flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => navigate('/fullstack')}
            className="inline-flex truncate items-center gap-1.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) mb-1 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> PRACTICE / FULL-STACK QUESTIONS / ADD NEW QUESTION
          </button>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Add Full-Stack Question
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) leading-relaxed max-w-xl">
            Document complex architectural concepts, mental models, and structured interview answers with verbatim recall fidelity.
          </p>
        </div>

        {/* View Switcher Pill */}
        <div className="self-start sm:self-auto bg-(--color-surface-muted) p-1 rounded-xl border border-(--color-border) flex items-center gap-1 text-xs font-mono font-bold shrink-0">
          <button
            type="button"
            className="px-3 py-1.5 bg-(--color-surface) rounded-lg shadow-xs text-(--color-neutral) cursor-pointer"
          >
            Create New (Active)
          </button>
          <button
            type="button"
            title='Upcoming Feature'
            className="px-3 py-1.5 text-(--color-text-secondary) hover:text-(--color-neutral) cursor-pointer"
          >
            Prefilled Edit Mode
          </button>
        </div>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-(--color-surface) p-6 sm:p-8 rounded-3xl border border-(--color-border)/80 shadow-xs space-y-6"
      >
        {/* Question Title */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              QUESTION / ARCHITECTURAL PROBLEM *
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">Max 148 chars</span>
          </div>
          <input
            type="text"
            required
            placeholder="e.g. Optimistic UI Updates and Idempotency Keys"
            {...register('title')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl px-4 py-3 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary) transition-all"
          />
        </div>

        {/* Topic Track Selector Grid */}
        <div className="space-y-1.5">
          <label className="block text-xs font-mono font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
            TOPIC TRACK *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {topicTracks.map((track) => {
              const isSelected = selectedTrack === track;
              return (
                <button
                  type="button"
                  key={track}
                  onClick={() => setSelectedTrack(track)}
                  className={`p-3 rounded-xl border text-xs font-sans text-left flex items-center justify-between transition-all cursor-pointer ${isSelected
                    ? 'bg-(--color-surface-muted) border-(--color-border) font-bold text-(--color-neutral) shadow-xs'
                    : 'bg-(--color-bg) border-(--color-border)/60 text-(--color-text-secondary) hover:text-(--color-neutral)'
                    }`}
                >
                  <span>{track}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-700' : 'bg-gray-300'
                      }`}
                  />
                </button>
              );
            })}
          </div>
          <p className="text-[11px] font-mono text-(--color-text-secondary) pt-1">
            Determines dynamic cross-referencing and drill categorization across weekly mocks.
          </p>
        </div>

        {/* Deep Architectural Explanation */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              DEEP ARCHITECTURAL EXPLANATION *
            </label>
            <span className="text-(--color-text-secondary) text-[10px] bg-(--color-surface-muted) px-2 py-0.5 rounded border border-(--color-border)/60">
              {"<> Markdown & code snippets supported"}
            </span>
          </div>
          <textarea
            rows={5}
            placeholder="Detail the underlying mechanism, runtime trade-offs, network failure modes, and client-server synchronization contracts..."
            {...register('explanation')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl p-4 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary) transition-all"
          />
        </div>

        {/* Important Points (Key Takeaways) */}
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

        {/* Crisp Interview Response */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <label className="font-bold text-(--color-neutral) uppercase tracking-wider text-[11px]">
              CRISP INTERVIEW RESPONSE (VERBATIM DELIVERY) *
            </label>
            <span className="text-(--color-text-secondary) text-[11px]">Spoken cadence rehearsal</span>
          </div>
          <textarea
            rows={4}
            placeholder="When asked this in a live interview, begin with the mental model: 'In distributed systems, optimistic UI is an assertion of probability...'"
            {...register('verbatimResponse')}
            className="w-full bg-(--color-bg) border border-(--color-border) rounded-xl p-4 text-xs font-sans text-(--color-neutral) focus:outline-none focus:border-(--color-primary) transition-all"
          />
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-(--color-border)/60">
          <button
            type="button"
            onClick={() => navigate('/fullstack')}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono font-bold text-(--color-text-secondary) hover:text-(--color-neutral) cursor-pointer text-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold hover:brightness-95 shadow-xs cursor-pointer text-center"
          >
            Save Full-Stack Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFullStackQuestionPage;