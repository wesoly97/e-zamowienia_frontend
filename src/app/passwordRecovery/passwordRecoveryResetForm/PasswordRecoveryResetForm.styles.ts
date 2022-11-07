import styled from 'styled-components';

import { FormInput } from '@/ui/formInput/FormInput';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const StyledFormInput = styled(FormInput)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: none;
    width: 400px;
  }
`;
