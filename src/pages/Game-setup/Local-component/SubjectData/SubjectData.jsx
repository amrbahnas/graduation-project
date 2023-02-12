import { useState } from "react";
import { v4 } from "uuid";
import styles from "./SubjectData.module.css";
const SubjectData = ({ setsubjectData }) => {
  // component variables
  const [editWord, seteditWord] = useState({ state: false, id: "" });
  const [enteredWords, setenteredWords] = useState([]);
  const [previewImage, setpreviewImage] = useState(null);
  const [wordImage, setwordImage] = useState(null);
  const [englishWord, setenglishWord] = useState("");
  const [arabicWord, setarabicWord] = useState("");
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
    setarabicWord("");
    setenglishWord("");
    setwordImage(null);
    setpreviewImage(null);
  };
  // add new words or update
  const addOrUpdateWord = () => {
    if (editWord.state) {
      const newData = {
        id: v4(),
        wordImage,
        previewImage,
        englishWord,
        arabicWord,
        unit: 1,
        lesson: 3,
      };
      setenteredWords(
        enteredWords.map((word) => (word.id === editWord.id ? newData : word))
      );
      seteditWord({ state: false, id: "" });
      cleanInputs();
    } else {
      const data = {
        id: v4(),
        wordImage,
        previewImage,
        englishWord,
        arabicWord,
        unit: 1,
        lesson: 3,
      };
      setenteredWords([...enteredWords, data]);
      setsubjectData([...enteredWords, data]);
      cleanInputs();
    }
  };

  // edit word
  const editWordHandler = (id, e) => {
    // style
    document.querySelectorAll("#words div").forEach((word) => {
      word.style.border = "none";
    });
    e.target.parentElement.parentElement.style.border = "1px solid black";
    // logic
    seteditWord({ state: true, id });
    const { englishWord, arabicWord, wordImage } = enteredWords.find(
      (w) => w.id === id
    );
    setarabicWord(englishWord);
    setenglishWord(arabicWord);
    setwordImage(wordImage);
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      setpreviewImage(event.target.result);
    };
    fileReader.readAsDataURL(wordImage);
    // end func
  };
  // delete word
  const deleteWord = (id) => {
    setenteredWords(enteredWords.filter((word) => word.id !== id));
  };

  // small component representing single word
  const Word = ({ wordData }) => {
    return (
      <div className={`${styles.word}`} key={wordData.id}>
        <div className={`${styles.info}`}>
          <img src={wordData.previewImage} alt="" />
          <span>{wordData.englishWord}</span>
          <span>{wordData.arabicWord}</span>
        </div>
        <div className={`${styles.controlBTN}`}>
          <span onClick={(e) => editWordHandler(wordData.id, e)}>edit</span>
          <span onClick={(e) => deleteWord(wordData.id)}>delete</span>
        </div>
      </div>
    );
  };
  /******************************** DOM *************************************************** */
  return (
    <div className={styles.SubjectData}>
      <div className={styles.wrapper}>
        <div className={styles.addWord}>
          <div className={`${styles.image}`}>
            <img src={previewImage} alt="" />
            <label htmlFor="file">
              <span>upload img</span>
            </label>
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
                value={englishWord}
                onChange={(e) => setenglishWord(e.target.value)}
              />
            </div>
            <div className={`${styles.input}`}>
              <label htmlFor="meaning">meaning</label>
              <input
                type="text"
                id="meaning"
                value={arabicWord}
                onChange={(e) => setarabicWord(e.target.value)}
              />
            </div>
            <button onClick={addOrUpdateWord}>
              {editWord.state ? "Update" : "Add"}
            </button>
          </div>
        </div>
        <div className={`${styles.enteredData}`} id="words">
          <span className="fixed capitalize top-2">
            {enteredWords.length} words
          </span>
          {enteredWords.map((word) => {
            return <Word wordData={word} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectData;
