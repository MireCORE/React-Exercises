import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  return (
    <ul className={styles.listStyle}>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
