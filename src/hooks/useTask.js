import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const useTask = (_id) => {
  const apiClient = new ApiClient("/task/tasks/" + _id);
  return useQuery({
    queryKey: ["tasks", _id],
    queryFn: () => apiClient.get(),
    staleTime: 1000 * 60 * 1, // 1 minutes
  });
};

export default useTask;
