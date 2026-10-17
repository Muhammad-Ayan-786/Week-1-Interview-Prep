import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';

export const useRegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { registerUser } = useAuth();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
  });

  const submitRegistration = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    if (!data.agreeTerms) {
      toast.error('Please accept the cohort terms to continue.');
      return;
    }

    try {
      await registerUser(data);
    } catch (error) {
      console.error('Could not create account:', error);
      toast.error(error.message || 'Could not create your account. Please try again.');
    }
  });

  return {
    register,
    submitRegistration,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  };
};

export default useRegisterForm;
