import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { toast } from "react-hot-toast";

const useUpdateTask = (_id, newData) => {
  const apiClient = new ApiClient("/task/tasks/" + _id);
  const queryClient = useQueryClient();
  const { mutate, error, isLoading } = useMutation({
    mutationFn: () => apiClient.post(newData),
    onSuccess: (res, bodyReq) => {
      toast.success("Task Updated Successfully");
      // queryClient.setQueriesData(["tasks", _id], (tasks) => [
      //   ...tasks.map((task) => {
      //     if (task._id === _id) {
      //       return { ...task, ...bodyReq };
      //     }
      //     return task;
      //   }),
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

export default useUpdateTask;
