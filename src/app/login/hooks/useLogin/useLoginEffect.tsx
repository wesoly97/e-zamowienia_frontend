import { UseFormReturn } from 'react-hook-form';

import { LoginFormData } from '../../loginForm/LoginForm.types';

import { useLogin } from './useLogin';

import { AppRoute } from '@/routing/AppRoutes.types';

export const useLoginEffect = (form: UseFormReturn<LoginFormData>) => {
  return useLogin({
    onSuccess: (data) => {
      window.location.href = AppRoute.Main;
    },
    onError: (error) => {
      //errory form uzywany
    },
  });
};
