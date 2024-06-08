/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useGetRole from "./../Hooks/useGetRole";
import useGetUser from "../Hooks/useGetUser";

const AdminPrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const [role, isLoading] = useGetRole();
  const [databaseUser, loading] = useGetUser();

  if (loader || isLoading || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-customSecondary"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-customPrimary animate-spin"></div>
        </div>
      </div>
    );
  }

  if (user?.email === databaseUser?.email && role === "Admin") {
    return children;
  }

  return <Navigate to={"/"} />;
};

export default AdminPrivateRoute;
