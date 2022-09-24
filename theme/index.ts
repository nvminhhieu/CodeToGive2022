import { createTheme } from "@mui/material/styles"

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
    info: {
      main: "#686868",
    },
  },
})
