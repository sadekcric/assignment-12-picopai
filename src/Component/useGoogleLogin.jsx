import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const useGoogleLogin = () => {
  const { googleLogin, setLoader } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    googleLogin()
      .then(() => {
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
