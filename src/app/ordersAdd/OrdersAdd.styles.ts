import styled from 'styled-components';

import BackgroundPicture from '@/assets/icons/ordersAdd/background.png';

export const Container = styled.div`
  background: url(${BackgroundPicture}) center/cover no-repeat ${({ theme }) => theme.colors.WHITE};
`;

export const Heading = styled.h1`
  ${({ theme }) => theme.fontType.h4};

  color: ${({ theme }) => theme.colors.BLACK};
  text-align: center;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.WHITE};
  padding: 40px 48px;
`;
