import PropTypes from "prop-types";

const TodoList = ({
  todos,
  handleToggleComplete,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  return (
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
            <div>
              <button className="ml-2 text-white pl-2 pr-2 rounded-md bg-green-500 cursor-default">
                Completed
              </button>
              <button
                className="ml-2 text-white pl-2 pr-2 rounded-md bg-sky-500 hover:shadow-lg"
                onClick={() => handleEditTodo(todo.id)}
              >
                Edit
              </button>
              <button
                className="ml-2 text-white pl-2 pr-2 rounded-md bg-red-500 hover:shadow-lg"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          ) : (
            <div>
              <button
                className="ml-2 text-white pl-2 pr-2 rounded-md bg-sky-500 hover:shadow-lg"
                onClick={() => handleEditTodo(todo.id)}
              >
                Edit
              </button>
              <button
                className="ml-2 text-white pl-2 pr-2 rounded-md bg-red-500 hover:shadow-lg"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
};

export default TodoList;
