import { Link } from "react-router-dom";
import error from "../assets/error.jpg";
import { Helmet } from "react-helmet-async";

const Error = () => {
  return (
    <div className="h-screen w-full relative">
      <Helmet>
        <title>picopai | Error</title>
      </Helmet>
      <img src={error} className="w-full h-full" alt="" />
      <div className="absolute bg-customPrimary text-customSecondary px-10 py-3 rounded-lg font-semibold top-[60%] left-[50%] -translate-x-[50%] ">
        <Link to="/"> Home Page</Link>
      </div>
    </div>
  );
};

export default Error;
