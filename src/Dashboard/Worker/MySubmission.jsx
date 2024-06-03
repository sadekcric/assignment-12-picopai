import SectionTitle from "../../Component/SectionTitle";
import useGetWorkerSubmit from "../../Hooks/useGetWorkerSubmit";
import useDateFunc from "./../../Hooks/useDateFunc";

const MySubmission = () => {
  const [getSubmission, isLoading] = useGetWorkerSubmit();
  const date = useDateFunc();

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

  if (!getSubmission.length) {
    return (
      <div className="min-h-[calc(100vh-110px)] flex justify-center items-center">
        <h1 className="text-2xl lg:text-4xl font-bold uppercase text-[#a39f9f]">No Submission Data is Found</h1>
      </div>
    );
  }

  console.log(getSubmission);
  return (
    <section className="bg-">
      <SectionTitle
        title={"Submitted Date & Status"}
        description={"Monitor your submitted tasks, check their current status, and verify completion to stay updated and informed"}
      />

      <div className="overflow-x-auto lg:w-4/5 mx-auto border ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-customSecondary whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Task id</th>
              <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Title</th>
              <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Submission Date</th>
              <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Creator Email</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Payable Amount</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Status</th>
            </tr>
          </thead>

          <tbody className="bg-[#fff] divide-y divide-gray-200 whitespace-nowrap">
            {getSubmission.map((submit) => (
              <tr key={submit._id}>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{submit.task_id}</td>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{submit.title}</td>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{date(submit.current_date)}</td>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{submit.creator_email}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{submit.payable}</td>
                <td className=" text-center text-sm text-[#f7b101] font-bold">
                  <span className="bg-[#e6dc21] px-6 py-2 rounded-full border border-[#f7b101] bg-opacity-20 ">{submit.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MySubmission;
