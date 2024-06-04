import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useTaskByEmail = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: getTask = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["emailTask", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/get_task/${user.email}`);

      return res.data;
    },
  });
  return [getTask, isLoading, refetch];
};

export default useTaskByEmail;
