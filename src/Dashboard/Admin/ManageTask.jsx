import { MdDelete } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useGetAllTask from "../../Hooks/useGetAllTask";
import { RiKanbanView } from "react-icons/ri";

const ManageTask = () => {
  const [getTask, isLoading] = useGetAllTask();

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

  console.log(getTask);

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <section className="bg-customGray min-h-screen bg-fixed py-10 lg:py-24">
      <div className="bg-[#fff] lg:p-10 p-3 lg:w-4/5 mx-auto  border-4 border-customSecondary rounded-lg">
        <table className="  w-full border  divide-y divide-gray-200 ">
          <thead className="bg-customSecondary whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Task Title</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Task Creator</th>
              <th className="px-4 py-4 text-center text-xs font-semibold text-customPrimary uppercase tracking-wider">Task Count</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Coin Needed</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Availability</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">View Task</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Delete</th>
            </tr>
          </thead>

          <tbody className="bg-[#fff] divide-y divide-gray-200 whitespace-nowrap">
            {getTask.map((task) => (
              <tr key={task._id}>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{task.title}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{task.creator}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{task.quantity}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{task.quantity * task.payable}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">
                  {task.quantity * task.payable > 0 ? (
                    <FaCheck className="inline text-success font-semibold" />
                  ) : (
                    <HiMiniXMark className="inline font-semibold text-[#c20f0f] text-xl" />
                  )}
                </td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">
                  <button>
                    <Link to={`/dashboard/update/${task._id}`} className="text-xl  text-[#078017]">
                      <RiKanbanView />
                    </Link>
                  </button>
                </td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">
                  <button onClick={() => handleDelete(task._id)} className="text-xl text-[#c20f0f]">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageTask;
