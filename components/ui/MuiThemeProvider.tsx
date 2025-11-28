"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "@/lib/mui-theme";
import { ReactNode } from "react";

export const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
