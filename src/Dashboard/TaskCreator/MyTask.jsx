import SectionTitle from "../../Component/SectionTitle";
import useDateFunc from "../../Hooks/useDateFunc";
import useTaskByEmail from "../../Hooks/useTaskByEmail";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyTask = () => {
  const [getTask, isLoading, refetch] = useTaskByEmail();
  const date = useDateFunc();
  const axiosSecure = useAxiosSecure();

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/tasks/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Deleted!",
              text: err.message,
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <section>
      <SectionTitle
        title={"Running Task List"}
        description={"View and manage all tasks you have added, including editing, updating, and deleting tasks as needed."}
      />

      <div>
        <table className="lg:w-4/5 w-full mx-auto border divide-y divide-gray-200">
          <thead className="bg-customSecondary whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Task Title</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Task Count</th>
              <th className="px-4 py-4 text-center text-xs font-semibold text-customPrimary uppercase tracking-wider">Payable Amount</th>
              <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Create Date</th>
              <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Completion Date</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Update</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Delete</th>
            </tr>
          </thead>

          <tbody className="bg-[#fff] divide-y divide-gray-200 whitespace-nowrap">
            {getTask.map((task) => (
              <tr key={task._id}>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{task.title}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{task.quantity}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{task.payable}</td>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{date(task.createTime)}</td>
                <td className="px-4 py-4 text-start text-sm text-gray-800">{date(task.completionDate)}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">
                  <button className="text-xl text-[#078017]">
                    <FaEdit />
                  </button>
                </td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">
                  <button onClick={() => handleDelete(task._id)} className="text-xl text-[#a73434]">
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

export default MyTask;
