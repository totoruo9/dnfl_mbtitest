// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;

    colors: {
      main: string;
      point: string;
      gray_100: string;
      gray_300: string;
      gray_500: string;
      gray_700: string;
      gray_900: string;
      black: string;
    };
  }
}