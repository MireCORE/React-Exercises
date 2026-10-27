import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import styles from "./todoitem.module.css";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleToggle = () => dispatch({ type: "toggle", payload: todo.id });

  return (
    <li className={styles.itemStyle}>
      <div className={styles.left}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span
          className={`${styles.todoItem} ${
            todo.completed ? styles.todoItemCompleted : ""
          }`}
          onClick={handleToggle}
        >
          {todo.text}
        </span>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
