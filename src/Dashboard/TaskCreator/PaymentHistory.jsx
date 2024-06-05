import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Component/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useDateFunc from "./../../Hooks/useDateFunc";

const PaymentHistory = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const date = useDateFunc();

  const { data = [], isLoading } = useQuery({
    queryKey: ["payment", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);

      return res.data;
    },
  });

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
    <section>
      <SectionTitle
        title={"Payment History"}
        description={"View a detailed record of your past payments, including dates, amounts, and reference numbers."}
      />

      <div className="mb-24">
        <div className="overflow-x-scroll">
          <table className="lg:w-4/5 w-full mx-auto border divide-y divide-gray-200">
            <thead className="bg-customSecondary whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-start text-xs font-semibold text-customPrimary uppercase tracking-wider ">sl</th>

                <th className="px-4 py-4 text-center  text-xs font-semibold text-customPrimary uppercase tracking-wider">transition Id</th>

                <th className="px-4 py-4 text-center text-xs font-semibold text-customPrimary uppercase tracking-wider">Bay Package</th>

                <th className="px-4 py-4 text-start  text-xs font-semibold text-customPrimary uppercase tracking-wider">Payment Date</th>
              </tr>
            </thead>

            <tbody className="bg-[#fff] divide-y divide-gray-200 whitespace-nowrap">
              {data.map((payment, index) => (
                <tr key={payment._id}>
                  <td className="px-4 py-4 text-start text-sm text-gray-800">{index + 1}</td>
                  <td className="px-4 py-4 text-center text-sm text-gray-800">{payment.transactionId}</td>
                  <td className="px-4 py-4 text-center text-sm text-gray-800">{payment.price}</td>
                  <td className="px-4 py-4 text-start text-sm text-gray-800">{date(payment.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;
