import Icons from "./Icons";
import { Input } from "./Input";
import PropTypes from "prop-types";

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
          className={`border border-slate-300 rounded-md pr-1 pl-2 h-8 w-full  flex items-center justify-between ${
            todo.id !== editTodoId ? "border" : "border-slate-900" && "border-2"
          }`}
        >
          <div className="flex overflow-scroll ">
            <Input
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              type="checkbox"
              className="mr-2 cursor-pointer"
            />
            <span>{todo.name}</span>
          </div>

          <Icons
            completed={todo.completed}
            onEdit={() => handleEditTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
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
