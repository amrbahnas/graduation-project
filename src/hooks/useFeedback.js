import { useParams } from "react-router-dom";
import ApiClient from "../services/api-client";

const useFeedback = (taskID) => {
  const { _id } = useParams();
  const apiclient = new ApiClient("/feedback/" + _id + "/" + taskID);
  return useQuery({
    queryKey: ["tasks", _id],
    queryFn: () => apiclient.get(),
    staleTime: 30 * 1000, //  30 seconds
  });
};

export default useFeedback;
