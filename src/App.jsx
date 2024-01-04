import { useState } from "react";
import { v4 } from "uuid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="pl-[200px] pr-[200px] pt-20 pb-20">
        <h2 className="text-3xl mb-3">Todo App</h2>

        <TodoList
          todos={todos}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
        />

        <h4 className=" w-full font-semibold">Todo</h4>

        <TodoForm
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleAddTodo={handleAddTodo}
        />
      </div>
    </>
  );
};

export default App;
