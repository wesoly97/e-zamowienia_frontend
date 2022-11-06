import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

export const Stats = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.WHITE};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    width: 50%;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 33.33%;
  }
`;

export const Description = styled.span`
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
`;

export const Count = styled.span`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 40px;
    line-height: 64px;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  color: ${({ theme }) => theme.colors.WHITE};
`;
