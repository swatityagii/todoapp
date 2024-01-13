import Badge from "./Badge";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";


function BadgesAndIcons(props) {
  const { completed, onEdit, onDelete } = props;

  return (
    <div className="flex">
      {completed && <Badge label="Completed" color="bg-green-500" />}
      {!completed && <Badge label="InComplete" color="bg-red-500" />}
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
