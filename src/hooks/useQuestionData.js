import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { useSelector } from "react-redux";

const useQuestionData = (body) => {
  const { _id } = useSelector((store) => store.userSlice);
  const apiClient = new ApiClient("/data/TakeData/" + _id);
  return useQuery({
    queryKey: ["SUBJECTData", body.subject, body.grade, _id],
    queryFn: () => apiClient.post(body),
  });
};

export default useQuestionData;
