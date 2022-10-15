import { TextField } from '@mui/material';
import styled, { css } from 'styled-components';

export const StyledInput = styled(TextField)`
  & .MuiFormHelperText-root {
    min-height: 20px;
  }

  .Mui-focused:not(.Mui-error) {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
    border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};

    & .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
    }
  }

  & label {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
  }

  div {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};

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
        }

        &:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline {
          border-width: 2px;
          border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
        }
      }

      & fieldset {
        border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
      }
    }

    & input:-webkit-autofill,
    & input:-webkit-autofill:focus {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
      transition: background-color 60000000000s 0s;
    }
  }
`;
