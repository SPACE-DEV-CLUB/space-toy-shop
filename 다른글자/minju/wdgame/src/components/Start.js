import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import App from "./App";
import "../fonts/font.css";

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
          <StartBtn onClick={gameStart}>START!</StartBtn>
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
  background-color: black;
  color: white;
`;

const Title = styled.h2`
  font-size: 42px;
  font-family: "SANJUGotgam";
`;

const clickMe = keyframes`
  from {
    box-shadow: 0 0 0 0 rgba(0, 172, 193, 0);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(0, 172, 193, 0.5);
  }
  to {
    box-shadow: 0 0 0 0 rgba(0, 172, 193, 0);
  }
`;

const StartBtn = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  background-color: #00acc1;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  cursor: pointer;
  z-index: 110;
  animation: ${clickMe} 1s linear infinite;
`;

export default Start;
