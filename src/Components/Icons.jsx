import Badge from "./Badge";
import PropTypes from "prop-types";
import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin } from "react-icons/im";

function Icons(props) {
  const { completed, onEdit, onDelete } = props;

  return (
    <div className="flex ">
      {completed && <Badge label="Completed" color="bg-green-500" />}
      {!completed && <Badge label="InComplete" color="bg-red-500" />}
      <span className="ml-3 text-sky-500" onClick={onEdit}>
        <TfiPencilAlt />
      </span>
      <span className=" text-red-500 ml-3" onClick={onDelete}>
        <ImBin />
      </span>
    </div>
  );
}
Icons.propTypes = {
  completed: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Icons;
