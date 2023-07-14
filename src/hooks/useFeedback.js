import { useParams } from "react-router-dom";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useFeedback = (taskID) => {
  const { _id } = useParams();
  const apiclient = new ApiClient("/feedback/" + _id + "/" + taskID);
  return useQuery({
    queryKey: ["tasksFeedBack", _id, taskID],
    queryFn: () => apiclient.get(),
  });
};

export default useFeedback;
