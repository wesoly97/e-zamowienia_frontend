import styled from 'styled-components';

import { Button } from '../button/Button';
import { baseButtonStyles } from '../button/Button.styles';

export const Box = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.WHITE};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const Blob = styled.div`
  background-color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  width: 35%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  transform: translateY(125%);
  transition: transform 700ms ease;

  &:nth-child(1) {
    left: 0%;
  }

  &:nth-child(2) {
    left: 33%;
    transition-delay: 60ms;
  }

  &:nth-child(3) {
    left: 66%;
  }
`;

export const StyledUploadButton = styled(Button)`
  ${baseButtonStyles}

  border: ${({ theme }) => theme.colors.DARK_BLUE[100]} solid ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  background-color: transparent;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
    color: ${({ theme }) => theme.colors.WHITE};

    ${Blob} {
      transform: scale(1.4) translateY(0);
    }
  }
`;
