import { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";
import styles from "./todoform.module.css";

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
        className={styles.inputManage}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className={styles.btnMange} onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
