import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ children }: ButtonProps) => (
  <>
    <StyledButton action={() => console.log('asd')}>{children}</StyledButton>
  </>
);
