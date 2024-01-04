import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin } from "react-icons/im";

function TodoIcons(props) {
  const { completed, onEdit, onDelete } = props;
  return (
    <div>
      {completed ? (
        <>
          <button className="ml-3 bg-green-500 text-white h-6 rounded-md cursor-default pl-2 pr-2">
            Completed
          </button>
          <button
            className="ml-3 text-sky-500 rounded-md hover:shadow-lg"
            onClick={onEdit}
          >
            <TfiPencilAlt />
          </button>
          <button
            className="ml-3 text-red-500 rounded-md hover:shadow-lg"
            onClick={onDelete}
          >
            <ImBin />
          </button>
        </>
      ) : (
        <>
          <button
            className="ml-3 rounded-md text-sky-500 hover:shadow-lg"
            onClick={onEdit}
          >
            <TfiPencilAlt />
          </button>
          <button
            className="ml-3 text-red-500 rounded-md hover:shadow-lg"
            onClick={onDelete}
          >
            <ImBin />
          </button>
        </>
      )}
    </div>
  );
}

export default TodoIcons;
