import { MdDelete } from "react-icons/md";

const ManageUser = () => {
  return (
    <section className="bg-customGray min-h-screen">
      <div className=" py-10 lg:py-24">
        <div className=" overflow-x-auto rounded-lg border-4 border-customSecondary lg:w-4/5 mx-auto bg-[#fff]">
          <table className="min-w-full  pl-3 lg:pl-10 bg-[#fff]">
            <thead className="whitespace-nowrap bg-customSecondary">
              <tr>
                <th className="pl-4 w-8 hidden lg:inline-block"></th>
                <th className="pl-4 w-8 hidden lg:inline-block"></th>
                <th className="pl-4 w-10">#</th>

                <th className="p-4 text-left text-sm font-semibold text-black">Name</th>
                <th className="p-4 text-left text-sm font-semibold text-black">Role</th>
                <th className="p-4 text-left text-sm font-semibold text-black">Coin</th>

                <th className="p-4 text-left text-sm font-semibold text-black">Action</th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap">
              <tr className="odd:bg-blue-50">
                <td className="pl-4 w-8 hidden lg:inline-block"></td>
                <td className="pl-4 w-8 hidden lg:inline-block"></td>

                <td className="pl-4 w-10">1</td>

                <td className="p-4 text-sm">
                  <div className="flex items-center cursor-pointer w-max">
                    <img src="https://readymadeui.com/profile_4.webp" className="w-9 h-9 rounded-full shrink-0" />
                    <div className="ml-4">
                      <p className="text-sm text-black">Gladys Jones</p>
                      <p className="text-xs text-gray-500 mt-0.5">gladys@example.com</p>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-sm text-black">Admin</td>
                <td className="p-4 text-sm text-black">1000</td>

                <td className="p-4">
                  <button className="ml-2 text-center text-[red] text-2xl" title="Edit">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageUser;
