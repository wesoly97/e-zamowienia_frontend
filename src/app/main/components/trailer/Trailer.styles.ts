import styled from 'styled-components';

import { ReactComponent as SurfIcon } from '@/assets/icons/main/surf.svg';
import WaveIcon from '@/assets/icons/main/wave.svg';

export const Container = styled.section`
  position: relative;
  background: url(${WaveIcon}) left bottom no-repeat, ${({ theme }) => theme.colors.WHITE};
  background-size: cover;
`;

export const Heading = styled.h2`
  position: relative;
  top: 120px;
  left: 50%;
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};

  ${({ theme }) => theme.fontType.h2};
`;

export const StyledSurfIcon = styled(SurfIcon)`
  position: relative;
  top: 0;
  left: 50px;
  width: 500px;
  height: 500px;
`;
