import React, { memo } from 'react';

const Timer = ({ time = 100 }: { time?: number }) => {
  const formatTimeWithDot = (time: number) => {
    return Math.floor(time / 10) + '.' + (time % 10);
  };
  return <h4 role="leftTime">{`남은 시간 : ${formatTimeWithDot(time)}`}</h4>;
};

export default memo(Timer);
