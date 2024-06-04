import { useLoaderData, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useTaskByEmail from "../../Hooks/useTaskByEmail";
import Swal from "sweetalert2";

const Update = () => {
  const getTask = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useTaskByEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateProduct = (data) => {
    const updateInfo = {
      title: data.title,
      details: data.details,
      submissionInfo: data.info,
    };

    axiosSecure
      .put(`/tasks/${getTask._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          navigate("/dashboard/my-task");
          Swal.fire({
            icon: "success",
            title: "Updated",
            text: "Successfully Updated!",
            showConfirmButton: false,
            timer: 3000,
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

  return (
    <section>
      <div>
        <div
          className="flex justify-center  items-center  text-[#333] h-full min-h-[calc(100vh-110px)] "
          style={{
            background: "url(https://i.ibb.co/28887J6/register.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="lg:w-1/2 mx-auto m-4 bg-opacity-70 p-3 lg:p-5 bg-[#fff] rounded-2xl shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
            <h2 className="text-customPrimary text-xl lg:text-3xl font-bold text-center my-5">Add New Task</h2>
            {/* add product Form */}
            <form onSubmit={handleSubmit(handleUpdateProduct)}>
              {/* task title  */}
              <div>
                <div className="relative flex flex-col items-center">
                  <input
                    type="text"
                    {...register("title", { required: true })}
                    defaultValue={getTask.title}
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                    placeholder="Task Title"
                  />
                </div>
                {errors.title && <span className="text-[#ff0000]">This field is required</span>}
              </div>

              {/*CompletionDate + Task quantity  */}
              <div className="flex gap-3 mt-3 items-center">
                <div className="flex-1">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="text"
                      value={getTask.completionDate}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none focus:bg-[#ffffff] focus:bg-opacity-50 placeholder:text-[#333]"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="number"
                      value={getTask.quantity}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                      placeholder="Enter Task Quantity"
                    />
                  </div>
                </div>
              </div>

              {/*  Payable Amount + Task Image url */}
              <div className="flex gap-3 mt-3">
                <div className="flex-1">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="number"
                      value={getTask.payable}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                      placeholder="Payable Amount"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <input
                      value={getTask.taskImage}
                      type="text"
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Task Detail*/}
              <div className="mt-3">
                <div className="relative flex flex-col items-center">
                  <textarea
                    rows={3}
                    {...register("details", { required: true })}
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                    placeholder="Task Details"
                    defaultValue={getTask.details}
                  />
                </div>
                {errors.name && <span className="text-[#ff0000]">This field is required</span>}
              </div>

              {/* submission info */}
              <div className="mt-3">
                <div className="relative flex flex-col items-center">
                  <textarea
                    rows={3}
                    {...register("info", { required: true })}
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                    placeholder="Submission Info"
                    defaultValue={getTask.submissionInfo}
                  />
                </div>
                {errors.info && <span className="text-[#ff0000]">This field is required</span>}
              </div>

              <div className="my-8">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-[#fff] bg-[#333] hover:bg-[#222] focus:outline-none"
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
