import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./SingleEnglishWord.css";
const SingleEnglishWord = ({
  wordData,
  deleteWord,
  editWordHandler,
  singleWordStyle,
  preview,
}) => {
  let imgUrl = null;
  if (wordData.imageUrl) {
    imgUrl = `${import.meta.env.VITE_REACT_SERVER_DOMAIL}/${wordData.imageUrl}`;
  } else {
    imgUrl = wordData.previewImage;
  }
  return (
    <div
      className={`single-word ${
        singleWordStyle
          ? "bg-slate-200  dark:bg-darkBody hover:bg-slate-300 dark:hover:bg-darkHover  shadow-md border"
          : " bg-none hover:bg-none"
      } `}
    >
      <div className="info">
        <img
          src={imgUrl}
          alt=""
          onError={(e) => {
            e.target.src = "/assets/placeholder-image.png";
          }}
        />
        <span>{wordData.definitionInEn}</span>
        <span>{wordData.definitionInAc}</span>
        <span>{wordData.sentence?.slice(0, 20)}</span>
      </div>
      {!preview && (
        <div className="controlBTN">
          <span onClick={(e) => editWordHandler(wordData._id, e)}>
            <EditIcon />
          </span>
          <span onClick={(e) => deleteWord(wordData._id)}>
            <DeleteForeverIcon />
          </span>
        </div>
      )}
    </div>
  );
};

export default SingleEnglishWord;
