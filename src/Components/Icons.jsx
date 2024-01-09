import {CompleteBadge} from "./Badge";
import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin } from "react-icons/im";
import PropTypes from 'prop-types';
import { IncompleteBadge } from "./Badge";

function Icons(props) {
  const { completed, onEdit, onDelete } = props;

  return (
    <div className="flex">
      {completed && <CompleteBadge />}
      {!completed && <IncompleteBadge/>}
      <button
        onClick={onEdit}
        className="ml-3 rounded-md hover:shadow-lg text-sky-500"
      >
        <TfiPencilAlt />
      </button>

      <button
        onClick={onDelete}
        className="ml-3 rounded-md hover:shadow-lg text-red-500"
      >
        <ImBin />
      </button>
    </div>
  );
}
Icons.propTypes = {
  completed: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Icons;
