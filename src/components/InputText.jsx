const InputText = ({ type, label, value, setValue }) => {
  const changHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="flex  flex-col gap-1 w-full ">
      <label
        htmlFor="word"
        className="font-semibold text-neutral-600 capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        name=""
        value={value}
        onChange={(e) => changHandler(e.target.value)}
        className="p-2 focus:outline-none rounded-md bg-gray-200 dark:bg-darkBody"
      />
    </div>
  );
};

export default InputText;
