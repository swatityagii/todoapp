import Icons from "./Icons";
function TodoList(props) {
  const { todos, handleToggleComplete, handleDeleteTodo, handleEditTodo } =
    props;

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

export default TodoList;
