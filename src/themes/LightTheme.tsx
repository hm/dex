import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    clickable: "#079e99 !important;",
    backgroundColor: '#fff !important;',
    text: 'black',
  },
  fonts: ["sans-serif", "Roboto"],
};

export const LightTheme = ({ children }: { children: ReactElement}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
