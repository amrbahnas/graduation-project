import React, { useState } from "react";
import { CheckIcon } from "../../utils/icons";

function RenderData({ data, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState(data);

  const handleEdit = () => {
    setEditing(true);
    setUpdatedData(data);
  };

  const handleUpdate = () => {
    onUpdate(updatedData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSentenceChange = (event) => {
    const value = event.target.value;
    setUpdatedData((prevData) => ({
      ...prevData,
      sentence: value,
    }));
  };

  const handleOptionTextChange = (event, index) => {
    const value = event.target.value;
    setUpdatedData((prevData) => {
      const choices = [...prevData.choices];
      choices[index].text = value;
      return {
        ...prevData,
        choices: choices,
      };
    });
  };

  const handleOptionChange = (event, index) => {
    const value = event.target.checked;
    setUpdatedData((prevData) => {
      const choices = [...prevData.choices];
      choices.forEach((option, i) => {
        choices[i].correct = i === index ? value : false;
      });
      return {
        ...prevData,
        choices: choices,
      };
    });
  };

  return (
    <div className="p-4 border rounded mb-4">
      {editing ? (
        <>
          <input
            value={updatedData.sentence}
            onChange={handleSentenceChange}
            className="w-full  p-4 mb-6 border rounded focus:outline-none focus:ring focus:border-blue-300 rtl text-right"
          />
          <ul>
            {updatedData.choices.map((option, index) => (
              <li key={index} className="mb-2 relative">
                <input
                  type="text"
                  value={option.text}
                  onChange={(event) => handleOptionTextChange(event, index)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 rtl text-right"
                />
                <label className="ml-2 absolute left-0 top-3 ">
                  <input
                    type="checkbox"
                    checked={option.correct}
                    onChange={(event) => handleOptionChange(event, index)}
                  />
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handleUpdate}
              className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-2">Rendered Data:</h2>
          <p className="mb-2 rtl">{data.sentence}</p>
          <p className="mb-2">choices:</p>
          <ul>
            {data.choices.map((option, index) => (
              <li key={index} className="mb-2 rtl">
                {option.text}{" "}
                {option.correct && (
                  <CheckIcon className="w-5 h-5 text-green-500 inline ml-2" />
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handleEdit}
              className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="px-2 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default RenderData;
