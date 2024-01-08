import { ImBin } from "react-icons/im";
function DeleteButton({ onClick }) {
  return (
    <button
      className="ml-3 text-red-500 rounded-md hover:shadow-lg"
      onClick={onClick}
    >
      <ImBin />
    </button>
  );
}

export default DeleteButton;
