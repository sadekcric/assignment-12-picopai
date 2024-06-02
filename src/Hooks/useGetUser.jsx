import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: getUser = {}, isLoading } = useQuery({
    queryKey: ["getUser", user.email],
    queryFn: async () => {
      const findUser = await axiosSecure.get(`/users/${user.email}`);
      const userData = findUser.data;

      return userData;
    },
  });

  return [getUser, isLoading];
};

export default useGetUser;
