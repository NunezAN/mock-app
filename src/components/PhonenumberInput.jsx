import React, { useState } from "react";

const PhonenumberInput = () => {
  const [number, setNumber] = useState("");
  const [value, setValue] = useState(initialValue);
  const push = useCallback((item: T) => {
    setValue(cur => [...cur, item])
  }, [])

  const removeByIndex = useCallback((index: number) => setValue(cur => {
    const copy = [...cur];
    copy.splice(index, 1);
    return copy;
  }), [])
  return { value, push, removeByIndex };
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
