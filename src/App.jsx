import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(savedTodos);

  const [inputValue, setInputValue] = useState("");

  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
      setShowInput(true);
      
    }
  };
  console.log(todos);
  return (
    <>
      <div className="pl-[200px] pr-[200px] pt-20 pb-20">
        <h2 className="text-3xl mb-3">Todo App</h2>

        <div className="flex flex-col w-full pt-3 pb-3 gap-3">
          {todos.map((todo, index) => (
            <div key={index}>
              {showInput && (
                <div className="border border-slate-300  rounded-md pr-2 pl-2 h-8 cursor-pointer w-full hover:shadow-lg">
                  {todo}
                </div>
              )}
            </div>
          ))}
        </div>

        <h4 className=" w-full font-semibold">Todo</h4>
        <form id="form">
          <div className="flex flex-col gap-3 pt-2">
            <input
              type="text"
              className="border border-slate-300  rounded-md pr-2 pl-2 h-8 hover:shadow-lg"
              placeholder="Your Todo..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className="border w-20 pt-1 pb-1 font-normal rounded-md hover:shadow-lg border-slate-300 "
              onClick={handleAddTodo}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
