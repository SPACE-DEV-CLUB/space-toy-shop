import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import App from "./App";
import "../fonts/font.css";
import Restart from "./Restart";

const GlobalStyle = createGlobalStyle`
font-family : "SANJUGotgam"`;

function Start() {
  const [start, setStart] = useState(false);

  const gameStart = () => {
    setStart(true);
  };

  return (
    <>
      {!start ? (
        <Main>
          <GlobalStyle />
          <Title>다른 글자찾기 게임을 시작해봅시다!</Title>
          <Restart onClick={gameStart}>START!</Restart>
        </Main>
      ) : (
        <App />
      )}
    </>
  );
}

const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #6a66f2;
  color: white;
`;

const Title = styled.h2`
  font-size: 42px;
  font-family: "SANJUGotgam";
`;

export default Start;
