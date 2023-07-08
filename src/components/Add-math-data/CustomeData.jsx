import React from "react";

const CustomeData = ({
  num1,
  num2,
  operator,
  choices,
  handleNum1Change,
  handleNum2Change,
  handleOperatorChange,
  setChoices,
  editIndex,
  addHandler,
  subjectData,
}) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="num1"
        >
          Number 1
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="num1"
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={handleNum1Change}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="operator"
        >
          Operator
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="operator"
          type="text"
          placeholder="Enter operator (+, -, *)"
          value={operator}
          onChange={handleOperatorChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="num2"
        >
          Number 2
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="num2"
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={handleNum2Change}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="operator"
        >
          choices
        </label>
        <div className="flex  flex-row items-center">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="number"
            placeholder="Enter option one"
            value={choices[0]}
            onChange={(e) =>
              setChoices(
                choices.map((item, index) =>
                  index === 0 ? e.target.value : item
                )
              )
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="number"
            placeholder="Enter option two"
            value={choices[1]}
            onChange={(e) =>
              setChoices(
                choices.map((item, index) =>
                  index === 1 ? e.target.value : item
                )
              )
            }
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="number"
            placeholder="Enter option three"
            value={choices[2]}
            onChange={(e) =>
              setChoices(
                choices.map((item, index) =>
                  index === 2 ? e.target.value : item
                )
              )
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className=" bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={addHandler}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
        <div className="text-gray-700 font-bold">
          {subjectData.length} Entered
        </div>
      </div>
    </>
  );
};

export default CustomeData;
