import { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [filtertask, setFilterTask] = useState("All");
  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = (e, isSubmit) => {
    e.preventDefault();
    if (isSubmit && inputValue.trim() !== "") {
      if (editTodoId !== null) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === editTodoId ? { ...todo, name: inputValue } : todo
          )
        );
        setEditTodoId(null);
        setIsEditMode(false);
      } else {
        setTodos([...todos, { name: inputValue, id: v4() }]);
      }
    }
    setInputValue("");
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

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditTodoId(id);
    setInputValue(todoToEdit.name);
    setIsEditMode(true);
  };

  const filterTasks = (filter) => {
    setFilterTask(filter);
  };

  const filteredTodos = () => {
    switch (filtertask) {
      case "Completed":
        return todos.filter((todo) => todo.completed);
      case "Incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const contextValue = {
    todos,
    inputValue,
    editTodoId,
    filtertask,
    isEditMode,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleComplete,
    handleEditTodo,
    filterTasks,
    setFilterTask,
    filteredTodos,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodoContext };
