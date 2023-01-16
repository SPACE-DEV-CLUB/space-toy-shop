import React, { useState } from 'react';
import Board from './Board';

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
      <h3>{stage} 단계</h3>
      <Board stage={stage} onCorrect={onClcikCorrentAnswer} onIncorrect={onClickWrongAnswer} />
    </>
  );
};

export default App;
