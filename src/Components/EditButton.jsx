import { TfiPencilAlt } from "react-icons/tfi";

function EditButton({ onClick }) {
  return (
    <button
      className="ml-3 rounded-md text-sky-500 hover:shadow-lg"
      onClick={onClick}
    >
      <TfiPencilAlt />
    </button>
  );
}

export default EditButton;
