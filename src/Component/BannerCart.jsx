import { Link } from "react-router-dom";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const BannerCart = ({ background, title1, highlight, title2, description }) => {
  return (
    <div className="relative w-full  h-[calc(100vh-80px)] overflow-hidden">
      <video muted loop autoPlay className="w-full ">
        <source src={background} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full bg-[#000000] h-full bg-opacity-75"></div>

      <div className="absolute p-3 lg:w-2/3 text-center   text-[#ffff] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] space-y-5 lg:space-y-8">
        <h1 className="text-2xl md:text-4xl lg:text-7xl leading-relaxed font-bold tracking-widest">
          <span className="mb-3 inline-block">
            {title1} <span className="text-[#15F5BA]">{highlight}</span>
          </span>{" "}
          <br /> {title2}
        </h1>

        <p className="text-lg md:text-xl  mx-auto">{description}</p>

        <Link to={"/register"} className="inline-block">
          <Button button={"SIGN UP"} />
        </Link>
      </div>
    </div>
  );
};

export default BannerCart;
