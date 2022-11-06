import styled from 'styled-components';

import { ReactComponent as FormIcon } from '@/assets/icons/main/form.svg';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.WHITE};
  padding: 100px 0;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 200px 0;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  min-width: 50%;
  flex-direction: column;
  align-items: flex-end;
`;

export const Heading = styled.h2`
  ${({ theme }) => theme.fontType.h4};

  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  font-weight: 700;
  text-transform: uppercase;
  max-width: 800px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up('md')} {
    ${({ theme }) => theme.fontType.h3};

    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    ${({ theme }) => theme.fontType.h2};

    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.up(600)} {
    padding-left: 40px;
    text-align: left;
  }
`;

export const IconBox = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.up(600)} {
    display: block;
  }
`;

export const StyledSurfIcon = styled(FormIcon)`
  width: 90%;
  height: auto;
`;
