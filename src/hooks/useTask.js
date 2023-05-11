import useGet from "./useGet";

const useTask = (_id) => {
  return useGet("/task/tasks/" + _id);
};

export default useTask;