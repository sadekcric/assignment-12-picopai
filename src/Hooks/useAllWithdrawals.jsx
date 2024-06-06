import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllWithdrawals = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allWithdraw"],
    queryFn: async () => {
      const res = await axiosSecure.get("/withdrawals");

      return res.data;
    },
  });
  return [data, isLoading, refetch];
};

export default useAllWithdrawals;
