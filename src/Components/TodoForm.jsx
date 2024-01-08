import Input from "./Input";
import SubmitButton from "./SubmitButton";

function TodoForm(props) {
  const { inputValue, handleInputChange, handleAddTodo } = props;
  return (
    <form
      id="form"
      className="flex flex-col gap-3 pt-2"
      onSubmit={(e) => handleAddTodo(e)}
    >
      <Input inputValue={inputValue} handleInputChange={handleInputChange} />
      <SubmitButton />
    </form>
  );
}

export default TodoForm;
