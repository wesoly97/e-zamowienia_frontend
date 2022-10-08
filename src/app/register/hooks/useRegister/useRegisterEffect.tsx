import { UseFormReturn } from 'react-hook-form';

import { RegisterFormData } from '../../registerForm/RegisterForm.types';

import { useRegister } from './useRegister';

import { AppRoute } from '@/routing/AppRoutes.types';

export const useRegisterEffect = (form: UseFormReturn<RegisterFormData>) => {
  return useRegister({
    onSuccess: (data) => {
      window.location.href = AppRoute.Main;
    },
    onError: (error) => {
      //errory form uzywany
    },
  });
};
