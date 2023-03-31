import React, { useContext } from "react";
import CounterContext from "../context";

const Adding = () => {
  const { handleAddition } = useContext(CounterContext);
  return (
    <button
      className="text-4xl hover:bg-slate-600 p-4 flex items-center justify-center rounded-xl"
      onClick={handleAddition}
    >
      +
    </button>
  );
};

export default Adding;
