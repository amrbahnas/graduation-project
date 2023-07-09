import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { useSelector } from "react-redux";

const useQuestionData = (body) => {
  const { _id } = useSelector((store) => store.userSlice);
  const apiClient = new ApiClient("/FSE/TakeData/" + _id);
  return useQuery({
    queryKey: ["SUBJECTData", _id],
    queryFn: () => apiClient.post(body),
    staleTime: 1000 * 60 * 1, // 1 minutes
  });
};

export default useQuestionData;
