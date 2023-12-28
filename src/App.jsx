import { useState } from "react";
import "./App.css";

function App() {
  const [number, setcount] = useState(0);
  function numberincrease() {
    setcount(number + 1);
  }
  function numberdecrease() {
    if (number > 0) {
      setcount(number - 1);
    }
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={numberincrease}>increment</button>
      <button onClick={numberdecrease} disabled={!number > 0}>
        decrement
      </button>
    </>
  );
}

export default App;
