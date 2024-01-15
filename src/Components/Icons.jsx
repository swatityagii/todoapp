import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icons(props) {
  const { icon, color, onClick } = props;
  
  

  return (
    <FontAwesomeIcon
      className={`ml-3 ${color}`}
      icon={icon}
      onClick={onClick}
    />
  );
}
Icons.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Icons;
