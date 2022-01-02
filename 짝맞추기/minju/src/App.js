import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./reset";
import theme from "./theme";
import Card from "./Card";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Card></Card>
      </ThemeProvider>
    </>
  );
}

export default App;
