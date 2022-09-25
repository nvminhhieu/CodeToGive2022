import { createTheme, PaletteColorOptions } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    greyishColor: PaletteColorOptions
  }
  interface PaletteOptions {
    greyishColor: PaletteColorOptions
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    greyishColor: true
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0097F2",
      dark: "#1689d2",
    },
    secondary: {
      main: "#FF9700",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4DC56E",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f54d43",
    },
    greyishColor: {
      main: "#686868",
    },
  },
})
