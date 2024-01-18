import PropTypes from "prop-types";

function Badges({ color, label }) {
  return (
    <span
      className={`ml-3 rounded-sm pl-1 pr-1 text-white text-sm ${color} cursor-default`}
    >
      {label}
    </span>
  );
}
Badges.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Badges;
