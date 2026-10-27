import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className="mt-5 min-h-0 flex-1 list-none overflow-y-auto p-0">
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
