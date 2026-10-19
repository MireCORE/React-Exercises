import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  useEffect(() => {
    let timerId;
    if (isRuning) {
      timerId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRuning]);

  const handleStart = () => {
    setIsRuning(true);
  };

  const handleStop = () => {
    setIsRuning(false);
  };

  const handleReset = () => {
    (setIsRuning(false), setTime(0));
  };

  return (
    <div>
      <h2>Stopwatch {time} seconds</h2>
      <button disabled={isRuning} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRuning} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Timer;
