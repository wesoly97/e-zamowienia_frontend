import Autocomplete from '@mui/material/Autocomplete';
import styled, { css } from 'styled-components';

export const StyledAutocomplete = styled(Autocomplete)`
  ${'.MuiTextField-root'} {
    width: 100%;
  }
`;

export const Option = styled.span<{ $isHighlighted: boolean }>`
  ${({ $isHighlighted }) =>
    $isHighlighted
      ? css`
          font-weight: 700;
        `
      : css`
          font-weight: 400;
        `}
`;
