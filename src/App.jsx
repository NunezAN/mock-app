import { useState } from "react";
import Adding from "./components/Adding";
import Subtract from "./components/Subtract";
import CounterContext from "./context";

function App() {
  const [counter, setCounter] = useState(0);
  const handleSubtraction = () => {
    setCounter((cur) => (cur = cur - 1));
  };
  const handleAddition = () => {
    setCounter((cur) => (cur = cur + 1));
  };
  return (
    <div className="bg-slate-400 p-8 text-2xl grid grid-cols-3 mt-8 mx-auto rounded-3xl max-w-xl">
      <CounterContext.Provider
        value={{ counter, handleAddition, handleSubtraction }}
      >
        <Subtract />
        <div className="flex items-center justify-center p-4">{counter}</div>
        <Adding />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
