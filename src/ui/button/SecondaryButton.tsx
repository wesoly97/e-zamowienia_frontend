import { StyledSecondaryButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const SecondaryButton = ({ children, disabled, endIcon, startIcon, handleClick }: ButtonProps) => (
  <StyledSecondaryButton
    onClick={handleClick}
    disabled={disabled}
    disableFocusRipple
    startIcon={startIcon}
    endIcon={endIcon}
  >
    {children}
  </StyledSecondaryButton>
);
