import { useContext } from "react";
import { AuthContext } from "../Router/AuthProvider";

const useAuth = () => {
  const provider = useContext(AuthContext);

  return provider;
};

export default useAuth;
