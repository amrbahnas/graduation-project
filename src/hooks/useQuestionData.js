import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { useSelector } from "react-redux";

const useQuestionData = (body) => {
  const { _id } = useSelector((store) => store.userSlice);
  const apiClient = new ApiClient("/FSE/TakeData/" + _id);
  return useQuery({
    queryKey: ["SUBJECTData", _id],
    queryFn: () => apiClient.post(body),
    staleTime: 30 * 1000, //  30 seconds
  });
};

export default useQuestionData;
