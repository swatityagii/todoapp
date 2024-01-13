import { Input } from "./Input";
import PropTypes from "prop-types";
import Badges from "./Badges";
import Icons from "./Icons";
function TodoList(props) {
  const {
    todos,
    handleToggleComplete,
    handleDeleteTodo,
    handleEditTodo,
    editTodoId,
  } = props;

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
          <div className="flex text-white text-sm">
            <Badges completed={todo.completed} />
            <Icons
              onEdit={() => handleEditTodo(todo.id)}
              onDelete={() => handleDeleteTodo(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  editTodoId: PropTypes.string.isRequired,
};

export default TodoList;
