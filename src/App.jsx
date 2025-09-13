import { createContext, useEffect, useState } from "react";
import Router from "./components/Router";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { theme } from "./styles/theme.jsx";
import "./App.css";
export let DarkMode = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState("light");
  useEffect(() => {
    const userMode = localStorage.getItem("darkMode");
    if (userMode === null) localStorage.setItem("darkMode", "light");
    else setDarkMode(userMode);
  }, []);

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={createTheme(theme(darkMode))}>
        <CssBaseline enableColorScheme />
        <Router />
      </ThemeProvider>
    </DarkMode.Provider>
  );
}
