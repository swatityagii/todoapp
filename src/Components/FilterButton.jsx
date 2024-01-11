
import PropTypes from "prop-types";
function FilterButton({ label, color, onClick, hovercolor }) {
  return (
    <button
      className={`rounded-md mr-3 pl-3 pr-3 pt-1 pb-1 text-md ${color} text-white ${hovercolor}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
FilterButton.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hovercolor: PropTypes.string.isRequired,
};
export default FilterButton;
