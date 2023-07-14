import { useEffect, useState } from "react";
import InputText from "../InputText";
import styles from "./AddEnglishData.module.css";
import { v4 } from "uuid";
import generateRandomDataWithAi from "../../services/generateRandomDataWithAi";
const AddEnglishSentences = ({ subjectData, setSubjectData }) => {
  const [sentence, setsentence] = useState("");
  const [choiceOne, setchoiceOne] = useState("");
  const [choiceTwo, setchoiceTwo] = useState("");
  const [choiceThree, setchoiceThree] = useState("");
  // const [subjectData, setSubjectData] = useState([]);
  const [validationError, setValidationError] = useState("");
  const [updateSentenceId, setupdateSentenceId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const SentenceHandler = () => {
    if (updateSentenceId) {
      const newData = {
        _id: updateSentenceId,
        sentence,
        choices: [choiceOne, choiceTwo, choiceThree],
      };
      setSubjectData(
        subjectData.map((word) =>
          word._id === updateSentenceId ? newData : word
        )
      );
      reset();
      return;
    }
    const data = {
      _id: v4(),
      sentence,
      choices: [choiceOne, choiceTwo, choiceThree],
    };
    let valid = data.choices.some((choice) => sentence.includes(choice));
    if (sentence && choiceOne && choiceTwo && choiceThree && valid) {
      setSubjectData((prev) => [...prev, data]);
      setValidationError("");
      setsentence("");
      reset();
    } else if (!valid) {
      setValidationError("Sentencs must include one of the choices");
    } else {
      setValidationError("All fields are required");
    }
  };

  const tryGenerate = async () => {
    setIsError(false);
    setIsLoading(true);
    let array = [];
    try {
      const arrayOfData = await generateRandomDataWithAi({
        subjectname: "english",
        amount: 6,
      });
      array = JSON.parse(arrayOfData);
    } catch (error) {
      setIsError(true);
      setSubjectData([]);
    }
    setIsLoading(false);
    if (array.length > 0) setSubjectData(array);
  };

  const reset = () => {
    setsentence("");
    setchoiceOne("");
    setchoiceTwo("");
    setchoiceThree("");
    setupdateSentenceId("");
  };

  const editSentence = (_id) => {
    const sentence = subjectData.find((word) => word._id === _id);
    setsentence(sentence.sentence);
    setchoiceOne(sentence.choices[0]);
    setchoiceTwo(sentence.choices[1]);
    setchoiceThree(sentence.choices[2]);
    setupdateSentenceId(_id);
  };

  const deleteSentence = (_id) => {
    setSubjectData(subjectData.filter((word) => word._id !== _id));
    reset();
    setupdateSentenceId("");
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center mb-12">
      {/* <h1 className=" font-bold mb-6">Add English Sentences</h1> */}
      <div className=" w-full lg:w-9/12 flex flex-col justify-center items-center mt-3 gap-6">
        <div className="flex flex-col justify-center items-center w-full gap-4 ">
          <InputText
            setValue={(value) => setsentence(value)}
            value={sentence}
            type="text"
            label=" sentence"
          />
          <InputText
            value={choiceOne}
            setValue={(value) => setchoiceOne(value)}
            type="text"
            label="choices one"
          />
          <InputText
            value={choiceTwo}
            setValue={(value) => setchoiceTwo(value)}
            type="text"
            label="choices two"
          />
          <InputText
            value={choiceThree}
            setValue={(value) => setchoiceThree(value)}
            type="text"
            label="choices three"
          />
          <div className="flex gap-4">
            <button
              onClick={SentenceHandler}
              className="text-white py-2 px-20 bg-green-600 rounded-md mt-4 hover:bg-green-500 "
            >
              {updateSentenceId ? "Update" : "Add"}
            </button>
            <button
              disabled={isLoading}
              onClick={tryGenerate}
              className="text-white py-2 px-20 bg-green-600 rounded-md mt-4 hover:bg-green-500 "
            >
              {isLoading ? "Loading..." : "Generate"}
            </button>
            {validationError && (
              <span className="text-red-600 ml-3">{validationError}</span>
            )}
          </div>
          {isError && (
            <span className="text-red-600 ml-3">try one more time</span>
          )}
        </div>

        <div className={`${styles.data}`}>
          <span>{subjectData?.length} Sentence</span>
          <div
            className={`${styles.enteredData} dark:border-darkSText gap-4`}
            id="words"
          >
            {subjectData?.length == 0 && (
              <p className=" capitalize text-center mt-4">
                entered data will be here
              </p>
            )}
            {subjectData?.map((data) => {
              return (
                <div
                  className="flex justify-between items-center  p-2 bg-neutral-100 rounded-md"
                  key={data._id}
                >
                  <div className=" flex flex-col">
                    <p>{data.sentence}</p>
                    <div className="flex">
                      <span>{data.choices[0]}</span>-
                      <span>{data.choices[1]}</span>-
                      <span>{data.choices[2]}</span>
                    </div>
                  </div>
                  <div className=" gap-4 flex flex-col md:flex-row items-center">
                    <button
                      onClick={() => editSentence(data._id)}
                      className="text-white py-1 px-2 bg-green-600 font-light rounded-md"
                    >
                      {"Edit"}
                    </button>
                    <button
                      onClick={() => deleteSentence(data._id)}
                      className="text-white py-1 px-2 bg-red-600 rounded-md font-light"
                    >
                      {"Delete"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEnglishSentences;
