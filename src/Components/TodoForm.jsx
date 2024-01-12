import { Input } from "./Input";
import PropTypes from "prop-types";
import Button from "./Button";

function TodoForm(props) {
  const { inputValue, handleInputChange, handleAddTodo, isEditMode } = props;
  
  return (
    <form
      id="form"
      className="flex flex-col gap-3 pt-2"
      onSubmit={(e) => handleAddTodo(e, true)}
    >
      <Input
        className="border border-slate-300  rounded-md pl-2 h-8 hover:shadow-lg"
        inputValue={inputValue}
        onChange={handleInputChange}
        placeholder="Your Todo..."
        type="text"
      />

      <div className="">
        {isEditMode ? (
          <>
            <Button label="Update" />

            <Button
              label="Cancel"
              onClick={() => handleAddTodo( false) }
              margin="ml-4"
            />
          </>
        ) : (
          <Button label="Submit" />
        )}
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
