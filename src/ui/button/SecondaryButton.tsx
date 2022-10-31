import { StyledSecondaryButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const SecondaryButton = ({
  children,
  disabled,
  endIcon,
  startIcon,
  handleClick,
  type,
  classes,
  className,
}: ButtonProps) => (
  <StyledSecondaryButton
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
  </StyledSecondaryButton>
);
