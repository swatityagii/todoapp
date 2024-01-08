import Badge from "./Badge";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
function Icons(props) {
  const { completed, onEdit, onDelete } = props;

  return (
    <div className="flex">
      {completed ? (
        <>
          <Badge />

          <EditButton onClick={onEdit}></EditButton>
          <DeleteButton onClick={onDelete}></DeleteButton>
        </>
      ) : (
        <>
          <EditButton onClick={onEdit}></EditButton>
          <DeleteButton onClick={onDelete}></DeleteButton>
        </>
      )}
    </div>
  );
}
export default Icons;
