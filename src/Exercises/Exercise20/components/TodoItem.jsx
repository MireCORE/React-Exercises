import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleToggle = () => dispatch({ type: "toggle", payload: todo.id });

  return (
    <li className="mx-5 mb-2.5 flex items-center justify-between rounded-lg border border-gray-200 bg-gray-100 px-4 py-3">
      <div className="flex items-center gap-2.5">
        <input
          className="h-[18px] w-[18px] cursor-pointer accent-green-600"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span
          className={`cursor-pointer text-base transition-colors ${
            todo.completed ? "text-gray-400 line-through" : "text-gray-800"
          }`}
          onClick={handleToggle}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="cursor-pointer font-bold text-red-600"
        onClick={() => dispatch({ type: "delete", payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
