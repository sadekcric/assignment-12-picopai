import { Helmet } from "react-helmet-async";
import HomeState from "../../Component/HomeState";
import { MdOutlinePendingActions } from "react-icons/md";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdSdStorage } from "react-icons/md";

const TaskCreatorHome = () => {
  const info = {
    logo1: <PiHandCoinsFill />,
    logo2: <MdOutlinePendingActions />,
    logo3: <MdSdStorage />,

    title1: "Available Coin",
    title2: "Pending Task",
    title3: "Total Quantity",

    value1: "1000",
    value2: "50",
    value3: "10",
  };
  return (
    <div>
      <Helmet>
        <title>picopai | task creator home</title>
      </Helmet>

      <div className="mt-10 lg:mt-24">
        <HomeState info={info} />
      </div>
    </div>
  );
};

export default TaskCreatorHome;
