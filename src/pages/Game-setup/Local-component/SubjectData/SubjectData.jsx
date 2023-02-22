import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./SubjectData.module.css";
// redux
import { setsubjectData } from "../../../../store/slices/unitsSlice";
import { useDispatch, useSelector } from "react-redux";
//icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
/******************************start********************************** */
const SubjectData = ({ children }) => {
  const dispatch = useDispatch();
  // global variables
  const { currentUnit, currentLesson } = useSelector(
    (store) => store.unitsSlice
  );
  const { english } = useSelector((store) => store.questionsDataSlice);
  // component variables
  const oldWords = english.filter(
    (word) =>
      +word.Lesson === +currentLesson.lesson && +word.Unit === +currentUnit.unit
  );
  // console.log(oldWords);
  const [editWord, seteditWord] = useState({ state: false, id: "" });
  const [enteredWords, setenteredWords] = useState([]);
  const [previewImage, setpreviewImage] = useState(null);
  const [wordImage, setwordImage] = useState(null);
  const [DefintioninEn, setDefintioninEn] = useState("");
  const [DefintioninAc, setDefintioninAc] = useState("");
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
    setDefintioninAc("");
    setDefintioninEn("");
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
        DefintioninEn,
        DefintioninAc,
        unit: currentUnit.unit,
        lesson: currentLesson.lesson,
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
        DefintioninEn,
        DefintioninAc,
        unit: currentUnit.unit,
        lesson: currentLesson.lesson,
      };
      setenteredWords([...enteredWords, data]);
      dispatch(setsubjectData([...enteredWords, data]));
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
    const { DefintioninEn, DefintioninAc, wordImage } = enteredWords.find(
      (w) => w.id === id
    );
    setDefintioninAc(DefintioninAc);
    setDefintioninEn(DefintioninEn);
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
  const Word = ({ wordData, image }) => {
    let imgUrl = null;
    if (image) {
      imgUrl = `https://gamebasedlearning-ot4m.onrender.com/${image}`;
    } else {
      imgUrl = wordData.previewImage;
    }
    return (
      <div
        className={`${styles.word} bg-slate-200  dark:bg-darkBody hover:bg-slate-300 dark:hover:bg-darkHover rounded-md`}
      >
        <div className={`${styles.info}`}>
          <img src={imgUrl} alt="" />
          <span>{wordData.DefintioninEn}</span>
          <span>{wordData.DefintioninAc}</span>
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
            <span>unit: {currentUnit.unit}</span>
            <span>lesson: {currentLesson.lesson}</span>
            <span>( {currentLesson.title} )</span>
          </div>
          <div className={styles.addWord}>
            <div className={`${styles.image}  dark:border-darkSText`}>
              {previewImage && <img src={previewImage} alt="" />}
              {!previewImage && (
                <label htmlFor="file">
                  <span>
                    {" "}
                    <AddPhotoAlternateIcon color="primary" /> Upload Img
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
                  value={DefintioninEn}
                  onChange={(e) => setDefintioninEn(e.target.value)}
                  className="bg-gray-200 dark:bg-darkBody"
                />
              </div>
              <div className={`${styles.input}`}>
                <label htmlFor="meaning">meaning</label>
                <input
                  type="text"
                  id="meaning"
                  value={DefintioninAc}
                  onChange={(e) => setDefintioninAc(e.target.value)}
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
          <span>{enteredWords.length + oldWords.length} words</span>
          <div
            className={`${styles.enteredData} dark:border-darkSText`}
            id="words"
          >
            <div className={`${styles.oldData}`}>
              {oldWords.map((word) => {
                return (
                  <Word wordData={word} key={word._id} image={word.Image} />
                );
              })}
            </div>
            {enteredWords.map((word) => {
              return <Word wordData={word} key={word._id} />;
            })}
          </div>
        </div>
      </div>
      {React.cloneElement(children)}
    </div>
  );
};

export default SubjectData;
