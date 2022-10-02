import { FlattenSimpleInterpolation } from 'styled-components';

interface ShapeOptions {
  small: string;
  medium: string;
  large: string;
}
interface ShadeOptions {
  125?: string;
  100?: string;
  75?: string;
  50?: string;
  25?: string;
  0?: string;
}
interface ColorOptions {
  DARK_BLUE: ShadeOptions;
  LIGHT_BLUE: ShadeOptions;
  WHITE: string;
  BLACK: string;
  GREY: string;
}

interface FontTypeOptions {
  h1: FlattenSimpleInterpolation;
  h2: FlattenSimpleInterpolation;
  h3: FlattenSimpleInterpolation;
  h4: FlattenSimpleInterpolation;
  body1: FlattenSimpleInterpolation;
  body2: FlattenSimpleInterpolation;
  subtitle1: FlattenSimpleInterpolation;
  subtitle2: FlattenSimpleInterpolation;
}
export interface CustomTheme {
  colors: ColorOptions;
  borderRadius: ShapeOptions;
  fontType: FontTypeOptions;
}
