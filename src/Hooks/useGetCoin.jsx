import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useGetCoin = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: coin,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["coin", user?.email],
    queryFn: async () => {
      const findUser = await axiosPublic.get(`/users/coin/${user.email}`);
      const UserRole = findUser.data.coin;
      return UserRole;
    },
  });

  return [coin, isLoading, refetch];
};

export default useGetCoin;
