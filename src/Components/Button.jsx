import PropTypes from "prop-types";
import { useTodoContext } from "../Context/TodoContext";

function Button({ label, color, margin }) {
  const { filterTasks } = useTodoContext();
  return (
    <button
      className={`pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md ${color}  ${margin} `}
      onClick={() => filterTasks(label)}
    >
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
