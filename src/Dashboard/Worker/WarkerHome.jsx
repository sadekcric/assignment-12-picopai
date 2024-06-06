import { Helmet } from "react-helmet-async";
import HomeState from "../../Component/HomeState";
import { GrTask } from "react-icons/gr";
import { PiHandCoinsFill } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";

const WarkerHome = () => {
  // worker home page State
  const info = {
    logo1: <PiHandCoinsFill />,
    logo2: <GrTask />,
    logo3: <FaSackDollar />,

    title1: "Available Coin",
    title2: "Total Submission",
    title3: "Total Earning",

    value1: "1000",
    value2: "50",
    value3: "10",
  };

  return (
    <div>
      <Helmet>
        <title>picopai | worker home</title>
      </Helmet>

      <div className="mt-10 lg:mt-24">
        <HomeState info={info} />
      </div>
    </div>
  );
};

export default WarkerHome;
