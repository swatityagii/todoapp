import PropTypes from "prop-types";
import { useTodoContext } from "../Context/TodoContext";
// function Badges(props) {
//   const {  color, label } = props;
  function Badges() {
    const {
      color,
      label
    } = useTodoContext();

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
