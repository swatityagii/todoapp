
import PropTypes from "prop-types";
function Button({ label, onClick, color, margin}) {

  return (
    <button
      className={`pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md ${color}  ${margin} `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
};
export default Button;
