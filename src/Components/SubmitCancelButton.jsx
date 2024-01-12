
import PropTypes from 'prop-types';
function SubmitCancelButton({label,onClick,margin}) {
  return (
    <button className={`border w-20 pt-1 pb-1 pr-0 font-normal rounded-md hover:shadow-lg border-slate-300 ${margin} `
  }
    onClick={onClick}>
      {label}
      
    </button>
  );
}
SubmitCancelButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    margin:PropTypes.string.isRequired,
  };

export default SubmitCancelButton;
