import 'styled-components';

interface Colors {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      common: {
        black: string;
        white: string;
      };
      primary: Colors;
      secondary: Colors;
    };
    font: {
      family: Array;
      size: {
        small: string;
        medium: string;
        large: string;
      };
    };
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
