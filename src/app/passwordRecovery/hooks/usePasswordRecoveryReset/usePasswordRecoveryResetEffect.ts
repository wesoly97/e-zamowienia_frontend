import { UseFormReturn } from 'react-hook-form';

import { PasswordRecoveryResetFormData } from '../../passwordRecoveryResetForm/PasswordRecoveryResetForm.types';

import { usePasswordRecoveryReset } from './usePasswordRecoveryReset';

import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';
import { useNavigate } from '@/hooks/useNavigate/useNavigate';
import { AppLinks } from '@/routing/AppRoutes.types';

export const usePasswordRecoveryResetEffect = (form: UseFormReturn<PasswordRecoveryResetFormData>) => {
  const navigate = useNavigate();

  return usePasswordRecoveryReset({
    onSuccess: () => {
      localStorage.removeItem('tokenExpirationDate');
      navigate(AppLinks.Login);
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
