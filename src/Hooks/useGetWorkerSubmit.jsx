import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetWorkerSubmit = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: getSubmission,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getSubmission", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`submits/${user.email}`);
      return res.data;
    },
  });

  return [getSubmission, isLoading, refetch];
};

export default useGetWorkerSubmit;
