import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetSubmitByEmail = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submit/${user.email}`);
      return res.data;
    },
  });

  return [data, isLoading, refetch];
};

export default useGetSubmitByEmail;
