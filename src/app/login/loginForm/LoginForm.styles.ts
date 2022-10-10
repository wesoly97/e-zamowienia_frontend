import styled from 'styled-components';

import { FormInput } from '@/ui/formInput/FormInput';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 32px;
`;

export const StyledInput = styled(FormInput)`
  width: 100%;
`;
