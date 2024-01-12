import { Input } from "./Input";
import SubmitCancelButton from "./SubmitCancelButton";
import PropTypes from "prop-types";

function TodoForm(props) {
  const { inputValue, handleInputChange, handleAddTodo,isEditMode } = props;
  const submitLabel = isEditMode ? "Update" : "Submit";

  return (
    <form
      id="form"
      className="flex flex-col gap-3 pt-2"
      onSubmit={(e) => handleAddTodo(e,isEditMode)}
    >
      <Input inputValue={inputValue} handleInputChange={handleInputChange} className />
      <div className="">
        <SubmitCancelButton label={submitLabel} />

        <SubmitCancelButton label="Cancel" onClick={(e) => handleAddTodo(e, false) } margin="ml-4" />
      </div>
    </form>
  );
}
TodoForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool,
};
export default TodoForm;
