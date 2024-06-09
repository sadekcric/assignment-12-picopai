import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../Component/SectionTitle";
import useDateFunc from "../../Hooks/useDateFunc";
import useAuth from "../../Hooks/useAuth";
import moment from "moment";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Countdown from "react-countdown";

const Details = () => {
  const task = useLoaderData();
  const dateFunc = useDateFunc();
  const { user, loader, setLoader } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { title, taskImage, submissionInfo, quantity, payable, email, details, creator, createTime, completionDate, _id } = task;

  // React countDone Implementation
  const currentDate = new Date();
  const futureDate = new Date(task.completionDate);
  const diffDate = futureDate - currentDate;

  const completionTime = Date.now() + diffDate;

  const task_id = _id;
  const worker_email = user.email;
  const worker_name = user.displayName;
  const creator_name = creator;
  const creator_email = email;
  const current_date = moment()._d;
  const status = "pending";

  if (loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-customSecondary"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-customPrimary animate-spin"></div>
        </div>
      </div>
    );
  }

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const submission_details = e.target.submission_Details.value;

    const info = {
      task_id,
      title,
      details,
      taskImage,
      payable: parseInt(payable),
      worker_email,
      submission_details,
      worker_name,
      creator_name,
      creator_email,
      current_date,
      status,
    };

    axiosSecure
      .post("/submits", info)
      .then((res) => {
        if (res.data.insertedId) {
          setLoader(false);
          e.target.reset();
          Swal.fire({
            icon: "success",
            title: "Submitted!",
            text: "Submission successfully submit!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((err) => {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <section>
      <Helmet>
        <title>picopai |task details</title>
      </Helmet>
      <SectionTitle
        title={"View details"}
        description={
          "Provide a comprehensive description of the task, including specific requirements, deadlines, and any relevant guidelines to follow."
        }
      />

      <div>
        <div className=" bg-[#fff]">
          <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                  <img src={taskImage} alt="Product" className="w-4/5 rounded object-cover" />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#333]">{title}</h2>
                  <p className="text-[#333] mt-1 font-semibold">Create: {dateFunc(createTime)}</p>
                  <p className="text-[#333] mt-1 font-semibold">
                    {/* React countdown */}
                    <span>Completion Time: </span>
                    <span className="text-red-500">
                      <Countdown date={completionTime} />
                    </span>
                  </p>
                </div>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="font-semibold underline">Task Details:</p>
                    <p>{details}</p>
                  </div>

                  <div>
                    <p className="font-semibold underline">Submission Info:</p>
                    <p className="">{submissionInfo}</p>
                  </div>
                </div>

                <div className="mt-5 space-y-1">
                  <p>
                    <span className="font-semibold">Task Quantity:</span> {quantity}
                  </p>
                  <p>
                    <span className="font-semibold">Payable Amount:</span> {payable} (coin)
                  </p>
                  <p>
                    <span className="font-semibold">Completion Date:</span> {dateFunc(completionDate)}
                  </p>
                </div>

                <div className="mt-5">
                  <h4 className="font-semibold underline">Task Creator:</h4>
                  <p>
                    <span className="font-semibold">Name:</span> {creator}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {email}
                  </p>
                </div>

                <form onSubmit={handleTaskSubmit}>
                  <textarea
                    name="submission_Details"
                    id=""
                    placeholder="Submission Details..."
                    className="border border-customPrimary w-full mt-5 px-3 py-1"
                    required
                    rows={4}
                  ></textarea>

                  <div className="flex flex-wrap gap-4 mt-10">
                    <button
                      type="submit"
                      className="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-[#fff] text-sm font-semibold rounded"
                    >
                      Submit Task
                    </button>
                    <button
                      type="button"
                      className="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-semibold rounded"
                    >
                      <Link to={"/dashboard/worker-tasklist"}>Add to cart</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
