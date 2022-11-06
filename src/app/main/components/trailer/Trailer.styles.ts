import styled from 'styled-components';

import { ReactComponent as SurfIcon } from '@/assets/icons/main/surf.svg';
import WaveIcon from '@/assets/icons/main/wave.svg';

export const Container = styled.section`
  display: flex;
  background: url(${WaveIcon}) left bottom no-repeat, ${({ theme }) => theme.colors.WHITE};
  background-size: 100%;
  min-height: 200px;
`;

export const HeaderBox = styled.div`
  flex: 1 0 50%;
`;

export const IconBox = styled.div`
  display: none;
  flex: 1 0 50%;

  ${({ theme }) => theme.breakpoints.up(600)} {
    display: block;
  }
`;

export const Heading = styled.h2`
  ${({ theme }) => theme.fontType.h4};

  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.up('md')} {
    ${({ theme }) => theme.fontType.h3};

    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    ${({ theme }) => theme.fontType.h2};
  }

  ${({ theme }) => theme.breakpoints.up(600)} {
    padding-right: 40px;
    text-align: left;
  }
`;

export const StyledSurfIcon = styled(SurfIcon)`
  width: 70%;
  max-width: 580px;
  height: auto;
`;
