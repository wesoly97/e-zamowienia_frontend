import styled from 'styled-components';

import { FormInput } from '@/ui/input/formInput/FormInput';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 32px;
  padding: 0 200px;
`;

export const StyledInput = styled(FormInput)`
  width: 100%;
`;
