import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useGetNotificationByEmail = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["notificationAll", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/notification/${user?.email}`);

      return res.data.reverse();
    },
  });

  return [data, isLoading, refetch];
};

export default useGetNotificationByEmail;
