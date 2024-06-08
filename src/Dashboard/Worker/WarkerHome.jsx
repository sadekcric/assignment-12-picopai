import { Helmet } from "react-helmet-async";
import HomeState from "../../Component/HomeState";
import { GrTask } from "react-icons/gr";
import { PiHandCoinsFill } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import useWorkerState from "../../Hooks/useWorkerState";
import useGetWorkerSubmit from "../../Hooks/useGetWorkerSubmit";
import WorkerSubmitTableRow from "./WorkerSubmitTableRow";

const WarkerHome = () => {
  const [states, isLoading] = useWorkerState();
  const [mySubmits, loading] = useGetWorkerSubmit();

  if (isLoading || loading) {
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

  // My Submit Collection which Task are approved.
  const approvedTasks = mySubmits.filter((submit) => submit.status === "approved");

  return (
    <div className="bg-customGray min-h-screen bg-fixed space-y-10 lg:space-y-24 pb-10 lg:pb-24">
      <Helmet>
        <title>picopai | worker home</title>
      </Helmet>

      <div className="pt-10 lg:pt-24">
        <HomeState info={info} />
      </div>

      {/* Table */}

      <div className="  border-4 border-customPrimary px-5 lg:p-10 rounded-lg lg:w-4/5 mx-auto m-3 bg-white">
        <h3 className="text-xl lg:text-3xl font-bold uppercase text-center pb-10">Task To Review</h3>
        <div className="overflow-x-auto">
          <table className=" w-full mx-auto border divide-y divide-gray-200">
            <thead className="bg-customSecondary whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Task Title</th>

                <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider">Creator Name</th>

                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Payable Amount</th>

                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Status</th>
              </tr>
            </thead>

            <tbody className="bg-[#fff] divide-y divide-gray-200 whitespace-nowrap">
              {approvedTasks.map((submit) => (
                <WorkerSubmitTableRow key={submit._id} submit={submit} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WarkerHome;
