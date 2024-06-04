import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetWithdrawalByEmail = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: getWithdrawal = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["withdraw", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/withdrawals/${user.email}`);

      return res.data;
    },
  });

  return [getWithdrawal, loading, refetch];
};

export default useGetWithdrawalByEmail;
