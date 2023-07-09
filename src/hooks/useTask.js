import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const useTask = (_id) => {
  const apiClient = new ApiClient("/task/tasks/" + _id);
  return useQuery({
    queryKey: ["tasks", _id],
    queryFn: () => apiClient.get(),
    staleTime: 30 * 1000, //  30 seconds
  });
};

export default useTask;
