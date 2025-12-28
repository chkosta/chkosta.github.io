import React from "react";
import ThemeProvider from "../ThemeProvider";
import Header from "../../components/layouts/Header";
import { HashRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

export default function AppeProvider() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Header />
        <CssBaseline />
      </ThemeProvider>
    </HashRouter>
  );
}
