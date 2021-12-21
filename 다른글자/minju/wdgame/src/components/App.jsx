import React, { useEffect, useState } from "react";
import Game from "./Game";
import styled, { keyframes } from "styled-components";
import Restart from "./Restart";
import { Modal } from "./Modal";

function App() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(3);
  const [newAnswer, setNewAnswer] = useState(~~(Math.random() * (x * y)));
  const [time, setTime] = useState(10);

  const [stop, setStop] = useState(true);
  const [level, setLevel] = useState(1);
  const [alert, setAlert] = useState(false);

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
    clearTimeout(startTimer);
    setAlert(true);
  };

  const clickNext = () => {
    setX((prev) => prev + 1);
    setY((prev) => prev + 1);
    setLevel((prev) => prev + 1);
    setAlert(false);
    setTime(10);
    setNewAnswer(~~(Math.random() * (x * y)));
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
    setTime(10);
    setNewAnswer(~~(Math.random() * 9));
  };

  return (
    <Main>
      <h1>LV. {level}</h1>
      <Timer>Time : {time}</Timer>
      <Game
        x={x}
        y={y}
        newAnswer={newAnswer}
        clickAnswer={clickAnswer}
        clickWrong={clickWrong}
        level={level}
      />
      <Stop display={stop ? "none" : "flex"}>
        <Popupmsg>LV. {level}</Popupmsg>
        <Popupmsg>game over! 🤷</Popupmsg>
        <Restart onClick={restart}>restart</Restart>
      </Stop>
      {alert && <Modal onClick={clickNext}></Modal>}
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
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #6a66f2;
  color: #000000;
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
  display: block;
  margin: 20px;
  width: 200px;
  height: 60px;
  background-color: #c3f25c;
  text-align: center;
  line-height: 65px;
  border-radius: 30px;
  font-size: 26px;
  font-weight: 700;
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
