import { UseFormReturn } from 'react-hook-form';

import { RegisterFormData } from '../../registerForm/RegisterForm.types';

import { useRegister } from './useRegister';

import { AppRoute } from '@/routing/AppRoutes.types';
import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useRegisterEffect = (form: UseFormReturn<RegisterFormData>) => {
  return useRegister({
    onSuccess: () => {
      window.location.href = AppRoute.Main;
    },
    onError: (error) => {
      setFieldsError({
        form,
        error: error.response?.data,
      });
    },
  });
};
