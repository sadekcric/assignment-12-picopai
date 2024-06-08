import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetRole = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role = "", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const findUser = await axiosSecure.get(`/users/${user.email}`);
      const UserRole = findUser.data.role;
      return UserRole;
    },
  });

  return [role, isLoading];
};

export default useGetRole;
