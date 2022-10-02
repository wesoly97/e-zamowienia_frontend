import styled from 'styled-components';

import CloudIcon from '@/assets/icons/main/cloud.svg';
import ApplicationsIcon from '@/assets/icons/main/applications.svg';

export const Container = styled.section`
  background: url(${CloudIcon}) left 80px no-repeat, url(${ApplicationsIcon}) right 100px no-repeat,
    ${({ theme }) => theme.colors.WHITE};
  background-size: 350px, 750px;
  width: 100%;
  min-height: 723px;
`;

export const Heading = styled.h1`
  position: relative;
  top: 120px;
  left: 520px;
  width: 650px;
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};

  ${({ theme }) => theme.fontType.h1};
`;
