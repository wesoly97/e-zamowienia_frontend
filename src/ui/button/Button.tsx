import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ children, disabled, endIcon, startIcon, handleClick, type }: ButtonProps) => (
  <StyledButton
    onClick={handleClick}
    disabled={disabled}
    disableFocusRipple
    startIcon={startIcon}
    endIcon={endIcon}
    type={type}
  >
    {children}
  </StyledButton>
);
