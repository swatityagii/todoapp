import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

function BadgesAndIcons(props) {
  const { completed, onEdit, onDelete } = props;

  return (
    <div className="flex text-white text-sm">
      {completed && (
        <span className={"bg-green-500 rounded-sm pl-1 pr-1 "}>Completed</span>
      )}
      {!completed && (
        <span className={"rounded-sm pl-1 pr-1 bg-red-500"}>InComplete</span>
      )}

      <span className="ml-3 text-sky-500 " onClick={onEdit}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </span>
      <span className=" text-red-500  ml-3" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
}
BadgesAndIcons.propTypes = {
  completed: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default BadgesAndIcons;
