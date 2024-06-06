import { FaUsers } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { PiHandCoinsFill } from "react-icons/pi";
import useGetTotalForAdmin from "../../Hooks/useGetTotalForAdmin";
import useAllWithdrawals from "../../Hooks/useAllWithdrawals";
import useDateFunc from "../../Hooks/useDateFunc";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useGetUser from "./../../Hooks/useGetUser";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const [allTotal, isLoading] = useGetTotalForAdmin();
  const [allWithdraw, isPending, refetch] = useAllWithdrawals();
  const date = useDateFunc();
  const axiosSecure = useAxiosSecure();
  const [, , reload] = useGetUser();

  if (isLoading || isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-customSecondary"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-customPrimary animate-spin"></div>
        </div>
      </div>
    );
  }

  const { totalUser, totalCoin, totalPayment } = allTotal;

  const handlePay = async (email, payCoin) => {
    try {
      const coin = { coin: payCoin };
      const update = await axiosSecure.put(`/pay/${email}`, coin);

      if (update.data.modifiedCount) {
        try {
          const deleteWithdraw = await axiosSecure.delete(`/withdraw/${email}`);

          if (deleteWithdraw.data) {
            console.log(deleteWithdraw.data);
            refetch();
            reload();
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Pay Confirmed!",
              showConfirmButton: false,
              timer: 3000,
            });
          }
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "error",
            text: err.message,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "error",
        text: err.message,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <section className="bg-customGray min-h-screen px-3 py-5 lg:px-10 lg:py-24">
      <Helmet>
        <title>picopai | admin-home</title>
      </Helmet>
      <div className="lg:w-4/5 mx-auto p-3 bg-customPrimary  lg:p-5 rounded-lg">
        <div className="flex gap-5 flex-col justify-between md:flex-row md:gap-3 lg:gap-8">
          <div className="bg-[#FF0066] h-36 w-full rounded-lg flex gap-4 items-center justify-center">
            <div className="text-6xl text-white">
              <FaUsers />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white">{totalUser}</h2>
              <p className="text-xl font-semibold uppercase text-white">Total Users</p>
            </div>
          </div>

          <div className="h-36 bg-[#FE9E2F] w-full rounded-lg flex gap-4 items-center justify-center">
            <div className="text-7xl text-white">
              <RiSecurePaymentFill />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white">{totalPayment}</h2>
              <p className="text-xl font-semibold uppercase text-white">Total Payments</p>
            </div>
          </div>

          <div className="bg-regular h-36 w-full rounded-lg flex gap-4 items-center justify-center">
            <div className="text-7xl text-white ">
              <PiHandCoinsFill />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-white">{totalCoin}</h2>
              <p className="text-xl font-semibold uppercase text-white">Total Coin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-4/5 mx-auto p-3 border-4 border-customPrimary bg-white my-10 py-10 px-5 lg:my-24 lg:p-5 rounded-lg">
        <h2 className="text-center text-4xl font-bold uppercase text-customPrimary mb-10">Withdraw Request</h2>

        <table className="  w-full border  divide-y divide-gray-200 ">
          <thead className="bg-customSecondary whitespace-nowrap">
            <tr>
              <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Worker Name</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Withdrawal Coin</th>
              <th className="px-4 py-4 text-center text-xs font-semibold text-customPrimary uppercase tracking-wider">Withdrawal Amount</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Account no</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Payment Method</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Withdrawal Time</th>
              <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider"></th>
            </tr>
          </thead>

          <tbody className="bg-[#fff] divide-y divide-gray-200 whitespace-nowrap">
            {allWithdraw.map((withdraw) => (
              <tr key={withdraw._id} className="even:bg-gray-200">
                <td className="px-4 py-4 text-start text-sm text-gray-800">{withdraw.worker_name}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{withdraw.withdrawal_coin}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{withdraw.withdrawal_dollar}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{withdraw.account}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{withdraw.method}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">{date(withdraw.withdraw_date)}</td>
                <td className="px-4 py-4 text-center text-sm text-gray-800">
                  <button
                    onClick={() => handlePay(withdraw.worker_email, withdraw.withdrawal_coin)}
                    className="font-semibold px-4 py-1 bg-green-600 text-white rounded-md"
                  >
                    pay
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

export default AdminHome;
