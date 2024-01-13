import PropTypes from "prop-types";

function Badges(props) {
  const { completed, color, label } = props;
  return (
    <span
      className={`ml-3 rounded-sm pl-1 pr-1 text-white text-sm ${color} cursor-default`}
    >
      {label}
      {completed}
    </span>
  );
}
Badges.propTypes = {
  completed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Badges;
