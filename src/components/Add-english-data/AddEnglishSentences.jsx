import { useState } from "react";
import InputText from "../InputText";
import styles from "./AddEnglishData.module.css";
import { v4 } from "uuid";
const AddEnglishSentences = ({ subjectData, setSubjectData }) => {
  const [sentence, setsentence] = useState("");
  const [chooseOne, setchooseOne] = useState("");
  const [chooseTwo, setChooseTwo] = useState("");
  const [chooseThree, setChooseThree] = useState("");
  // const [subjectData, setSubjectData] = useState([]);
  const [validationError, setValidationError] = useState("");
  const [updateSentenceId, setupdateSentenceId] = useState("");
  const SentenceHandler = () => {
    if (updateSentenceId) {
      const newData = {
        id: updateSentenceId,
        sentence,
        choose: [chooseOne, chooseTwo, chooseThree],
      };
      setSubjectData(
        subjectData.map((word) =>
          word.id === updateSentenceId ? newData : word
        )
      );
      reset();
      return;
    }
    const data = {
      id: v4(),
      sentence,
      choose: [chooseOne, chooseTwo, chooseThree],
    };
    let valid = data.choose.some((choice) => sentence.includes(choice));
    if (sentence && chooseOne && chooseTwo && chooseThree && valid) {
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

  const reset = () => {
    setsentence("");
    setchooseOne("");
    setChooseTwo("");
    setChooseThree("");
    setupdateSentenceId("");
  };

  const editSentence = (id) => {
    const sentence = subjectData.find((word) => word.id === id);
    setsentence(sentence.sentence);
    setchooseOne(sentence.choose[0]);
    setChooseTwo(sentence.choose[1]);
    setChooseThree(sentence.choose[2]);
    setupdateSentenceId(id);
  };

  const deleteSentence = (id) => {
    setSubjectData(subjectData.filter((word) => word.id !== id));
    reset();
    setupdateSentenceId("");
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center mb-12">
      <h1 className=" font-bold mb-6">Add English Sentences</h1>
      <div className=" w-full lg:w-9/12 flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center w-full gap-4 ">
          <InputText
            setValue={(value) => setsentence(value)}
            value={sentence}
            type="text"
            label=" sentence"
          />
          <InputText
            value={chooseOne}
            setValue={(value) => setchooseOne(value)}
            type="text"
            label="choose one"
          />
          <InputText
            value={chooseTwo}
            setValue={(value) => setChooseTwo(value)}
            type="text"
            label="choose two"
          />
          <InputText
            value={chooseThree}
            setValue={(value) => setChooseThree(value)}
            type="text"
            label="choose three"
          />
          <div>
            <button
              onClick={SentenceHandler}
              className="text-white py-2 px-20 bg-green-600 rounded-md mt-4 hover:bg-green-500 "
            >
              {updateSentenceId ? "Update" : "Add"}
            </button>
            {validationError && (
              <span className="text-red-600 ml-3">{validationError}</span>
            )}
          </div>
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
                  key={data.id}
                >
                  <div className=" flex flex-col">
                    <p>{data.sentence}</p>
                    <div className="flex">
                      <span>{data.choose[0]}</span>-
                      <span>{data.choose[1]}</span>-
                      <span>{data.choose[2]}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => editSentence(data.id)}
                      className="text-white py-1 px-2 bg-green-600 font-light rounded-md"
                    >
                      {"Edit"}
                    </button>
                    <button
                      onClick={() => deleteSentence(data.id)}
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
