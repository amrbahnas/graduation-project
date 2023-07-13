import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { toast } from "react-hot-toast";

const useDeleteTask = (_id) => {
  const queryClient = useQueryClient();
  const apiClient = new ApiClient("/task/tasks/" + _id);
  const { mutate, error, isLoading } = useMutation({
    mutationFn: () => apiClient.delete(),
    onSuccess: (res, bodyReq) => {
      toast.success("Task Deleted Successfully");
      // queryClient.setQueriesData(["tasks", _id], (tasks) => [
      //   ...tasks.filter((task) => task._id !== newData._id),
      // ]);
      queryClient.invalidateQueries({
        queryKey: ["tasks", _id],
      });
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });
  return { mutate, error, isLoading };
};

export default useDeleteTask;
