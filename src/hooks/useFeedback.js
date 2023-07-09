import { useParams } from "react-router-dom";
import ApiClient from "../services/api-client";

const useFeedback = (taskID) => {
  const { _id } = useParams();
  const apiclient = new ApiClient("/feedback/" + _id + "/" + taskID);
  return useQuery({
    queryKey: ["tasks", _id],
    queryFn: () => apiclient.get(),
    staleTime: 1000 * 60 * 1, // 1 minutes
  });
};

export default useFeedback;
