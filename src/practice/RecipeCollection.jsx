import React, { useEffect, useRef, useState } from "react";

const RecipeCollection = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  return (
    <div className=" flex flex-col w-90 h-50 mt-6 items-center gap-3 mx-auto bg-slate-100 text-slate-700 rounded-md shadow-md hover:shadow-lg transition sm:p-6 lg:p-8">
      <h2 className="text-2xl text-bold">Count: {count}</h2>
      <h2 className="text-xl text-slate-500 text-semibold">
        Previos: {prevCountRef.current}
      </h2>
      <button
        className="bg-slate-600 text-white text-bold rounded-md cursor-pointer px-2 py-1 "
        onClick={() => setCount(count + 1)}
      >
        {" "}
        Increment{" "}
      </button>
    </div>
  );
};

export default RecipeCollection;
