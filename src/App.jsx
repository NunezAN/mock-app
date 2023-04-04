import Counter from "./components/Counter";
import DisplayApi from "./components/DisplayApi";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Search />
      <Counter></Counter>
      <List></List>
      <DisplayApi />
    </div>
  );
}

export default App;
