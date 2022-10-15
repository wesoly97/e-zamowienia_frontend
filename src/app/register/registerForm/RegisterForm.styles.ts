import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 200px;
  align-items: center;

  & .MuiFormControl-root {
    width: 100%;
    max-width: 400px;
  }
`;
