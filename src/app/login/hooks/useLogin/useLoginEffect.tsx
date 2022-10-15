import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LoginFormData } from '../../loginForm/LoginForm.types';

import { useLogin } from './useLogin';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useLoginEffect = (form: UseFormReturn<LoginFormData>) => {
  const navigate = useNavigate();

  return useLogin({
    onSuccess: () => {
      navigate(0);
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
        fieldToPick: 'password',
      });
    },
  });
};
