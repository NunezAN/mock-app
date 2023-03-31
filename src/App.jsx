import { useState } from "react";
import Adding from "./components/Adding";
import Subtract from "./components/Subtract";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-slate-400 p-8 text-2xl grid grid-cols-3 mt-8 mx-auto rounded-3xl max-w-xl">
      <Subtract setCounter={setCounter}/>
      <div className="flex items-center justify-center p-4">{counter}</div>
      <Adding setCounter={setCounter}/>
    </div>
  );
}

export default App;
