import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDsaEntries } from './useDsaEntries';

const MAX_IMAGE_SIZE = 500 * 1024;
const createEmptyQuestion = () => ({
  leetcodeId: '',
  title: '',
  difficulty: 'Medium',
  leetcodeLink: '',
  categories: '',
  image: '',
  imageName: '',
  explanation: '',
  panicAnchor: '',
  timeComplexity: '',
  spaceComplexity: '',
});

export const useAddDsaEntryForm = () => {
  const navigate = useNavigate();
  const { addEntries, availableWeeks, isLoaded } = useDsaEntries();
  const [assignedWeek, setAssignedWeek] = useState('W1');
  const [imageErrors, setImageErrors] = useState({});
  const { register, handleSubmit, setValue, control, setError, clearErrors, formState: { errors } } = useForm({
    defaultValues: {
      questions: Array.from({ length: 5 }, createEmptyQuestion),
    },
  });
  const questions = useWatch({ control, name: 'questions' });

  const selectImage = (index, file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setImageErrors((current) => ({ ...current, [index]: 'Choose an image file.' }));
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setImageErrors((current) => ({ ...current, [index]: 'Image must be 500 KB or smaller.' }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setValue(`questions.${index}.image`, reader.result, { shouldValidate: true });
      setValue(`questions.${index}.imageName`, file.name);
      clearErrors(`questions.${index}.image`);
      setImageErrors((current) => ({ ...current, [index]: '' }));
    };
    reader.onerror = () => {
      setImageErrors((current) => ({ ...current, [index]: 'Could not read this image. Try another file.' }));
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (index) => {
    setValue(`questions.${index}.image`, '', { shouldValidate: true });
    setValue(`questions.${index}.imageName`, '');
  };

  const saveEntries = (formData) => {
    let missingImage = false;
    formData.questions.forEach((question, index) => {
      if (!question.image) {
        setError(`questions.${index}.image`, {
          type: 'required',
          message: 'Upload an image for this question.',
        });
        missingImage = true;
      }
    });
    if (missingImage) return;

    const newEntries = formData.questions.map((question) => ({
      lc: question.leetcodeId.trim(),
      title: question.title.trim(),
      difficulty: question.difficulty,
      categories: question.categories.split(',').map((category) => category.trim()).filter(Boolean),
      pattern: question.categories.split(',').map((category) => category.trim()).filter(Boolean)[0] || '',
      image: question.image,
      imageName: question.imageName,
      description: question.explanation.trim(),
      explanation: question.explanation.trim(),
      panicAnchor: question.panicAnchor.trim(),
      timeComp: question.timeComplexity.trim(),
      spaceComp: question.spaceComplexity.trim(),
      assignedWeek,
      leetcodeLink: question.leetcodeLink.trim(),
    }));

    try {
      addEntries(newEntries);
      toast.success(`Saved 5 DSA questions to ${assignedWeek}.`);
      navigate('/dsa');
    } catch (error) {
      console.error('Could not save DSA questions:', error);
      toast.error('Could not save DSA questions. Check available browser storage and try again.');
    }
  };

  const submitEntries = handleSubmit(saveEntries);
  const questionFields = useMemo(() => Array.from({ length: 5 }, (_, index) => ({
    index,
    fields: {
      leetcodeId: register(`questions.${index}.leetcodeId`, { required: 'Add the LeetCode number.' }),
      title: register(`questions.${index}.title`, { required: 'Add the problem title.' }),
      difficulty: register(`questions.${index}.difficulty`),
      leetcodeLink: register(`questions.${index}.leetcodeLink`),
      categories: register(`questions.${index}.categories`),
      image: register(`questions.${index}.image`),
      explanation: register(`questions.${index}.explanation`, { required: 'Describe the approach.' }),
      panicAnchor: register(`questions.${index}.panicAnchor`),
      timeComplexity: register(`questions.${index}.timeComplexity`),
      spaceComplexity: register(`questions.${index}.spaceComplexity`),
    },
  })), [register]);

  return {
    assignedWeek,
    setAssignedWeek,
    availableWeeks,
    isLoaded,
    questions,
    questionFields,
    errors,
    imageErrors,
    selectImage,
    removeImage,
    submitEntries,
    cancel: () => navigate('/dsa'),
  };
};

export default useAddDsaEntryForm;
