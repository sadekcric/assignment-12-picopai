import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const useGoogleLogin = () => {
  const { googleLogin, setLoader } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleLogin = () => {
    googleLogin()
      .then(({ user }) => {
        const userInfo = { name: user.displayName, email: user.email, role: "Worker", coin: 10, photo: user?.photoURL };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => console.log(res.data))
          .catch((err) => {
            setLoader(false);
            Swal.fire({
              icon: "error",
              title: err.message,
              showConfirmButton: false,
              timer: 3000,
            });
          });
        navigate("/dashboard");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Login Successful!",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((err) => {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
  return handleLogin;
};

export default useGoogleLogin;
