import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button disabled={count <== 0} onClick={handleDecrement}>
        Decrement
      </button>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Count;
