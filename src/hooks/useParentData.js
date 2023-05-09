import usePostData from "./usePostData";
import { useSelector } from "react-redux";
const useParentData = (body) => {
  const { _id } = useSelector((store) => store.userSlice);
  return usePostData("/FSE/TakeData/" + _id, body);
};

export default useParentData;
