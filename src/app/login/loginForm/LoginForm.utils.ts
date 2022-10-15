import { LoginFormData } from './LoginForm.types';

import { GetErrorMessages } from '@/utils/form/mapErrorResponseToFormErrors/mapErrorResponseToFormErrors.types';

export const loginFormInitialData: LoginFormData = {
  email: '',
  password: '',
};

// export const getLoginErrorMessages: GetErrorMessages<,LoginFormData> = (errorMessages) => ({
//   login: errorMessages['']
// })
