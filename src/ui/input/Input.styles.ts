import { TextField } from '@mui/material';
import styled, { css } from 'styled-components';

export const StyledInput = styled(TextField)`
  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
      border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
    }

    &.Mui-error {
      color: ${({ theme }) => theme.palette.error.main};
    }

    & .MuiFormLabel-asterisk {
      color: ${({ theme }) => theme.palette.error.main};
    }
  }

  & .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
      border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
    }

    & .MuiInputBase-input:-webkit-autofill,
    & .MuiInputBase-input:-webkit-autofill:focus {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
      transition: background-color 60000000000s 0s;
    }

    &.Mui-error {
      color: ${({ theme }) => theme.palette.error.main};
    }

    &:not(.Mui-error) {
      ${({ variant, theme }) =>
        variant === 'filled' &&
        css`
          background-color: ${theme.colors.LIGHT_BLUE[0]};

          &:hover {
            background-color: ${theme.colors.DARK_BLUE[0]};
          }
        `}

      &:before {
        border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
      }

      &:after {
        border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
      }

      &:hover {
        &:not(.Mui-disabled) {
          &:before {
            border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[125]};
          }

          & .MuiOutlinedInput-notchedOutline {
            border-width: 2px;
            border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
          }
        }
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
      }
    }
  }

  & .MuiFormHelperText-root {
    min-height: 20px;
  }
`;
