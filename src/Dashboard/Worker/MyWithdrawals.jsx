import { useForm } from "react-hook-form";
import useGetCoin from "../../Hooks/useGetCoin";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import moment from "moment";
import Swal from "sweetalert2";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import useGetWithdrawalByEmail from "../../Hooks/useGetWithdrawalByEmail";
import useDateFunc from "../../Hooks/useDateFunc";

const MyWithdrawals = () => {
  const [getCoin, isLoading] = useGetCoin();
  const [inputValue, setInputValue] = useState("");
  const [inputCoin, setInputCoin] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [getWithdrawal, loading, refetch] = useGetWithdrawalByEmail();
  const date = useDateFunc();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const isPending = getWithdrawal.find((withdraw) => withdraw.withdrawal_status === "pending");

  const handleChange = (e) => {
    const targetValue = parseInt(e.target.value);
    const convertedDollar = 0.05 * targetValue;
    setInputValue(convertedDollar);
    setInputCoin(e.target.value);
  };
  inputValue;

  const onSubmit = (data) => {
    if (isPending) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "You Have Already a Withdrawal Pending!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    // balance validation
    if (inputCoin > getCoin) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "You Have no Enough Balance",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    // max value Validation
    if (parseInt(inputCoin) > 300) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Value exceeds maximum limit!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    // minValue Validation
    if (parseInt(inputCoin) < 100) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Value below minimum limit!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    // Account no validation
    if (data.account.length !== 11) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Incorrect Account Number!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    const withdrawInfo = {
      withdrawal_coin: inputCoin,
      withdrawal_dollar: inputValue,
      method: data.method,
      account: data.account,
      worker_name: user.displayName,
      worker_email: user.email,
      withdraw_date: moment()._d,
      withdrawal_status: "pending",
    };

    axiosSecure
      .post("/withdrawals", withdrawInfo)
      .then((res) => {
        if (res.data.insertedId) {
          refetch();
          return Swal.fire({
            icon: "success",
            title: "Success",
            text: "Withdrawal request submitted successfully!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((err) => {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <section
      style={{
        background: "url(https://i.ibb.co/28887J6/register.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen"
    >
      <div className=" mx-auto min-h-[calc(100vh-96px)] py-10 flex justify-center gap-5 lg:gap-10 flex-col lg:flex-row items-center ">
        <div className="lg:w-4/5 mx-auto m-4 bg-opacity-70 p-3 lg:p-5 bg-[#fff] rounded-2xl shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] flex text-customPrimary flex-col lg:flex-row">
          {/* Withdrawal Information Section */}
          <div className="lg:w-[500px] text-customPrimary pr-5 border-r border-customPrimary">
            <h2 className="text-center text-xl lg:text-2xl font-semibold mb-5 lg:mb-8 uppercase">Withdrawal Information</h2>

            <div className="space-y-3">
              <p>
                <strong>Conversion Rate:</strong> 20 Coins = 1 Dollar
              </p>

              <p>
                <strong>Your Current Coins:</strong> <span>{getCoin}</span> Coins
              </p>

              <p>
                <strong>Calculation:</strong> Your maximum withdrawal amount is calculated by dividing your total coins by 20.
              </p>

              <p>
                <strong>Example:</strong> If you have 300 coins, you can withdraw a maximum of 15 dollars.
              </p>

              <p className="text-[#a70707]">
                <strong>Minimum Withdrawal Amount:</strong> <span>5</span> Dollars
              </p>

              <p className="text-[#a70707]">
                <strong>Maximum Withdrawal Amount:</strong> <span>15</span> Dollars
              </p>
            </div>
          </div>

          {/* Withdrawal Form section */}
          <div className="flex-1 ml-5">
            <h3 className="text-center text-xl lg:text-2xl font-semibold mb-5 uppercase">Withdraw</h3>

            <div className="lg:w-4/5 mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Withdrawal Coin */}
                <div>
                  <div className="relative flex flex-col items-center">
                    <input
                      onChange={handleChange}
                      type="number"
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50 focus:rounded-lg"
                      placeholder="Withdrawal Coin"
                    />
                  </div>
                </div>

                {/* Withdrawal Amount */}
                <div className="mt-3">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="text"
                      value={`${inputValue > 0 ? `= $${parseFloat(inputValue).toFixed(2)}` : "="}`}
                      disabled
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] bg-[#ffffff] bg-opacity-50 rounded-lg placeholder:text-lg font-semibold"
                      placeholder="="
                    />
                  </div>
                </div>

                {/* Select PaymentSystem */}
                <div className="mt-3">
                  <div className="relative flex flex-col items-center">
                    <select
                      {...register("method", { required: true })}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none  focus:bg-[#ffffff] focus:bg-opacity-50 focus:rounded-lg"
                    >
                      <option value="">Select Method</option>
                      <option value="Bkash">Bkash</option>
                      <option value="Nagad">Nagad</option>
                      <option value="Rocket">Rocket</option>
                    </select>
                  </div>
                  {errors.method && <span className="text-[#ff0000]">This field is required</span>}
                </div>

                {/* Account Number */}
                <div className="mt-3">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="number"
                      {...register("account", { required: true })}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50 focus:rounded-lg"
                      placeholder="Account Number"
                    />
                  </div>
                  {errors.account && <span className="text-[#ff0000]">This field is required</span>}
                </div>

                {/* Submit Button */}
                <div className="my-8">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-[#fff] bg-[#333] hover:bg-[#222] focus:outline-none"
                  >
                    withdraw now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WithDrawals History */}

      <div className="lg:w-4/5 lg:-translate-y-24 mx-auto bg-opacity-70 p-3 lg:p-5 bg-[#fff] rounded-2xl shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] text-customPrimary ">
        <div>
          <h3 className="text-2xl lg:text-4xl font-bold text-center">Payment History</h3>
        </div>

        <div className="mt-10">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-customSecondary whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Transition Id</th>
                <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">Withdrawal Coin</th>
                <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">
                  Withdrawal Amount
                </th>
                <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Withdrawal Date</th>
                <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Payment System</th>
                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Account Number</th>
                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {getWithdrawal.map((withdraw) => (
                <tr key={withdraw._id}>
                  <td className="px-4 py-4 text-start text-sm text-gray-800">{withdraw._id}</td>
                  <td className="px-4 py-4 text-center text-sm text-gray-800 ">{withdraw.withdrawal_coin}</td>
                  <td className="px-4  py-4 text-center text-sm text-gray-800">{withdraw.withdrawal_dollar}</td>
                  <td className="px-4 py-4 text-start text-sm text-gray-800">{date(withdraw.withdraw_date)}</td>
                  <td className="px-4 py-4 text-start text-sm text-gray-800">{withdraw.method}</td>
                  <td className="px-4 py-4 text-center text-sm text-gray-800">{withdraw.account}</td>
                  <td className=" text-center text-sm font-bold">
                    <span
                      className={`${
                        withdraw.withdrawal_status === "pending"
                          ? "bg-[#e6dc21] text-[#f7a501] border-[#f7b101]"
                          : "bg-[#65d06c] text-[#047c18] border-[#047c18]"
                      }   px-6 py-2 rounded-full border bg-opacity-4`}
                    >
                      {withdraw.withdrawal_status}
                    </span>
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

export default MyWithdrawals;
