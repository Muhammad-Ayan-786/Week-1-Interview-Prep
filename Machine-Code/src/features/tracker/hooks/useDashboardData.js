import { useMemo } from 'react';
import { useQuestions } from './useQuestions';

const statusLabels = {
  Done: 'Completed',
  'In Flight': 'In Progress',
  Pending: 'Pending',
};

const statusVariants = {
  Completed: 'success',
  'In Progress': 'warning',
  Pending: 'danger',
};

const categoryLabels = {
  dsa: 'DSA',
  git: 'Git & VCS',
  fullstack: 'Full-Stack',
  machine: 'Machine Coding',
};

export const useDashboardData = () => {
  const { questions, isLoaded } = useQuestions();

  return useMemo(() => {
    const completedCount = questions.filter((question) => question.mastery === 'Done').length;
    const inProgressCount = questions.filter((question) => question.mastery === 'In Flight').length;
    const pendingCount = questions.filter((question) => question.mastery === 'Pending').length;
    const readiness = questions.length
      ? Math.round((completedCount / questions.length) * 100)
      : 0;
    const recentQuestions = [...questions]
      .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
      .slice(0, 5)
      .map((question) => ({
        id: question.id,
        title: question.title,
        category: categoryLabels[question.category] || question.category,
        status: statusLabels[question.mastery] || question.mastery || 'Pending',
        statusVariant: statusVariants[statusLabels[question.mastery] || question.mastery || 'Pending'],
        createdAt: question.createdAt,
      }));

    return {
      isLoaded,
      total: questions.length,
      completedCount,
      inProgressCount,
      pendingCount,
      readiness,
      recentQuestions,
    };
  }, [questions, isLoaded]);
};

export default useDashboardData;
