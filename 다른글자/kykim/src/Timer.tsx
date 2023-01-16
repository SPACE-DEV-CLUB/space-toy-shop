import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(100);

  let timer: NodeJS.Timer;

  useEffect(() => {
    timer = setInterval(() => {
      setTime(prev => prev - 1);
    }, 100);

    if (time === 0) clearInterval(timer);

    return () => clearInterval(timer);
  }, [time]);

  const formatTimeWithDot = (time: number) => {
    return Math.floor(time / 10) + '.' + (time % 10);
  };
  return <h4>{`남은 시간 : ${formatTimeWithDot(time)}`}</h4>;
};

export default Timer;
