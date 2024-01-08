function InputCheckbox({ checked, onChange}) {
  return (
    <input
      type="checkbox"
      className="mr-2 cursor-pointer"
      checked={checked}
      onChange={onChange}
    />
  );
}

export default InputCheckbox;
