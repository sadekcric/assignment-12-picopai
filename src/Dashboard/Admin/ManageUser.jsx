import { MdDelete } from "react-icons/md";
import useGetWorker from "../../Hooks/useGetWorker";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [workers, isLoading, refetch] = useGetWorker();
  const axiosSecure = useAxiosSecure();
  // const [role, setRole] = useState("");

  const handleUpdateRole = (event, email) => {
    const role = event.target.value;
    console.log(email);
    console.log(role);
    axiosSecure
      .patch(`/role/${email}`, { role })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

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
          axiosSecure.delete(`/worker/${id}`).then((res) => {
            if (res.data.deletedCount) {
              refetch();
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Worker Deleted Successfully!",
                showConfirmButton: false,
                timer: 3000,
              });
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

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

  return (
    <section className="bg-customGray min-h-screen">
      <div className=" py-10 lg:py-24">
        <div className=" overflow-x-auto rounded-lg border-4 border-customSecondary lg:w-4/5 mx-auto bg-[#fff]">
          <table className="min-w-full  pl-3 lg:pl-10 bg-[#fff]">
            <thead className="whitespace-nowrap bg-customSecondary">
              <tr>
                <th className="pl-4 w-8 hidden lg:inline-block"></th>
                <th className="pl-4 w-10">#</th>

                <th className="p-4 text-left text-sm font-semibold text-black">Name</th>
                <th className="p-4 text-left text-sm font-semibold text-black">Role</th>
                <th className="p-4 text-left text-sm font-semibold text-black">Coin</th>

                <th className="p-4 text-left text-sm font-semibold text-black">Action</th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap">
              {workers.map((worker, index) => (
                <tr key={worker._id} className="even:bg-gray-200">
                  <td className="pl-4 w-8 hidden lg:inline-block"></td>

                  <td className="pl-4 w-10">{index + 1}</td>

                  <td className="p-4 text-sm">
                    <div className="flex items-center cursor-pointer w-max">
                      <img src={worker.photo} className="w-9 h-9 rounded-full shrink-0" />
                      <div className="ml-4">
                        <p className="text-sm text-black">{worker.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{worker.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-sm text-black">
                    <select onChange={(event) => handleUpdateRole(event, worker.email)} id="">
                      <option value="Admin">{worker.role}</option>
                      <option value="Admin">Admin</option>
                      <option value="Task Creator">Task Creator</option>
                    </select>
                  </td>
                  <td className="p-4 text-sm text-black">{worker.coin}</td>

                  <td className="p-4">
                    <button onClick={() => handleDelete(worker._id)} className="ml-2 text-center text-[red] text-2xl" title="Edit">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageUser;
