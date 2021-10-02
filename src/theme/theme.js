import { createMuiTheme, responsiveFontSizes } from "@mui/styles";

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#0095f6"
      },
      secondary: {
        main: "#FFFFFF",
        surface: "#F8F9FA",
        400: "#DEDEDE"
      }
    }
  })
);