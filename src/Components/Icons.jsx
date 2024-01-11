import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin } from "react-icons/im";
import PropTypes from 'prop-types';

function Icons({color,selectedIcon,onClick} ){
    return (
    <button
        className={`ml-3 ${color}`}
        onClick={onClick}
      >
      {selectedIcon && selectedIcon === "TiPencilAlt" && <TfiPencilAlt />}
      {selectedIcon && selectedIcon === "ImBin" && <ImBin />}
      
      </button>
    );
  }
  Icons.propTypes = {
    color: PropTypes.string.isRequired,
    selectedIcon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  export default Icons;
  
  
  