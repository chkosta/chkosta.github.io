import React from "react";
import ThemeProvider from "../ThemeProvider";
import Header from "../../components/layouts/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";

export default function AppeProvider() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}
