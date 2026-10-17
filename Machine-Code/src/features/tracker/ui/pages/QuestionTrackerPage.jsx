import React from 'react';
import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';
import QuestionFilterBar from '../components/QuestionFilterBar';
import QuestionTable from '../components/QuestionTable';
import { useQuestionTable } from '../../hooks/useQuestionTable';

export const QuestionTrackerPage = () => {
  const navigate = useNavigate();
  const questionTable = useQuestionTable();

  return (
    <div className="space-y-6">
      {/* Page Title Header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-(--color-text-secondary)">
            ● PRACTICE TRACKER • 184 REPOSITORY ITEMS
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-(--color-neutral)">
            Question Tracker
          </h1>
          <p className="text-xs font-sans text-(--color-text-secondary) max-w-xl">
            Curated problem archive across Data Structures, Git architecture, and Full-Stack system fundamentals.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/questions/add')}
            className="px-4 py-2 bg-(--color-primary) text-(--color-neutral) rounded-xl text-xs font-mono font-bold flex items-center gap-2 hover:opacity-90 shadow-xs"
          >
            <Plus className="w-4 h-4" /> Add Question
          </button>
        </div>
      </div>

      {/* Filter Options */}
      <QuestionFilterBar {...questionTable} />

      {/* Question Table (Page 1 & Page 2 Content) */}
      <QuestionTable
        rows={questionTable.rows}
        hasQuestions={questionTable.hasQuestions}
        onDelete={questionTable.deleteQuestion}
        onReset={questionTable.resetFilters}
      />

    </div>
  );
};

export default QuestionTrackerPage;