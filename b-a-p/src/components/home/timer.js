import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const countDown = new Date('May 04, 2025 13:00:00').getTime();
  const actualTime = new Date().getTime();
  const duration = countDown - actualTime;

  const [time, setTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getFormattedTime = (ms) => {
    const tSec = Math.floor(ms / 1000);
    const tMin = Math.floor(tSec / 60);
    const tHr = Math.floor(tMin / 60);
    const tDay = Math.floor(tHr / 24);

    const sec = tSec % 60;
    const min = tMin % 60;
    const hr = tHr % 24;

    return `${tDay} : ${hr} : ${min} : ${sec}`;
  };

  return <div>{getFormattedTime(time)}</div>;
};

export default CountdownTimer;
