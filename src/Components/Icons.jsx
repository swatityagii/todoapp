import { TfiPencilAlt } from "react-icons/tfi";
import { ImBin } from "react-icons/im";
import Badge from "./Badge";
function Icons(props) {
  const { completed, onEdit, onDelete } = props;
  
  return (
    <div>
      {completed ? (
        <>
          <Badge />

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

export default Icons;
