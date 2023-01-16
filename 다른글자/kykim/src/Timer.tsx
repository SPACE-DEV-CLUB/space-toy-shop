import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(100);

  let timer: NodeJS.Timer;

  useEffect(() => {
    timer = setInterval(() => {
      setTime(prev => prev - 1);
      // if (time === 95) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 95) {
      console.log(1);

      clearInterval(timer);
      console.log(2);
    }
  }, [time]);

  return <h4>남은 시간 : ${time}</h4>;
};

export default Timer;
