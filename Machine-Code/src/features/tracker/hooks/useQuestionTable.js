import { useMemo, useState } from 'react';
import { useQuestions } from './useQuestions';

const categoryNames = {
  dsa: 'DSA',
  git: 'Git & VCS',
  fullstack: 'Full-Stack',
  machine: 'Machine Coding',
};

const masteryDetails = {
  Pending: { status: 'Pending', statusVariant: 'danger' },
  'In Flight': { status: 'In Progress', statusVariant: 'warning' },
  Done: { status: 'Completed', statusVariant: 'success' },
};

export const useQuestionTable = () => {
  const { questions, deleteQuestion } = useQuestions();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const rows = useMemo(() => questions.filter((question) => {
    const searchText = search.trim().toLowerCase();
    const matchesSearch = !searchText || [
      question.title,
      question.referenceUrl,
      question.notes,
    ].some((value) => value?.toLowerCase().includes(searchText));
    const matchesCategory = !category || question.category === category;
    const matchesStatus = !status || question.mastery === status;
    const matchesDifficulty = !difficulty || question.complexity === difficulty;

    return matchesSearch && matchesCategory && matchesStatus && matchesDifficulty;
  }).map((question) => {
    const mastery = masteryDetails[question.mastery] || masteryDetails.Pending;

    return {
      id: question.id,
      title: question.title,
      tags: [
        question.referenceUrl || 'No reference link',
        question.notes || 'No notes added',
      ],
      category: categoryNames[question.category] || question.category,
      difficulty: question.complexity,
      ...mastery,
      lastReviewed: new Date(question.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
    };
  }), [questions, search, category, status, difficulty]);

  const resetFilters = () => {
    setSearch('');
    setCategory('');
    setStatus('');
    setDifficulty('');
  };

  return {
    rows,
    hasQuestions: questions.length > 0,
    search,
    setSearch,
    category,
    setCategory,
    status,
    setStatus,
    difficulty,
    setDifficulty,
    resetFilters,
    deleteQuestion,
  };
};

export default useQuestionTable;
