import { useReducer } from "react";

const initialState = { counterA: 0, counterB: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementA":
      return { ...state, counterA: state.counterA + 1 };

    case "decrementA":
      return { ...state, counterA: state.counterA - 1 };

    case "incrementB":
      return { ...state, counterB: state.counterB + 1 };

    case "decrementB":
      return { ...state, counterB: state.counterB - 1 };

    case "resetAll":
      return initialState;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Double Counter</h1>
      <h2>Counter A : {state.counterA}</h2>
      <button onClick={() => dispatch({ type: "IncrementA" })}>+A</button>
      <button
        disabled={state.counterA === 0}
        onClick={() => dispatch({ type: "decrementA" })}
      >
        -A
      </button>
      <br />
      <h2>Counter B: {state.counterB}</h2>
      <button onClick={() => dispatch({ type: "incrementB" })}>+B</button>
      <button
        disabled={state.counterB === 0}
        onClick={() => dispatch({ type: "decrementB" })}
      >
        -B
      </button>
      <br />
      <button onClick={() => dispatch({ type: "resetAll" })}>Reset Both</button>
    </div>
  );
};

export default Counter;
