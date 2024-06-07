import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTaskCreatorState = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["taskCreatorState", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/task-creator-state/${user.email}`);

      return res.data;
    },
  });

  return [data, isLoading, refetch];
};

export default useTaskCreatorState;
