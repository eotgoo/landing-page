"use client";

import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fbbf24",
    },
    background: {
      default: "#3b0c05",
      paper: "rgba(255,255,255,0.06)",
    },
  },
  typography: {
    fontFamily: ["system-ui", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 16,
  },
});
