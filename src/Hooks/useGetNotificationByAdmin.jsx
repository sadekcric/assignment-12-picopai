import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetNotificationByAdmin = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["notification-admin"],
    queryFn: async () => {
      const res = await axiosPublic.get("/notification");
      return res.data.reverse();
    },
  });

  return [data, isLoading, refetch];
};

export default useGetNotificationByAdmin;
