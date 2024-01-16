// import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function Icons(props) {
//   const { icon, color, onClick } = props;

//   return (
//     <FontAwesomeIcon
//       className={`ml-3 ${color}`}
//       icon={icon}
//       onClick={onClick}
//     />
//   );
// }

// Icons.propTypes = {
//   icon: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   color: PropTypes.string.isRequired,
// };

// export default Icons;



import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTodoContext } from "../Context/TodoContext";

function Icons({ icon, color }) {
  const { handleEditTodo, handleDeleteTodo, handleEditDelete, editTodoId } = useTodoContext();

  const handleIconClick = () => {
    console.log("Icon clicked:", icon);
    console.log(editTodoId);
    switch (icon) {
      case "faPencilAlt":
        handleEditTodo(editTodoId);
        break;
      case "faTrash":
        handleDeleteTodo(editTodoId);
        handleEditDelete();
        break;
      default:
        break;
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
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Icons;
