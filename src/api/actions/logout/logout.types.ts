import { AxiosError } from 'axios';

import { UnauthorizedError } from '@/api/types/types';
import { MutationFn } from '@/hooks/useMutation/useMutation.types';

export type LogoutRequestBody = null;

export type LogoutResponse = null;

export type LogoutError = UnauthorizedError;

export type LogoutMutationFn = MutationFn<LogoutRequestBody, LogoutResponse, AxiosError<LogoutError>>;
