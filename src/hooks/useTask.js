import useGetData from "./useGetData";

const useTask = (_id) => {
  return useGetData("/task/tasks/" + _id);
};

export default useTask;
