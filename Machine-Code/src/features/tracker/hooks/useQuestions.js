import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { questionAdded, questionDeleted, questionsLoaded } from '../states/questionsSlice';

const STORAGE_KEY = 'tracker-questions';

const readSavedQuestions = () => {
  const storedQuestions = window.localStorage.getItem(STORAGE_KEY);
  if (!storedQuestions) return [];

  const questions = JSON.parse(storedQuestions);
  if (!Array.isArray(questions)) {
    throw new Error('Saved questions are not in the expected format.');
  }

  return questions;
};

export const useQuestions = () => {
  const dispatch = useDispatch();
  const { entries: questions, isLoaded } = useSelector((state) => state.questions);

  useEffect(() => {
    try {
      dispatch(questionsLoaded(readSavedQuestions()));
    } catch (error) {
      console.error('Could not load saved questions:', error);
      toast.error('Could not load saved questions from this browser.');
    }
  }, [dispatch]);

  const addQuestion = useCallback((question) => {
    const savedQuestion = {
      ...question,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const questions = [...readSavedQuestions(), savedQuestion];

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
    dispatch(questionAdded(savedQuestion));

    return savedQuestion;
  }, [dispatch]);

  const deleteQuestion = useCallback((questionId) => {
    try {
      const remainingQuestions = readSavedQuestions().filter(
        (question) => question.id !== questionId,
      );

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remainingQuestions));
      dispatch(questionDeleted(questionId));
      toast.success('Question deleted.');
    } catch (error) {
      console.error('Could not delete question:', error);
      toast.error('Could not delete the question. Please try again.');
    }
  }, [dispatch]);

  return { questions, isLoaded, addQuestion, deleteQuestion };
};

export default useQuestions;
