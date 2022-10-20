import { UseFormReturn } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';

import { LoginFormData } from '../../loginForm/LoginForm.types';

import { useLogin } from './useLogin';

import { getSessionQueryKey } from '@/api/actions/session/session';
import { setFieldsError } from '@/utils/form/setFieldsError/setFieldsError';

export const useLoginEffect = (form: UseFormReturn<LoginFormData>) => {
  const queryClient = useQueryClient();

  return useLogin({
    onSuccess: () => {
      queryClient.invalidateQueries([getSessionQueryKey]);
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
