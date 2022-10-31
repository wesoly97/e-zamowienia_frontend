import { StyledPrimaryButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const PrimaryButton = ({
  children,
  disabled,
  endIcon,
  startIcon,
  handleClick,
  type,
  classes,
  className,
}: ButtonProps) => (
  <StyledPrimaryButton
    onClick={handleClick}
    disabled={disabled}
    disableFocusRipple
    startIcon={startIcon}
    endIcon={endIcon}
    type={type}
    classes={classes}
    className={className}
  >
    {children}
  </StyledPrimaryButton>
);
