import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./AddEnglishData.module.css";
// components
import SingleEnglishWord from "../Single-english-word/SingleEnglishWord";
//icons
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

/******************************start********************************** */
const AddEnglishData = ({ setSubjectData }) => {
  const [editWord, seteditWord] = useState({ state: false, _id: "" });
  const [enteredWords, setenteredWords] = useState([]);
  const [previewImage, setpreviewImage] = useState(null);
  const [wordImage, setwordImage] = useState(null);
  const [definitionInEn, setdefinitionInEn] = useState("");
  const [definitionInAc, setdefinitionInAc] = useState("");
  const [sentence, setsentence] = useState("");
  // take img from input file then show it
  const previewImg = (files) => {
    if (files.length > 0) {
      setwordImage(files[0]);
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        setpreviewImage(event.target.result);
      };
      fileReader.readAsDataURL(files[0]);
    }
  };
  // clean input for next proccess
  const cleanInputs = () => {
    setdefinitionInAc("");
    setdefinitionInEn("");
    setsentence("");
    setwordImage(null);
    setpreviewImage("");
  };
  // add new words or update
  const addOrUpdateWord = () => {
    if (editWord.state) {
      const newData = {
        _id: v4(),
        wordImage,
        previewImage,
        definitionInEn,
        sentence,
        definitionInAc,
      };
      setenteredWords(
        enteredWords.map((word) => (word._id === editWord._id ? newData : word))
      );
      setSubjectData(
        enteredWords.map((word) => (word._id === editWord._id ? newData : word))
      );
      seteditWord({ state: false, _id: "" });
      cleanInputs();
    } else {
      const data = {
        _id: v4(),
        wordImage,
        previewImage,
        definitionInEn,
        definitionInAc,
        sentence,
      };
      setenteredWords([...enteredWords, data]);
      setSubjectData([...enteredWords, data]);
      cleanInputs();
    }
  };

  // edit word
  const editWordHandler = (_id, e) => {
    // style
    document.querySelectorAll("#words div").forEach((word) => {
      word.style.border = "none";
    });
    e.target.parentElement.parentElement.style.border = "1px solid black";
    // logic
    seteditWord({ state: true, _id });
    const { definitionInEn, definitionInAc, sentence, wordImage } =
      enteredWords.find((w) => w._id === _id);
    setdefinitionInAc(definitionInAc);
    setdefinitionInEn(definitionInEn);
    setsentence(sentence);
    setwordImage(wordImage);
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      setpreviewImage(event.target.result);
    };
    fileReader.readAsDataURL(wordImage);
    // end func
  };
  // delete word
  const deleteWord = (_id) => {
    setenteredWords(enteredWords.filter((word) => word._id !== _id));
    setSubjectData(enteredWords.filter((word) => word._id !== _id));
  };

  /******************************** DOM *************************************************** */
  return (
    <div className={styles.SubjectData}>
      <div className={styles.wrapper}>
        <div className={styles.word}>
          <div className={styles.addWord}>
            <div className={`${styles.image}  dark:border-darkSText`}>
              {previewImage && <img src={previewImage} alt="" />}
              {!previewImage && (
                <label htmlFor="file">
                  <span>
                    <AddPhotoAlternateIcon color="orange" /> Upload Img
                  </span>
                </label>
              )}
              <input
                type="file"
                name=""
                id="file"
                onChange={(e) => previewImg(e.target.files)}
              />
            </div>
            <div className={`${styles.inputs}`}>
              <div className={`${styles.input}`}>
                <label htmlFor="word">word</label>
                <input
                  type="text"
                  name=""
                  id="word"
                  value={definitionInEn}
                  onChange={(e) => setdefinitionInEn(e.target.value)}
                  className="bg-gray-200 dark:bg-darkBody"
                />
              </div>
              <div className={`${styles.input}`}>
                <label htmlFor="meaning">المعني</label>
                <input
                  type="text"
                  id="meaning"
                  value={definitionInAc}
                  onChange={(e) => setdefinitionInAc(e.target.value)}
                  className="bg-gray-200 dark:bg-darkBody"
                />
              </div>
              <div className={`${styles.input}`}>
                <label htmlFor="sentence">sentence</label>
                <input
                  type="text"
                  id="sentence"
                  value={sentence}
                  onChange={(e) => setsentence(e.target.value)}
                  className="bg-gray-200 dark:bg-darkBody"
                />
              </div>
              <button onClick={addOrUpdateWord} className="text-white">
                {editWord.state ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.data}`}>
          <span>{enteredWords.length} words</span>
          <div
            className={`${styles.enteredData} dark:border-darkSText`}
            id="words"
          >
            {enteredWords.length == 0 ? (
              <p className=" capitalize text-center mt-4">
                entered data will be here
              </p>
            ) : (
              enteredWords.map((word) => {
                return (
                  <SingleEnglishWord
                    wordData={word}
                    key={word._id}
                    deleteWord={deleteWord}
                    editWordHandler={editWordHandler}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEnglishData;
