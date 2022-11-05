import TextField from '@mui/material/TextField';
import styled, { css } from 'styled-components';

export const inputStyles = css`
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

    &.Mui-disabled {
      color: ${({ theme }) => theme.palette.text.disabled};
    }
  }

  & .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};

    &:before {
      border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
    }

    &:after {
      border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
    }

    &:hover {
      &:before {
        border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
      }
    }

    &.MuiFilledInput-root {
      background-color: ${({ theme }) => theme.colors.LIGHT_BLUE[0]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.DARK_BLUE[0]};
      }
    }

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.LIGHT_BLUE[75]};
      border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
    }

    &.Mui-error {
      color: ${({ theme }) => theme.palette.error.main};

      &:after {
        border-color: ${({ theme }) => theme.palette.error.main};
      }

      &.MuiFilledInput-root {
        background-color: ${({ theme }) => theme.palette.action.selected};

        &:hover {
          background-color: ${({ theme }) => theme.palette.action.hover};
        }

        &:after {
          border-color: ${({ theme }) => theme.palette.error.dark};
        }
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.palette.error.main};
      }

      & .MuiInputBase-input:-webkit-autofill,
      & .MuiInputBase-input:-webkit-autofill:focus {
        -webkit-text-fill-color: ${({ theme }) => theme.palette.error.main};
      }
    }

    &.Mui-disabled {
      &.MuiFilledInput-root {
        background-color: ${({ theme }) => theme.colors.LIGHT_BLUE[0]};

        &:hover {
          background-color: ${({ theme }) => theme.colors.LIGHT_BLUE[0]};
        }
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.palette.action.disabled};
      }
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
    }

    & .MuiInputBase-input:-webkit-autofill,
    & .MuiInputBase-input:-webkit-autofill:focus {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.LIGHT_BLUE[100]};
      transition: background-color 60000000000s 0s;
    }
  }

  & .MuiFormHelperText-root {
    min-height: 20px;
  }
`;

export const StyledInput = styled(TextField)`
  ${inputStyles}
`;
