import React from "react";

const Subtract = ({ setCounter }) => {
  const handleSubtraction = () => {
    setCounter((cur) => (cur = cur - 1));
  };
  return (
    <button
      className="text-4xl hover:bg-slate-600 p-4 flex items-center justify-center rounded-xl"
      onClick={handleSubtraction}
    >
      -
    </button>
  );
};

export default Subtract;
