import { UseFormReturn } from 'react-hook-form';

import { LoginFormData } from '../../loginForm/LoginForm.types';

import { useLogin } from './useLogin';

export const useLoginEffect = (form: UseFormReturn<LoginFormData>) => {
  return useLogin({
    onSuccess: (data) => {
      window.location.href = '/';
    },
    onError: (error) => {
      //errory
    },
  });
};
