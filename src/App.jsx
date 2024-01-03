import "./App.css";
import { useState } from "react";
import { v4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { name: inputValue, id: v4() }]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggleComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  console.log(todos);
  return (
    <>
      <div className="pl-[200px] pr-[200px] pt-20 pb-20">
        <h2 className="text-3xl mb-3">Todo App</h2>

        <div className="flex flex-col w-full pt-3 pb-3 gap-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="border border-slate-300 rounded-md pr-1 pl-2 h-8 cursor-pointer w-full  flex  items-center justify-between"
            >
              <div>
                <input
                  type="checkbox"
                  className="mr-2 "
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                ></input>
                <span>{todo.name}</span>
              </div>

              {todo.completed ? (
                <button className="ml-2 text-white pl-2 pr-2 rounded-md bg-green-500 cursor-default">
                  Completed
                </button>
              ) : (
                <button
                  className="ml-2 text-white pl-2 pr-2 rounded-md bg-red-500 hover:shadow-lg"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>

        <h4 className=" w-full font-semibold">Todo</h4>
        <form
          id="form"
          className="flex flex-col gap-3 pt-2"
          onSubmit={(e) => handleAddTodo(e)}
        >
          <input
            type="text"
            className="border border-slate-300  rounded-md pl-2 h-8 hover:shadow-lg"
            placeholder="Your Todo..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="border w-20 pt-1 pb-1 pr-0 font-normal rounded-md hover:shadow-lg border-slate-300 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
