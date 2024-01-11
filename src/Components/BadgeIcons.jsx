import Badge from "./Badge";
import PropTypes from 'prop-types';
import Icons from "./Icons";

function BadgeIcons(props) {
  const { completed, onEdit, onDelete } = props;

  return (
    <div className="flex">
      {completed && <Badge label="Completed" color="bg-green-500" 
        />}
      {!completed && <Badge label="InComplete" color="bg-red-500" 
        />}
     
      <Icons color="text-sky-500" onClick={onEdit} selectedIcon="TiPencilAlt" />

      <Icons color="text-red-500" onClick={onDelete} selectedIcon="ImBin" />

    </div>
  );
}
BadgeIcons.propTypes = {
  completed: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default BadgeIcons;
