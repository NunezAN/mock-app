import React, { useState } from "react";
import InputBox from "./InputBox";
import mainContext from "../context";

const List = () => {
  const [items, setItems] = useState([]);
  const handleAdding = (input, event) => {
    event.preventDefault();
    setItems((cur) => [...cur, input]);
  };

  const handleDelete = (index) => {
    setItems((cur) => {
      const copy = [...cur];
      copy.splice(index, 1);
      return copy;
    });
  };
  return (
    <div className="w-[50%] mx-auto bg-black text-white rounded-xl p-8 m-8">
      <mainContext.Provider value={{ items, handleAdding }}>
        <InputBox />
      </mainContext.Provider>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="border-b-2 border-blue-400 cursor-pointer hover:bg-slate-400 rounded-sm p-2"
          onClick={() => handleDelete(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
