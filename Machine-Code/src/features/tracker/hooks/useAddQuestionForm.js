import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuestions } from './useQuestions';

export const useAddQuestionForm = () => {
  const navigate = useNavigate();
  const { addQuestion } = useQuestions();
  const [selectedCategory, setSelectedCategory] = useState('dsa');
  const [complexity, setComplexity] = useState('Medium');
  const [mastery, setMastery] = useState('Pending');
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      referenceUrl: '',
      notes: '',
    },
  });

  const saveQuestion = (data) => {
    try {
      addQuestion({
        ...data,
        category: selectedCategory,
        complexity,
        mastery,
      });
      toast.success('Question saved.');
      navigate('/questions');
    } catch (error) {
      console.error('Could not save question:', error);
      toast.error('Could not save the question. Please try again.');
    }
  };

  return {
    register,
    submitQuestion: handleSubmit(saveQuestion),
    selectedCategory,
    setSelectedCategory,
    complexity,
    setComplexity,
    mastery,
    setMastery,
    cancel: () => navigate(-1),
  };
};

export default useAddQuestionForm;
