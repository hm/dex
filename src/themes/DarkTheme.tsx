import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    clickable: "#165755 !important;",
    componentBackgroundColor: '#065b57 !important',
    backgroundColor: '#131722 !important;',
    text: 'white !important;',
    inverseText: 'black !important;',
  },
  fonts: ["sans-serif", "Roboto"],
};

export const DarkTheme = ({ children }: { children: ReactElement}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

