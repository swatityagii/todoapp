import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  function handleclick() {
    setcount(count + 1);
  }
  function handleclick2() {
    if (count > 0) {
      setcount(count - 1);
    }
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleclick}>increment</button>
      <button onClick={handleclick2} disabled={!count > 0}>
        decrement
      </button>
    </>
  );
}

export default App;
