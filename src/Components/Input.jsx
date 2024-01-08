function Input(props) {
  const { inputValue, handleInputChange } = props;

  return (
    <input
      type="text"
      className="border border-slate-300  rounded-md pl-2 h-8 hover:shadow-lg"
      placeholder="Your Todo..."
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

export default Input;
