import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    clickable: "#079e99 !important;",
    componentBackgroundColor: '#ecf0f1 !important',
    backgroundColor: 'white !important;',
    text: 'black !important;',
    inverseText: 'white !important;',
  },
  fonts: ["sans-serif", "Roboto"],
};

export const LightTheme = ({ children }: { children: ReactElement}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
