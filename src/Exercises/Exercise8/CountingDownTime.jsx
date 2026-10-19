import { useState, useEffect } from "react";

const CountingDownTimer = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let countTimer;

    if (isRunning && count > 0) {
      countTimer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countTimer);
    };
  }, [count, isRunning]);

  const handleStart = () => {
    if (count > 0) {
      setIsRunning(true);
    } else if (time > 0) {
      setCount(time);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(time);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>

      <label htmlFor="SetTime">Set Time (seconds):</label>

      <input
        type="number"
        id="SetTime"
        min={0}
        step={1}
        placeholder="Enter a number"
        value={time}
        onChange={(e) => {
          const value = e.target.value;
          setTime(value === "" ? 0 : Number(value));
        }}
        disabled={isRunning}
      />

      <p>Time Left: {count} Seconds</p>

      <button
        disabled={isRunning || (time <= 0 && count <= 0)}
        onClick={handleStart}
      >
        Start
      </button>

      <button disabled={!isRunning} onClick={handleStop}>
        Stop
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CountingDownTimer;
