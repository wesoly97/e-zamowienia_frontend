import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  color: ${({ theme }) => theme.colors.WHITE};
`;
