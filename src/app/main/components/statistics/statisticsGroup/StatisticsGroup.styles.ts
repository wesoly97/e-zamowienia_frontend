import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Description = styled.span`
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
`;

export const Count = styled.div`
  font-size: 40px;
  line-height: 64px;
  font-weight: 700;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  color: ${({ theme }) => theme.colors.WHITE};
`;
