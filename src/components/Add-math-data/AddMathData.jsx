import React, { useState } from "react";
import { toast } from "react-hot-toast";
// import "./index.css";

function Calculator({ subjectData, setSubjectData }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [choices, setChoices] = useState(["", "", ""]);

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const addHandler = () => {
    if (
      num1 === "" ||
      num2 === "" ||
      operator === "" ||
      choices[0] === "" ||
      choices[1] === "" ||
      choices[2] === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    setSubjectData((prev) => [
      ...prev,
      {
        number: {
          num1: num1,
          num2: num2,
          operator: operator,
        },
        choices: choices,
      },
    ]);
    setNum1("");
    setNum2("");
    setOperator("");
    ("");
    setChoices(["", "", ""]);
  };

  const editHandler = (index) => {
    const number = subjectData[index];
    setNum1(number.num1);
    setNum2(number.num2);
    setOperator(number.operator);
    setChoices(number.choices);
  };
  const deleteHandler = (index) => {
    setSubjectData((prev) => prev.filter((item, index) => index !== index));
  };

  return (
    <div className="flex justify-center items-center  mb-10 ">
      <div className="bg-white w-full  rounded px-2 lg:px-8 pt-6 pb-8 mb-4 flex flex-col">
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
            Add
          </button>
          <div className="text-gray-700 font-bold">
            {subjectData.length} Entered
          </div>
        </div>

        <div className="mt-6">
          {subjectData.length === 0 ? (
            <p className="text-gray-700">No Data yet</p>
          ) : (
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Number 1</th>
                  <th className="px-4 py-2">Operator</th>
                  <th className="px-4 py-2">Number 2</th>
                  <th className="px-4 py-2">control</th>
                </tr>
              </thead>
              <tbody>
                {subjectData.map(({ number: item }, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-center">
                      {item?.num1}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {item?.operator}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {item?.num2}
                    </td>
                    <td className="border px-4 py-2 text-center flex justify-center gap-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => editHandler(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => deleteHandler(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
