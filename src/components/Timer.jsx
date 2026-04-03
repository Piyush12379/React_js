import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <>
      <h1>Timer: {timer}</h1>

      <button onClick={() => setStart(true)}>
        Start
      </button>
    </>
  );
};

export default Timer;