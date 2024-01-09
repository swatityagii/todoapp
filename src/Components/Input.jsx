import PropTypes from "prop-types";
export function Input(props) {
  const { inputValue, handleInputChange } = props;
  return (
    <input
      type="text"
      className="border border-slate-300  rounded-md pl-2 h-8 hover:shadow-lg"
      placeholder="Your Todo..."
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
export function InputCheckbox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className="mr-2 cursor-pointer"
      checked={checked}
      onChange={onChange}
      
    />
  );
}

InputCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
