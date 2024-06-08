import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://picopai-server.vercel.app",
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // axiosSecure interceptors for Request
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");

      config.headers.Authorization = `bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // AxiosSecure Interceptors for response
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
