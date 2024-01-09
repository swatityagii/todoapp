import { Input } from "./Input";
import SubmitButton from "./SubmitButton";
import PropTypes from 'prop-types';

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
TodoForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
};
export default TodoForm;
