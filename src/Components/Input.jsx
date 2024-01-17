import PropTypes from "prop-types";
import { useTodoContext } from "../Context/TodoContext";

function Input({ type, className, placeholder, checked, onChange }) {
  const { inputValue } = useTodoContext();

  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      checked={checked}
      value={inputValue}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
