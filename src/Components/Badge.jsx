import PropTypes from 'prop-types';
function Badge({ label, color} ){
  return (
    <span
      className={`${color} text-white rounded-sm cursor-default pl-1 pr-1 text-sm`}
      
    >
      {label}
    </span>
  );
}
Badge.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Badge;


