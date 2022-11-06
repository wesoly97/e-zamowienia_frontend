import styled from 'styled-components';

import CloudIcon from '@/assets/icons/main/cloud.svg';
import ApplicationsIcon from '@/assets/icons/main/applications.svg';

export const Container = styled.section`
  display: flex;
  background: url(${CloudIcon}) no-repeat, url(${ApplicationsIcon}) no-repeat, ${({ theme }) => theme.colors.WHITE};
  background-position-x: -250px;
  background-position-y: 130%;
  background-size: 350px, 0;
  width: 100%;
  height: 800px;

  ${({ theme }) => theme.breakpoints.up(600)} {
    background-position-x: -250px, calc(100% + 340px);
    background-position-y: 130%, 250px;
    background-size: 350px, 700px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    background-position-x: -160px, right;
    background-position-y: 280px, 250px;
    background-size: 350px, 600px;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    background-position-x: -80px, right;
    background-position-y: 280px, 150px;
    background-size: 350px, 750px;
  }
`;

export const Box = styled.div`
  flex: 1 0 0%;
  padding: 120px 0 0 40px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 80px 0 0 15%;
  }
`;

export const Heading = styled.h1`
  ${({ theme }) => theme.fontType.h3};

  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  max-width: 400px;
  font-weight: 700;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.up('md')} {
    ${({ theme }) => theme.fontType.h2};

    max-width: 500px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    ${({ theme }) => theme.fontType.h1};

    max-width: 650px;
  }
`;
