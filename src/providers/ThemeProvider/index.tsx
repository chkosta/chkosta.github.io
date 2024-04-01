import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

interface IThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: IThemeProviderProps) {
  const customizedTheme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      body1: {
        color: "#FFFFFF",
      },
    },
    palette: {
      primary: {
        main: "#212121",
        light: "#2F2F2F",
        dark: "#171717",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#212121",
      },
    },
  });

  return (
    <MuiThemeProvider theme={customizedTheme}>{children}</MuiThemeProvider>
  );
}
