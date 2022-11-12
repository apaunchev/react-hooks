function useFormInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value: value,
    onChange: handleChange,
  };
}
