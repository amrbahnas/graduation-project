import useGet from "./useGet";
import { useParams } from "react-router-dom";

const useFeedback = (taskID) => {
  const { _id } = useParams();
  return useGet("/feedback/" + _id + "/" + taskID);
};

export default useFeedback;
