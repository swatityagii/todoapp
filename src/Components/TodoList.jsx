
import { useTodoContext } from "../Context/TodoContext";
import { Input } from "./Input";
import Badges from "./Badges";
import Icons from "./Icons";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoList() {
  const {
    todos,
    handleToggleComplete,
    handleDeleteTodo,
    handleEditTodo,
    editTodoId,
    handleAddTodo,
    setIsEditMode,
    setEditTodoId,
  } = useTodoContext();

  const handleEditDelete = (e) => {
    handleAddTodo(e, false);
    setIsEditMode(false);
    setEditTodoId(null);
  };

  return (
    <div className="flex flex-col w-full pt-3 pb-3 gap-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`border rounded-md p-1 w-full  flex items-center justify-between ${
            todo.id !== editTodoId
              ? "border-slate-300"
              : "border-sky-500 border-2"
          }`}
        >
          <div className="flex overflow-scroll">
            <Input
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              type="checkbox"
              className="mr-2 cursor-pointer"
            />
            <span>{todo.name}</span>
          </div>
          <div className="flex ">
            {todo.completed ? (
              <Badges color="bg-green-500" label="Completed" />
            ) : (
              <Badges color="bg-red-500" label="Incomplete" />
            )}

            <Icons
              color="text-sky-500"
              icon={faPencilAlt}
              onClick={() => handleEditTodo(todo.id)}
            />
            <Icons
              color="text-red-500"
              icon={faTrash}
              onClick={(e) => {
                handleDeleteTodo(todo.id);
                handleEditDelete(e);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
