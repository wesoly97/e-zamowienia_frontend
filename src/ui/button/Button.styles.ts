import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

export const baseButtonStyles = css`
  min-width: 160px;
  width: 160px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    height: 45px;
  }
`;

export const StyledButton = styled(Button)`
  ${baseButtonStyles}
`;

export const StyledPrimaryButton = styled(Button)`
  ${baseButtonStyles}

  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.DARK_BLUE[100]};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.DARK_BLUE[125]};
  }
`;

export const StyledSecondaryButton = styled(Button)`
  ${baseButtonStyles}

  background-color: ${({ theme }) => theme.colors.WHITE};
  border: ${({ theme }) => theme.colors.DARK_BLUE[100]} solid 2px;
  color: ${({ theme }) => theme.colors.DARK_BLUE[100]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  letter-spacing: 2px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.DARK_BLUE[125]};
    border-color: ${({ theme }) => theme.colors.DARK_BLUE[125]};
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
