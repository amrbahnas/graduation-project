import { useState } from "react";
import { v4 } from "uuid";
import styles from "./SubjectData.module.css";
//icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const SubjectData = ({ setsubjectData }) => {
  // component variables
  const [editWord, seteditWord] = useState({ state: false, id: "" });
  const [enteredWords, setenteredWords] = useState([]);
  const [previewImage, setpreviewImage] = useState(null);
  const [wordImage, setwordImage] = useState(null);
  const [defintionen, setdefintionen] = useState("");
  const [defintionac, setdefintionac] = useState("");
  const [unit, setunit] = useState("");
  const [lesson, setlesson] = useState("");
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
    setdefintionac("");
    setdefintionen("");
    setwordImage(null);
    setpreviewImage("");
  };
  // add new words or update
  const addOrUpdateWord = () => {
    if (editWord.state) {
      const newData = {
        id: v4(),
        wordImage,
        previewImage,
        defintionen,
        defintionac,
        unit,
        lesson
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
        defintionen,
        defintionac,
        unit,
        lesson,
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
    const { defintionen, defintionac, wordImage, } =
      enteredWords.find((w) => w.id === id);
    setdefintionac(defintionac);
    setdefintionen(defintionen);
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
    setsubjectData(enteredWords.filter((word) => word.id !== id));
  };

  // small component representing single word
  const Word = ({ wordData }) => {
    return (
      <div className={`${styles.word}`}>
        <div className={`${styles.info}`}>
          <img src={wordData.previewImage} alt="" />
          <span>{wordData.defintionen}</span>
          <span>{wordData.defintionac}</span>
        </div>
        <div className={`${styles.controlBTN}`}>
          <span onClick={(e) => editWordHandler(wordData.id, e)}>
            <EditIcon />
          </span>
          <span onClick={(e) => deleteWord(wordData.id)}>
            <DeleteForeverIcon />
          </span>
        </div>
      </div>
    );
  };
  /******************************** DOM *************************************************** */
  return (
    <div className={styles.SubjectData}>
      <div className={styles.wrapper}>
        <div className={styles.word}>
          <div className={styles.unitLesson}>
            <div className={styles.unit}>
              <label htmlFor="unit">unit</label>
              <select
                name="unit"
                id="unit"
                value={unit}
                onChange={(e) => setunit(e.target.value)}
              >
                <option>select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className={styles.lesson}>
              <label htmlFor="lesson">lesson</label>
              <select
                name="lesson"
                id="lesson"
                value={lesson}
                onChange={(e) => setlesson(e.target.value)}
              >
                <option>select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className={styles.addWord}>
            <div className={`${styles.image}`}>
              {previewImage && <img src={previewImage} alt="" />}
              <label htmlFor="file">
                <span> <AddPhotoAlternateIcon color="primary" /> Upload Img</span>
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
                  value={defintionen}
                  onChange={(e) => setdefintionen(e.target.value)}
                />
              </div>
              <div className={`${styles.input}`}>
                <label htmlFor="meaning">meaning</label>
                <input
                  type="text"
                  id="meaning"
                  value={defintionac}
                  onChange={(e) => setdefintionac(e.target.value)}
                />
              </div>
              <button onClick={addOrUpdateWord} className="text-white">
                {editWord.state ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.enteredData}`} id="words">
          <span className="fixed capitalize top-2">
            {enteredWords.length} words
          </span>
          {enteredWords.map((word) => {
            return <Word wordData={word} key={word.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectData;
