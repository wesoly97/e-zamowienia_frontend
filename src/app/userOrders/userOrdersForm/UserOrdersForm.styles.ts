import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 40px 0;
  gap: 40px;
  flex-wrap: wrap;

  & .MuiAutocomplete-root {
    flex: 1 0 100%;
  }

  & > .MuiFormControl-root {
    flex: 1 0 100%;
  }

  & .MuiTextField-root {
    max-width: none;
  }

  ${({ theme }) => theme.breakpoints.up(600)} {
    & .MuiAutocomplete-root {
      flex: 1 0 0%;
    }

    & > .MuiFormControl-root {
      flex: 1 0 100%;
    }
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    & .MuiAutocomplete-root {
      flex: 1 0 0%;
    }

    & > .MuiFormControl-root {
      flex: 1 0 0%;
    }
  }
`;
