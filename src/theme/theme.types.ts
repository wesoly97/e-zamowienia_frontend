interface BreakpointValues {
  xs: number | string;
  sm: number | string;
  md: number | string;
  lg: number | string;
  xl: number | string;
}
interface BreakpointMaxValueOptions {
  max: BreakpointValues;
}
interface BreakpointMinValueOptions {
  min: BreakpointValues;
}
interface BreakpointValueOptions {
  values: BreakpointMinValueOptions & BreakpointMaxValueOptions;
  mq: BreakpointMinValueOptions & BreakpointMaxValueOptions;
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
  extraBreakpoints: BreakpointValueOptions;
}
