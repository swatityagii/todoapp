import PropTypes from "prop-types";

function Badges({ completed }) {
  return (
    <>
      {completed ? (
        <span className={"bg-green-500 rounded-sm pl-1 pr-1 ml-3"}>Completed</span>
      ) : (
        <span className={"ml-3 rounded-sm pl-1 pr-1 bg-red-500 "}>Incomplete</span>
      )}
    </>
  );
}

Badges.propTypes = {
  completed: PropTypes.bool.isRequired,
};

export default Badges;
