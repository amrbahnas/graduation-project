import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

const useTasks = (_id) => {
  const apiClient = new ApiClient("/task/tasks/" + _id);
  return useQuery({
    queryKey: ["tasks", _id],
    queryFn: () => apiClient.get(),
  });
};

export default useTasks;
