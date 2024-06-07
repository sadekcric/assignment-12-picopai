import { Helmet } from "react-helmet-async";
import HomeState from "../../Component/HomeState";
import { MdOutlinePendingActions } from "react-icons/md";
import { PiHandCoinsFill } from "react-icons/pi";
import { MdSdStorage } from "react-icons/md";
import useTaskCreatorState from "../../Hooks/useTaskCreatorState";
import useGetSubmitByEmail from "./../../Hooks/useGetSubmitByEmail";
import SubmitTableRow from "./SubmitTableRow";

const TaskCreatorHome = () => {
  const [states, isLoading] = useTaskCreatorState();
  const [submits, loading] = useGetSubmitByEmail();

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

  const { totalPaid, pendingTask, availableCoin } = states;

  // All Submit filtered by Status...if Status === "Pending" submit collection Show the Task Creator UI
  const PendingSubmits = submits.filter((submit) => submit.status === "pending");

  // Task creator State Info
  const info = {
    logo1: <PiHandCoinsFill />,
    logo2: <MdOutlinePendingActions />,
    logo3: <MdSdStorage />,

    title1: "Available Coin",
    title2: "Pending Task",
    title3: "Total Quantity",

    value1: availableCoin,
    value2: pendingTask,
    value3: totalPaid,
  };

  return (
    <div className="bg-customGray min-h-screen bg-fixed space-y-10 lg:space-y-24 pb-10 lg:pb-24">
      <Helmet>
        <title>picopai | task creator home</title>
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
                <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Worker Name</th>
                <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Worker Email</th>
                <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider">Task Title</th>
                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Payable Amount</th>
                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">
                  View Submission
                </th>
                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Approve</th>
                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Reject</th>
              </tr>
            </thead>

            <tbody className="bg-[#fff] divide-y divide-gray-200 whitespace-nowrap">
              {PendingSubmits.map((submit) => (
                <SubmitTableRow key={submit._id} submit={submit} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskCreatorHome;
