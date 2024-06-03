import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllTask = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allTask = [], isLoading } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");

      return res.data;
    },
  });

  return [allTask, isLoading];
};

export default useGetAllTask;
