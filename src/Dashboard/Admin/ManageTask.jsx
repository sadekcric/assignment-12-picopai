import useGetAllTask from "../../Hooks/useGetAllTask";

import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

import ManageTaskCart from "./ManageTaskCart";

const ManageTask = () => {
  const [getTask, isLoading, refetch] = useGetAllTask();
  const axiosSecure = useAxiosSecure();

  console.log(getTask);

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
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/tasks/${id}`).then((res) => {
            if (res.data) {
              console.log(res.data);
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <>
      <section className="bg-customGray min-h-screen bg-fixed py-10 lg:py-24">
        <div className="lg:bg-[#fff] lg:p-10 lg:w-4/5 mx-auto  lg:border-4 border-customSecondary lg:rounded-lg overflow-x-scroll">
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
                <ManageTaskCart key={task._id} task={task} handleDelete={handleDelete} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageTask;
