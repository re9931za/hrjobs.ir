import { colors } from "@mui/material";
export const theme = (mode = "light") => ({
  direction: "rtl",
  palette: {
    mode,
    primary: { main: mode === "light" ? colors.grey[900] : colors.blue[50] },
    secondary: {
      main: mode === "light" ? colors.purple[500] : colors.purple[200],
    },
    background: {
      default: mode === "light" ? colors.white : colors.grey[800],
      paper: mode === "light" ? colors.blue[50] : colors.grey[900],
    },
    text: {
      primary: mode === "light" ? colors.grey[900] : colors.blue[50],
      secondary: mode === "light" ? colors.red[700] : colors.red[200],
    },
  },
  typography: {
    fontFamily: "Vazirmatn,Tahoma,sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    button: { textTransform: "none" },
  },
  shape: { borderRadius: 5 },
  components: {
    MuiPaper: {
      defaultProps: { elevation: 4 },
      styleOverrides: {
        root: { borderRadius: 10, padding: "1rem" },
      },
    },
    MuiButton: { styleOverrides: { root: { borderRadius: 3 } } },
  },
});
