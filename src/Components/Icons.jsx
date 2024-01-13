import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

function Icons({ onEdit, onDelete }) {
  return (
    <div className="flex text-white text-sm">
      <span className="ml-3 text-sky-500" onClick={onEdit}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </span>
      <span className="text-red-500 ml-3" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
}

Icons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Icons;
