"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@/app/theme";
import Header from "@/components/Header";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  );
}
