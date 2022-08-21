interface BreakpointValues {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
interface BreakpointMaxValueOptions {
  max: BreakpointValues;
}
interface BreakpointMinValueOptions {
  min: BreakpointValues;
}
interface ShapeOptions {
  small: string;
  medium: string;
  large: string;
}
interface ShadeOptions {
  125: string;
  100: string;
  75: string;
  50: string;
  25: string;
}
interface ColorOptions {
  DARK_BLUE: ShadeOptions;
  LIGHT_BLUE: ShadeOptions;
  WHITE: string;
  BLACK: string;
  GREY: string;
}
export interface CustomTheme {
  colors: ColorOptions;
  borderRadius: ShapeOptions;
  mediaQuery: BreakpointMinValueOptions & BreakpointMaxValueOptions;
}
