import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { _id: childId } = useParams();
  const { mutate, error, isLoading } = useMutation({
    mutationFn: (_id) => {
      const apiClient = new ApiClient("/task/deleteTask/" + _id);
      return apiClient.delete();
    },
    onSuccess: () => {
      toast.success("Task Deleted Successfully");
      // queryClient.setQueriesData(["tasks", _id], (tasks) => [
      //   ...tasks.filter((task) => task._id !== newData._id),
      // ]);
      queryClient.invalidateQueries({
        queryKey: ["tasks", childId],
      });
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });
  return { mutate, error, isLoading };
};

export default useDeleteTask;
