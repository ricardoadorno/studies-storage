import Check from "./components/Check";
import CounterButton from "./CounterButton";

function App() {
  return (
    <div>
      <CounterButton />
      <Check label="Checked" backgroundColor={"#ff0000"} />
    </div>
  );
}

export default App;
