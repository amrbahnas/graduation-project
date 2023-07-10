import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import CustomeData from "./CustomeData";
import RandomData from "./RandomData";
// import "./index.css";

function Calculator({ subjectData, setSubjectData, dataType }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [choices, setChoices] = useState(["", "", ""]);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(() => {
    setSubjectData([]);
  }, [dataType]);
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
    if (editIndex !== null) {
      updateHandler();
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

  const updateHandler = () => {
    setSubjectData((prev) => {
      const newData = [...prev];
      newData[editIndex] = {
        number: {
          num1: num1,
          num2: num2,
          operator: operator,
        },
        choices: choices,
      };
      return newData;
    });
    setNum1("");
    setNum2("");
    setOperator("");
    ("");
    setChoices(["", "", ""]);
    setEditIndex(null);
  };

  const editHandler = (index) => {
    const number = subjectData[index];
    setEditIndex(index);
    setNum1(number?.number?.num1);
    setNum2(number?.number?.num2);
    setOperator(number?.number?.operator);
    setChoices(number?.choices);
  };
  const deleteHandler = (qIndex) => {
    setSubjectData((prev) => prev.filter((item, index) => index !== qIndex));
  };

  return (
    <div className="flex justify-center items-center  mb-10 ">
      <div className="bg-white w-full  rounded px-2 lg:px-8 pt-6 pb-8 mb-4 flex flex-col">
        {dataType === "customed" ? (
          <CustomeData
            num1={num1}
            num2={num2}
            operator={operator}
            choices={choices}
            handleNum1Change={handleNum1Change}
            handleNum2Change={handleNum2Change}
            handleOperatorChange={handleOperatorChange}
            setChoices={setChoices}
            addHandler={addHandler}
            editIndex={editIndex}
            subjectData={subjectData}
          />
        ) : (
          <RandomData setSubjectData={setSubjectData} />
        )}

        <div className="mt-6 overflow-scroll">
          {subjectData.length === 0 ? (
            <div className=" w-full p-4 border">
              <p className="text-gray-700 text-center">No Data yet</p>
            </div>
          ) : (
            <table className="table-auto w-full overflow-auto">
              <thead>
                <tr className=" whitespace-nowrap">
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
