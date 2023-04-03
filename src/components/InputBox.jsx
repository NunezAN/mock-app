import React, { useContext, useRef } from "react";
import mainContext from "../context";

const InputBox = () => {
  const { handleAdding } = useContext(mainContext);
  const inputRef = useRef("");
  return (
    <form
      className="flex flex-col mb-4"
      onSubmit={() => handleAdding(inputRef.current.value,event)}
    >
      <span>Enter an Item to add to the list:</span>
      <input ref={inputRef} type="text" className="bg-inherit border-2 border-slate-400 rounded-md" />
    </form>
  );
};

export default InputBox;
