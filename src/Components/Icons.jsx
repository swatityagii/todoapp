import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTodoContext } from "../Context/TodoContext";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

function Icons({ icon, color, todoId }) {
  const { handleEditTodo, handleDeleteTodo, handleEditDelete } =
    useTodoContext();

  const handleIconClick = () => {
    console.log("Icon clicked:", icon);
    console.log(todoId);

    if (icon === faPencilAlt) {
      handleEditTodo(todoId);
    } else if (icon === faTrash) {
      handleDeleteTodo(todoId);
      handleEditDelete();
    }
  };
  return (
    <FontAwesomeIcon
      className={`ml-3 ${color}`}
      icon={icon}
      onClick={handleIconClick}
    />
  );
}

Icons.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  todoId: PropTypes.string.isRequired,
};

export default Icons;
