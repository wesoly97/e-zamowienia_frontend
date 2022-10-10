import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LoginFormData } from '../../loginForm/LoginForm.types';

import { useLogin } from './useLogin';

export const useLoginEffect = (form: UseFormReturn<LoginFormData>) => {
  const navigate = useNavigate();

  return useLogin({
    onSuccess: (data) => {
      // navigate(0);
    },
    onError: (error) => {
      //errory form uzywany
    },
  });
};
