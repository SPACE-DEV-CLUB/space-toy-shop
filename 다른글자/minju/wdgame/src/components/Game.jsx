import React from "react";
import Card from "./Card";

import styled from "styled-components";

function Game({ x, y, newAnswer, clickAnswer, clickWrong, level }) {
  const makeGame = (x, y) => {
    let gameArr = Array(x * y).fill("멵");
    gameArr[newAnswer] = "먽";
    return gameArr;
  };

  return (
    <Grid x={x} y={y}>
      {makeGame(x, y).map((e, idx) => (
        <Card
          onClick={idx === newAnswer ? clickAnswer : clickWrong}
          key={idx}
          level={level}
        >
          {e}
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.article`
  display: grid;
  min-width: 70vw;
  min-height: 50vh;
  grid-template-columns: repeat(${(props) => props.x}, 1fr);
  grid-template-rows: repeat(${(props) => props.y}, 1fr);
  gap: 1px;
  border-radius: 10px;
  overflow: hidden;
`;
export default Game;
