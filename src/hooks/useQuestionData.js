import usePost from "./usePost";
import { useSelector } from "react-redux";
const useQuestionData = (body) => {
  const { _id } = useSelector((store) => store.userSlice);
  return usePost("/FSE/TakeData/" + _id, body);
};

export default useQuestionData;
