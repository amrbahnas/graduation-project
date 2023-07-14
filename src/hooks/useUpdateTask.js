import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { _id: childId } = useParams();

  const { mutate, error, isLoading } = useMutation({
    mutationFn: ({ _id, newData }) => {
      const apiClient = new ApiClient("/updateTask/:taskId/" + _id);
      return apiClient.post({ newData });
    },
    onSuccess: () => {
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
        queryKey: ["tasks", childId],
      });
    },
    onError: (err) => {
      toast.error("Something went wrong");
    },
  });

  return { mutate, error, isLoading };
};

export default useUpdateTask;
