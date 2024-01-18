import { createContext, useState, useContext, useEffect } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const localStorageKey = "todos";

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem(localStorageKey);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [filterTask, setFilterTask] = useState("All");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

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
    switch (filterTask) {
      case "Completed":
        return todos.filter((todo) => todo.completed);
      case "Incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };
  const filterButtons = [
    {
      label: "All",
      color: "bg-sky-500 hover:bg-sky-600",
      onClick: () => filterTasks("All"),
    },
    {
      label: "Completed",
      color: "bg-green-500 hover:bg-green-600",
      onClick: () => filterTasks("Completed"),
    },
    {
      label: "Incomplete",
      color: "bg-red-500 hover:bg-red-600",
      onClick: () => filterTasks("Incomplete"),
    },
  ];
  const handleEditDelete = (e) => {
    handleAddTodo(e, false);
    setIsEditMode(false);
    setEditTodoId(null);
  };

  const contextValue = {
    todos,
    inputValue,
    editTodoId,
    filterTask,
    isEditMode,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleComplete,
    handleEditTodo,
    filterTasks,
    setFilterTask,
    filteredTodos,
    handleEditDelete,
    filterButtons,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodoContext };
