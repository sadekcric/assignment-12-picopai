import { Helmet } from "react-helmet-async";
import HomeState from "../../Component/HomeState";
import { GrTask } from "react-icons/gr";
import { PiHandCoinsFill } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import useWorkerState from "../../Hooks/useWorkerState";

const WarkerHome = () => {
  const [states, isLoading] = useWorkerState();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-customSecondary"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-customPrimary animate-spin"></div>
        </div>
      </div>
    );
  }

  const { totalEarning, submission, availableCoin } = states;

  // worker home page State
  const info = {
    logo1: <PiHandCoinsFill />,
    logo2: <GrTask />,
    logo3: <FaSackDollar />,

    title1: "Available Coin",
    title2: "Total Submission",
    title3: "Total Earning",

    value1: availableCoin,
    value2: submission,
    value3: totalEarning,
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
