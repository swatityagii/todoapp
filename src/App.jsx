import { useTodoContext } from "./Context/TodoContext";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import Button from "./Components/Button";

const App = () => {
  const { todos, filterButtons} = useTodoContext();

  return (
    <div className="md:pl-[140px] md:pr-[140px] sm:pl-[80px] sm:pr-[80px] pl-[20px] pr-[20px] pt-20 pb-20">
      <h2 className="text-3xl mb-3">Todo App</h2>

      <h4 className=" w-full font-semibold">Todo</h4>
      <TodoForm />

      
      {todos.length > 0 && (
        <div className="mt-2 text-white">
          {filterButtons.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              color={button.color}
              margin="mr-2 mb-3"
            />
          ))}
        </div>
      )}

      <TodoList />
    </div>
  );
};

export default App;
