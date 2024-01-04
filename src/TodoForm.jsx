import PropTypes from "prop-types";

const TodoForm = ({ inputValue, handleInputChange, handleAddTodo }) => {
  return (
    <form
      id="form"
      className="flex flex-col gap-3 pt-2"
      onSubmit={(e) => handleAddTodo(e)}
    >
      <input
        type="text"
        className="border border-slate-300  rounded-md pl-2 h-8 hover:shadow-lg"
        placeholder="Your Todo..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="border w-20 pt-1 pb-1 pr-0 font-normal rounded-md hover:shadow-lg border-slate-300 ">
        Submit
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
