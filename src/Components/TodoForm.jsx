import Input from "./Input";
import Button from "./Button";
import { useTodoContext } from "../Context/TodoContext";

function TodoForm() {
  const {
    inputValue,
    handleInputChange,
    handleAddTodo,
    isEditMode,
    setIsEditMode,
    setEditTodoId,
  } = useTodoContext();

  const handleCancel = () => {
    handleAddTodo(false);
    setIsEditMode(false);
    setEditTodoId(null);
  };

  return (
    <form
      id="form"
      className="flex flex-col gap-3 pt-2"
      onSubmit={(e) => handleAddTodo(e, true)}
    >
      <Input
        autoFocus
        className={`border rounded-md pl-2 h-8 hover:shadow-lg  ${
          inputValue.trim() === "" && isEditMode
            ? "border-red-500 border-2 focus:outline-none"
            : "border-slate-300"
        }  `}
        onChange={handleInputChange}
        placeholder="Your Todo..."
        type="text"
      />

      <div className="">
        {isEditMode ? (
          <>
            {inputValue.trim() === "" &&   (
              <p className="text-red-500 mb-3">
                *You cannot update the task to empty, Please enter some valid
                task.
              </p>
            )}
            <Button label="Update" />
            <Button label="Cancel" onClick={handleCancel} margin="ml-4" />
          </>
        ) : (
          <Button label="Submit" />
        )}
      </div>
    </form>
  );
}

export default TodoForm;
