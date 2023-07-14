import React, { useState } from "react";
import { AddIcon, DeleteIcon } from "../../utils/icons";
import { toast } from "react-hot-toast";

const ArabicSentenceInput = ({
  onAddData,
  tryGenerate,
  isLoading,
  isError,
}) => {
  const [sentence, setSentence] = useState("");
  const [choices, setchoices] = useState([]);

  const handleSentenceChange = (event) => {
    setSentence(event.target.value);
  };

  const handleOptionTextChange = (event, optionId) => {
    const updatedchoices = choices.map((option) => {
      if (option.id === optionId) {
        return { ...option, text: event.target.value };
      }
      return option;
    });
    setchoices(updatedchoices);
  };

  const handleOptionChange = (optionId) => {
    const updatedchoices = choices.map((option) => {
      if (option.id === optionId) {
        return { ...option, correct: true };
      } else {
        return { ...option, correct: false };
      }
    });
    setchoices(updatedchoices);
  };

  const handleAddData = () => {
    if (!sentence) {
      toast.error("Please enter a sentence");
      return;
    }
    if (choices.length < 2) {
      toast.error("Please enter at least two choices");
      return;
    }
    if (!choices.some((option) => option.correct)) {
      toast.error("Please select the correct option");
      return;
    }
    const newData = {
      sentence: sentence,
      choices: choices,
    };
    onAddData(newData);
    setSentence("");
    setchoices([]);
  };

  const handleAddOption = () => {
    const newOptionId = choices.length + 1;
    const newOption = { id: newOptionId, text: "", correct: false };
    setchoices([...choices, newOption]);
  };

  const handleDeleteOption = (optionId) => {
    const updatedchoices = choices.filter((option) => option.id !== optionId);
    setchoices(updatedchoices);
  };

  return (
    <div className="p-1 md:p-4">
      <div className="mb-4">
        <label className="block mb-2 text-lg font-semibold" htmlFor="sentence">
          Arabic Sentence
        </label>
        <input
          id="sentence"
          className="w-full rtl  p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={sentence}
          onChange={handleSentenceChange}
          placeholder="Enter your Arabic sentence"
        />
      </div>
      <div>
        {choices.map((option) => (
          <div key={option.id} className="flex items-center mb-2">
            <input
              type="radio"
              id={`option${option.id}`}
              className="mr-2 rtl"
              checked={option.correct}
              onChange={() => handleOptionChange(option.id)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={option.text}
              onChange={(event) => handleOptionTextChange(event, option.id)}
              placeholder={`Option ${option.id}`}
            />
            <button
              className="ml-2 px-2 py-1 text-sm font-semibold  rounded text-red-500 hover:scale-[1.1]"
              onClick={() => handleDeleteOption(option.id)}
            >
              <DeleteIcon fontSize="small" />
            </button>
          </div>
        ))}
        <button
          className=" flex items-center gap-1 px-2 py-1 mt-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleAddOption}
        >
          <AddIcon fontSize="small" />
          Add Option
        </button>
        <div className="w-full flex flex-col md:flex-row items-center my-10 gap-3 justify-center">
          <button
            className="px-4 w-[300px] md:w-1/2 py-3  text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            onClick={handleAddData}
          >
            Add Data
          </button>
          <button
            className="px-4 w-[300px] md:w-1/2 py-3  text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            onClick={tryGenerate}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Generate Data"}
          </button>
        </div>
        {isError && (
          <div className="text-red-500 text-center">
            try one more time please
          </div>
        )}
      </div>
    </div>
  );
};
export default ArabicSentenceInput;
