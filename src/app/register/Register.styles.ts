import styled from 'styled-components';

import { ReactComponent as RegisterIcon } from '@/assets/icons/register/register.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const IconWrapper = styled.div`
  display: none;
  flex: 1 0 0%;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    display: flex;
  }
`;

export const StyledRegisterIcon = styled(RegisterIcon)`
  width: 80%;
  height: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex: 1 0 0%;
  background-color: ${({ theme }) => theme.colors.GREY};
`;

export const Heading = styled.h1`
  ${({ theme }) => theme.fontType.h3};

  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  text-align: center;
  font-weight: 700;
`;

export const SubHeading = styled.h2`
  ${({ theme }) => theme.fontType.h4};

  color: ${({ theme }) => theme.colors.BLACK};
  text-align: center;
  font-weight: 700;
`;
