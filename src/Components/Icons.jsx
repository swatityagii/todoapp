import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin } from "react-icons/im";
import PropTypes from 'prop-types';

function Icons({color,selectedIcon,onClick} ){
    return (
    <span
        className={`ml-3 ${color}`}
        onClick={onClick}
      >
      {selectedIcon && selectedIcon === "TiPencilAlt" && <TfiPencilAlt />}
      {selectedIcon && selectedIcon === "ImBin" && <ImBin />}
      
      </span>
    );
  }
  Icons.propTypes = {
    color: PropTypes.string.isRequired,
    selectedIcon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  export default Icons;
  
  
  