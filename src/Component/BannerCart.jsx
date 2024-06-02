import { Link } from "react-router-dom";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const BannerCart = ({ background, title1, highlight, title2, description }) => {
  return (
    <div className="relative w-full  h-[calc(100vh-80px)] overflow-hidden">
      <video muted loop autoPlay className="w-full object-cover h-[calc(100vh-80px)] lg:h-auto">
        <source src={background} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full bg-[#000000] h-full bg-opacity-75"></div>

      <div className="absolute p-3 lg:w-2/3 w-full text-center   text-[#fff] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] space-y-3 lg:space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-7xl  font-bold lg:tracking-widest">
          <span className="md:mb-3 mb-2 inline-block">
            {title1} <span className="text-regular">{highlight}</span>
          </span>{" "}
          <br /> {title2}
        </h1>

        <p className=" md:text-xl  mx-auto">{description}</p>

        <button className="inline-block pt-5">
          <a
            href="https://www.youtube.com/"
            target="blank"
            className={`bg-customSecondary rounded   text-customPrimary px-4 py-3  text-[15px] border-customSecondary border-2`}
          >
            <button className="font-semibold">Watch Demo</button>
          </a>
        </button>
      </div>
    </div>
  );
};

export default BannerCart;
