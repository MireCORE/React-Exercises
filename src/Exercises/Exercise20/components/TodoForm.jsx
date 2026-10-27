import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: "add", payload: newTodo });
      setText("");
    }
  };

  return (
    <div>
      <input
        className="ml-5 w-[70%] rounded-[5px] border border-[#595656] bg-white p-[5px] text-base text-black outline-none focus:border-blue-600"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button
        className="ml-[5px] w-[15%] cursor-pointer rounded-md border-none bg-[blueviolet] p-2 text-white"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
