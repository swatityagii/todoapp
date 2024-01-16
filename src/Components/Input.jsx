import PropTypes from "prop-types";

function Input({
  inputValue,
  checked,
  onChange,
  type,
  className,
  placeholder,
}) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={inputValue}
      checked={checked}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default Input;
