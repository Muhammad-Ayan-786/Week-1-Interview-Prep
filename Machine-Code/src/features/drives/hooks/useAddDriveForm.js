import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDrives } from './useDrives';

export const useAddDriveForm = () => {
  const navigate = useNavigate();
  const { addDrive, nextWeek, isLoaded } = useDrives();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      resourceUri: '',
      rehearsalFocus: '',
    },
  });

  const saveDrive = (data) => {
    try {
      addDrive(data);
      toast.success('Interview drive saved.');
      navigate('/drives');
    } catch (error) {
      console.error('Could not save interview drive:', error);
      toast.error('Could not save the interview drive. Please try again.');
    }
  };

  return {
    register,
    submitDrive: handleSubmit(saveDrive),
    assignedWeek: nextWeek,
    isLoaded,
    cancel: () => navigate('/drives'),
  };
};

export default useAddDriveForm;
