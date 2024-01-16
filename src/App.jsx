// import { useState } from "react";
// import { v4 } from "uuid";
// import TodoList from "./Components/TodoList";
// import TodoForm from "./Components/TodoForm";
// import Button from "./Components/Button";
// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editTodoId, setEditTodoId] = useState(null);
//   const [filtertask, setFilterTask] = useState("All");
//   const [isEditMode, setIsEditMode] = useState(false);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = (e, isSubmit) => {
//     e.preventDefault();
//     if (isSubmit && inputValue.trim() !== "") {
//       if (editTodoId !== null) {
//         setTodos((prevTodos) =>
//           prevTodos.map((todo) =>
//             todo.id === editTodoId ? { ...todo, name: inputValue } : todo
//           )
//         );
//         setEditTodoId(null);
//         setIsEditMode(false);
//       } else {
//         setTodos([...todos, { name: inputValue, id: v4() }]);
//       }
//     }
//     setInputValue("");
//   };

//   const handleDeleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const handleToggleComplete = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//   const handleEditTodo = (id) => {
//     const todoToEdit = todos.find((todo) => todo.id === id);
//     setEditTodoId(id);
//     setInputValue(todoToEdit.name);
//     setIsEditMode(true);
//   };

//   const filterTasks = (filter) => {
//     setFilterTask(filter);
//     console.log(filter);
//   };

//   const filteredTodos = () => {
//     switch (filtertask) {
//       case "Completed":
//         return todos.filter((todo) => todo.completed);
//       case "Incomplete":
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   };
//   const filterButtons = [
//     {
//       label: "All",
//       color: "bg-sky-500 hover:bg-sky-600",
//       onClick: () => filterTasks("all"),
//     },
//     {
//       label: "Completed",
//       color: "bg-green-500 hover:bg-green-600",
//       onClick: () => filterTasks("Completed"),
//     },
//     {
//       label: "Incomplete",
//       color: "bg-red-500 hover:bg-red-600",
//       onClick: () => filterTasks("Incomplete"),
//     },
//   ];
//   return (
//     <>
//       <div className="md:pl-[140px] md:pr-[140px] sm:pl-[80px] sm:pr-[80px] pl-[20px] pr-[20px] pt-20 pb-20">
//         <h2 className="text-3xl mb-3">Todo App</h2>

//         <TodoList
//           todos={filteredTodos()}
//           handleToggleComplete={handleToggleComplete}
//           handleDeleteTodo={handleDeleteTodo}
//           handleEditTodo={handleEditTodo}
//           editTodoId={editTodoId}
//           handleAddTodo={handleAddTodo}
//           setIsEditMode={setIsEditMode}
//           setEditTodoId={setEditTodoId}
//         />

//         <h4 className=" w-full font-semibold">Todo</h4>
//         {todos.length > 0 && (
//           <div className="mt-2 text-white">
//             {filterButtons.map((button, index) => (
//               <Button
//                 key={index}
//                 label={button.label}
//                 color={button.color}
//                 onClick={button.onClick}
//               />
//             ))}
//           </div>
//         )}
//         <TodoForm
//           inputValue={inputValue}
//           handleInputChange={handleInputChange}
//           handleAddTodo={handleAddTodo}
//           isEditMode={isEditMode}
//           setIsEditMode={setIsEditMode}
//           setEditTodoId={setEditTodoId}
//           editTodoId={editTodoId}
//         />
//       </div>
//     </>
//   );
// };

// export default App;

import { TodoProvider, useTodoContext } from "./Context/TodoContext";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import Button from "./Components/Button";

const App = () => {
  const {
    todos,
    inputValue,
    editTodoId,
    isEditMode,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleComplete,
    handleEditTodo,
    filteredTodos,
    filterTasks,
    setIsEditMode,
    setEditTodoId,
  } = useTodoContext();

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

  return (
    <TodoProvider>
      <div className="md:pl-[140px] md:pr-[140px] sm:pl-[80px] sm:pr-[80px] pl-[20px] pr-[20px] pt-20 pb-20">
        <h2 className="text-3xl mb-3">Todo App</h2>

        <TodoList
          todos={filteredTodos()}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          editTodoId={editTodoId}
          handleAddTodo={handleAddTodo}
          setIsEditMode={setIsEditMode}
          setEditTodoId={setEditTodoId}
        />

        <h4 className=" w-full font-semibold">Todo</h4>
        {todos.length > 0 && (
          <div className="mt-2 text-white">
            {filterButtons.map((button, index) => (
              <Button
                key={index}
                label={button.label}
                color={button.color}
                onClick={button.onClick}
              />
            ))}
          </div>
        )}
        <TodoForm
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleAddTodo={handleAddTodo}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          setEditTodoId={setEditTodoId}
          editTodoId={editTodoId}
        />
      </div>
    </TodoProvider>
  );
};

export default App;
