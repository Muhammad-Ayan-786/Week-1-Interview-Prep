import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useAuth();
  const { register, handleSubmit } = useForm({
    defaultValues: { email: '', password: '', rememberMe: true },
  });

  const submitLogin = handleSubmit(async (data) => {
    try {
      await loginUser(data);
    } catch (error) {
      console.error('Could not sign in:', error);
      toast.error(error.message || 'Could not sign in. Please try again.');
    }
  });

  return { register, submitLogin, showPassword, setShowPassword };
};

export default useLoginForm;
