import apiClient from "../services/api-client";
import { useSelector } from "react-redux";

const useInsertData = (word) => {
  const { _id } = useSelector((store) => store.userSlice);

  const formdata = new FormData();
  formdata.append("grade", word.stadge);
  formdata.append("subject", word.subjectName);
  formdata.append("number", word.number);
  formdata.append("wordar", word.definitionInAc);
  formdata.append("worden", word.definitionInEn);
  formdata.append("image", word.image, word.image.name);
  formdata.append("sentence", word.sentence);

  const headers = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  apiClient
    .post("/FSE/InsertData/" + _id, body, headers)
    .then((res) => {})
    .catch((err) => {});
};

export default useInsertData;
