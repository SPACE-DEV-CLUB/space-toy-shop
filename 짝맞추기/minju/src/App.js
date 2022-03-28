import React from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "./reset"
import theme from "./theme"
// import Card from "./Card";
import { CardContainer } from "./CardContainer"

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <CardContainer></CardContainer>
      </ThemeProvider>
    </>
  )
}

export default App
