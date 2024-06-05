import { MdDelete } from "react-icons/md";
import useGetWorker from "../../Hooks/useGetWorker";

const ManageUser = () => {
  const [workers, isLoading] = useGetWorker();

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
                <tr key={worker._id} className="odd:bg-blue-50">
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
                    <select id="">
                      <option value="Admin">{worker.role}</option>
                      <option value="Admin">Admin</option>
                      <option value="Task Creator">Task Creator</option>
                    </select>
                  </td>
                  <td className="p-4 text-sm text-black">{worker.coin}</td>

                  <td className="p-4">
                    <button className="ml-2 text-center text-[red] text-2xl" title="Edit">
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
