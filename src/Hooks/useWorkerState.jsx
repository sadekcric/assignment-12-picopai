import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useWorkerState = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["workerState", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/workerState/${user.email}`);

      return res.data;
    },
  });

  return [data, isLoading, refetch];
};

export default useWorkerState;
