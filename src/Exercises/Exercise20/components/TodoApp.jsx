import { useReducer } from "react";
import TodoContext from "../context/TodoContext";
import { reducer, initialState } from "../reducer/TodoReducer";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-[#c8a3ec] pt-5">
        <div className="mx-auto flex h-[350px] w-[400px] flex-col rounded-lg bg-white">
          <h2 className="my-3 text-center font-sans text-2xl font-bold">
            Todo App
          </h2>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
