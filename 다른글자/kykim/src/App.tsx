import React, { useState } from 'react';
import Board from './Board';
import Timer from './Timer';

const App = () => {
  const [stage, setStage] = useState(1);

  const onClcikCorrentAnswer = () => {
    setStage(prev => prev + 1);
  };

  const onClickWrongAnswer = () => {
    setStage(1);
  };
  return (
    <>
      <h1>다른 글자 찾기</h1>
      <div>
        <h3>{stage} 단계</h3>
        <Timer />
      </div>
      <Board stage={stage} onCorrect={onClcikCorrentAnswer} onIncorrect={onClickWrongAnswer} />
    </>
  );
};

export default App;
