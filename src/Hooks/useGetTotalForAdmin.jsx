import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetTotalForAdmin = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["total"],
    queryFn: async () => {
      const res = await axiosSecure.get("/total");
      return res.data;
    },
  });

  return [data, isLoading, refetch];
};

export default useGetTotalForAdmin;
