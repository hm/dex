import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    clickable: "#165755 !important;",
    backgroundColor: '#165755 !important;',
    text: 'white',
  },
  fonts: ["sans-serif", "Roboto"],
};

export const DarkTheme = ({ children }: { children: ReactElement}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

