import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      // blues in order
      100: "#0097F2",
      200: "#0068FF",

      // radials
      300: "rgba(6, 69, 159, 1)",
      400: "rgba(6, 69, 159, 1)",
      500: "rgba(0, 151, 242, 1)",
      600: "rgba(218, 135, 175, 1)",
      700: "rgba(139, 117, 96, 1)",
      800: "rgba(59, 195, 154, 1)",
      900: "rgba(77, 196, 110, 1)",
    },

    secondary: {
      // oranges in order
      100: "#FFBE61",
      200: "#FFB446",
      300: "#FF9700",
      400: "#D77F00",
    },

    grey: {
      // greys in order
      100: "#EEEEEE",
      200: "#D9D9D9",
      300: "#BABABA",
      400: "#686868",

      // grey op
      500: "rgba(0, 0, 0, 0.14)",
      600: "rgba(0, 0, 0, 0.2)",
      700: "rgba(0, 0, 0, 0.3)",
      800: "rgba(0, 0, 0, 0.6)",
      900: "rgba(0, 0, 0, 0.7)",
    },

    info: {
      // greens in order
      100: "#08EBA7",
      200: "#4DC56E",
    },

    // reds in order
    error: {
      100: "#EFBEBE",
      200: "#FF5000",
      300: "#FF0000",
    },
  },
})
