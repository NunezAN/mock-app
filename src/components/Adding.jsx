import React from "react";

const Adding = ({ setCounter }) => {
  const handleAddition = () => {
    setCounter((cur) => (cur = cur + 1));
  };
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
