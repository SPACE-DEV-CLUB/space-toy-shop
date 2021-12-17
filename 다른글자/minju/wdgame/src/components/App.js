import React, { useEffect, useState } from "react";
import Game from "./Game";
import styled, { keyframes } from "styled-components";

function App() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(3);
  const [newAnswer, setNewAnswer] = useState(~~(Math.random() * (x * y)));
  const [time, setTime] = useState(10);

  const [stop, setStop] = useState(true);
  const [level, setLevel] = useState(1);

  let startTimer;

  const timer = () =>
    (startTimer = setTimeout(() => {
      setTime((prev) => (prev - 0.01).toFixed(2));
    }, 10));

  useEffect(() => {
    timer();

    if (time <= 0) {
      clickWrong();
    }

    return () => clearTimeout(startTimer);
  }, [time]);

  const clickAnswer = () => {
    alert("정답입니다!");
    setX((prev) => prev + 1);
    setY((prev) => prev + 1);
    setLevel((prev) => prev + 1);
    reset();
  };

  const clickWrong = () => {
    clearTimeout(startTimer);
    setStop(false);
  };

  const restart = () => {
    setX(3);
    setY(3);
    setLevel(1);
    setStop(true);
    reset();
  };

  const reset = () => {
    setTime(10);
    setNewAnswer(~~(Math.random() * 9));
  };

  return (
    <Main>
      <h1>다른 른자 찾기 🔍</h1>
      <span>LV. {level}</span>
      <Timer>Time : {time}</Timer>
      <Game
        x={x}
        y={y}
        newAnswer={newAnswer}
        clickAnswer={clickAnswer}
        clickWrong={clickWrong}
      />
      <Stop display={stop ? "none" : "flex"}>
        <Popupmsg>LV. {level}</Popupmsg>
        <Popupmsg>game over! 🤷</Popupmsg>
        <Restart onClick={restart}>restart</Restart>
      </Stop>
    </Main>
  );
}
export default App;
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

const Stop = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  z-index: 100;
`;

const Timer = styled.span`
  display: inline-block;
  margin: 20px;
  width: 100px;
  height: 40px;
  background-color: #00acc1;
  text-align: center;
  line-height: 40px;
  border-radius: 30px;
`;

const answer = keyframes`
  from {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  to {
    transform: rotate(5deg);
  }
`;

const Popupmsg = styled.span`
  font-family: "Lobster", cursive;
  color: #4d2c91;
  font-size: 100px;
  animation: ${answer} 2s linear infinite;
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

const Restart = styled.button`
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
