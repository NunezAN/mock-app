import React, { useState } from "react";

const PhonenumberInput = () => {
  const [number, setNumber] = useState("");
  //pomodoro
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
