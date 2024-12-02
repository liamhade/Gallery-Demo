import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  typography: {
    fontSize: 12,
    allVariants: {
      color: "#1A307A",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1A307A",
    },
    secondary: {
      main: "#9B8DFF",
    },
    success: {
      main: "#23b92a",
    },
    text: {
      primary: "#1A307A",
      disabled: "#595959",
    },
  },
});
