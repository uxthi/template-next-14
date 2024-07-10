import { createTheme, Theme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// extending the PaletteColor interface to include custom color scales
declare module "@mui/material/styles" {
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
  }

  interface TypeBackground {
    main?: string;
    light?: string;
    blue?: string;
  }
}

// updating Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
  }
}

// extending the Theme to include custom properties
declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      padding: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
      };
      borderSize: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      padding?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
        full?: string;
      };
      borderSize?: {
        sm?: string;
        md?: string;
        lg?: string;
      };
    };
  }
}

const theme: Theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:hover > .MuiOutlinedInput-notchedOutline": {
            borderColor: `#0DB5B5 !important`,
          },
        },
        sizeSmall: {
          fontSize: "0.875rem",
          "& > input": {
            padding: "8px 14px",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "white",
          backgroundColor: "#0DB5B5",
          fontSize: "0.65rem",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 2px 4px 0px #00000029",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0DB5B5",
      light: "#EDF8F8",
      50: "#DDF2F3",
      100: "#AADFE0",
      200: "#6DCACB",
      400: "#00A5A4",
      500: "#009491",
      600: "#008883",
      700: "#007872",
      800: "#006862",
      900: "#004C44",
    },
    background: {
      default: "#F1F2F5",
      paper: "#FFFFFF",
      main: "#F1F2F5",
      light: "#F8F9FC",
      blue: "#2261AA",
    },
    grey: {
      200: "#ABB0BC",
      50: "#EBECEF",
      100: "#CCD0D7",
      300: "#8A91A2",
      400: "#737B8E",
      500: "#5B657B",
      600: "#4E586B",
      700: "#3E4655",
      800: "#2F3440",
      900: "#1C212A",
    },
    success: {
      main: "#7CE3B7",
    },
    warning: {
      main: "#F8BD64",
    },
    error: {
      main: "#F86464",
    },
    info: {
      main: "#3891DB",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    divider: "#DCE1ED",
    text: {
      primary: "#576078",
      secondary: "#263357",
      disabled: "#ABB0BC",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSize: 16,
    h1: {
      fontSize: "3.5rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
      color: "#263357",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1.125rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    body3: {
      fontSize: "0.75rem",
    },
    body4: {
      fontSize: "0.65rem",
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
  custom: {
    padding: {
      xs: "1px",
      sm: "2px",
      md: "4px",
      lg: "8px",
      xl: "12px",
      full: "100%",
    },
    borderSize: {
      sm: "0.5px",
      md: "1px",
      lg: "2px",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
