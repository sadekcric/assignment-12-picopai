import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetWorker = () => {
  const axiosSecure = useAxiosSecure();

  const { data = [], isLoading } = useQuery({
    queryKey: ["worker"],
    queryFn: async () => {
      const res = await axiosSecure.get("/worker");
      return res.data;
    },
  });
  return [data, isLoading];
};

export default useGetWorker;
