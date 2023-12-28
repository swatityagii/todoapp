import { useState } from "react";
import "./App.css";

function App() {
  const [number, setnumber] = useState(0);
  function numberincrease() {
    setnumber(number + 1);
  }
  function numberdecrease() {
    if (number > 0) {
      setnumber(number - 1);
    }
  }
  return (
    <>
    <div className="p-[100px]">
      <h1 className="font-bold text-5xl text-sky-500 mb-7">{number}</h1>
      <button onClick={numberincrease} className=" text-gray-50 text-3xl font-semibold  mr-8 pt-3 pb-3 pl-4 pr-4 bg-emerald-500 hover:shadow-lg rounded-md">Increment </button>
      <button onClick={numberdecrease} disabled={!number > 0} className=" text-gray-50 text-3xl font-semibold pt-3 pb-3 pl-4 pr-4 bg-red-500 hover:shadow-lg rounded-md">
        Decrement
      </button>
      </div>
    </>
  );
}

export default App;
