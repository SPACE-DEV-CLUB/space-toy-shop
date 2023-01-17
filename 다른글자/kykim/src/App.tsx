import React, { useEffect, useState } from 'react';
import Board from './Board';
import Timer from './Timer';

const App = () => {
  const [stage, setStage] = useState(1);
  const [time, setTime] = useState(100);
  const [progress, setProgress] = useState<'pending' | 'success' | 'fail'>('pending');

  let timer: NodeJS.Timer;

  useEffect(() => {
    timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 100);

    if (time <= 0) {
      onClickWrongAnswer();
    }

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (progress === 'pending') return;
    clearInterval(timer);
    setTimeout(() => {
      setStage(progress === 'fail' ? 1 : stage + 1);
      setProgress('pending');
      setTime(100);
    }, 3000);
  }, [progress]);

  const onClickCorrectAnswer = () => {
    if (progress !== 'pending') return;
    setProgress('success');
  };

  const onClickWrongAnswer = () => {
    if (progress !== 'pending') return;
    alert('GAME OVER.');
    setProgress('fail');
  };

  return (
    <>
      <h1>다른 글자 찾기</h1>
      <h3>{stage} 단계</h3>
      <Timer time={time} />
      <Board stage={stage} onCorrect={onClickCorrectAnswer} onIncorrect={onClickWrongAnswer} />
    </>
  );
};

export default App;
