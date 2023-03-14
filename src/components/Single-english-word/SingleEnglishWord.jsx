import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./SingleEnglishWord.css";
const SingleEnglishWord = ({
  wordData,
  image,
  deleteWord,
  editWordHandler,
}) => {
  let imgUrl = null;
  if (image) {
    imgUrl = "https://gamebasedlearning-ot4m.onrender.com/" + image;
  } else {
    imgUrl = wordData.previewImage;
  }
  return (
    <div className="single-word">
      <div className="info">
        <img src={imgUrl} alt="" />
        <span>{wordData.DefintioninEn}</span>
        <span>{wordData.DefintioninAc}</span>
        <span>{wordData.sentence?.slice(0,10)+".."}</span>
      </div>
      <div className="controlBTN">
        <span onClick={(e) => editWordHandler(wordData._id, e)}>
          <EditIcon />
        </span>
        <span onClick={(e) => deleteWord(wordData._id)}>
          <DeleteForeverIcon />
        </span>
      </div>
    </div>
  );
};

export default SingleEnglishWord;
