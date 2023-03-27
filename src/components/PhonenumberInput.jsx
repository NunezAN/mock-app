import React, { useState } from "react";

const PhonenumberInput = () => {
  const [number, setNumber] = useState("");
  const handleInput = (e) => {
    let curr = e.currentTarget.value.replace(/\D/g, "");
    console.log(curr);
    if (curr.length > 10) curr = curr.slice(0, 10);
    if (curr.length > 6) curr = `${curr.slice(0, 6)}-${curr.slice(6)}`;
    if (curr.length > 3) curr = `(${curr.slice(0, 3)})${curr.slice(3)}`;
    setNumber(curr);
  };
  // your code here
  return (
    <input
      className="text-2xl border-4 border-black m-4"
      value={number}
      onChange={(event) => handleInput(event)}
      //   type="number"
      data-testid="phone-number-input"
    />
  );
};

export default PhonenumberInput;
