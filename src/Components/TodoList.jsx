import Icons from "./Icons";
import { InputCheckbox } from "./Input";
import PropTypes from 'prop-types';

function TodoList(props) {
  const { todos, handleToggleComplete, handleDeleteTodo, handleEditTodo } =
    props;

  return (
    <div className="flex flex-col w-full pt-3 pb-3 gap-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border border-slate-300 rounded-md pr-1 pl-2 h-8 w-full  flex items-center justify-between"
        >
          <div className="flex overflow-scroll ">
            <InputCheckbox
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
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
};


export default TodoList;
