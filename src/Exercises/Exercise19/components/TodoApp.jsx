import { useReducer } from "react";
import TodoContext from "../context/TodoContext";
import { reducer, initialState } from "../reducer/TodoReducer";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import styles from "./todoapp.module.css";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className={styles.todoAppContianer}>
        <h2 className={styles.Title}>Todo App</h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
