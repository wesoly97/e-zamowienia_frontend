import { StyledPrimaryButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const PrimaryButton = ({ children, disabled, endIcon, startIcon, handleClick }: ButtonProps) => (
  <StyledPrimaryButton
    onClick={handleClick}
    disabled={disabled}
    disableFocusRipple
    startIcon={startIcon}
    endIcon={endIcon}
  >
    {children}
  </StyledPrimaryButton>
);
