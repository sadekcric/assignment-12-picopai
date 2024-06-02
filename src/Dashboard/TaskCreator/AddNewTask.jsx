// import { useState } from "react";
import { useForm } from "react-hook-form";
// import DatePicker from "react-datepicker";

const AddNewTask = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = () => {};

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
            <h2 className="text-customPrimary text-xl lg:text-3xl font-bold text-center my-5">Add Product</h2>
            {/* add product Form */}
            <form onSubmit={handleSubmit(handleAddProduct)}>
              {/* task title  */}
              <div>
                <div className="relative flex flex-col items-center">
                  <input
                    type="text"
                    {...register("title", { required: true })}
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
                      type="date"
                      {...register("date", { required: true })}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none focus:bg-[#ffffff] focus:bg-opacity-50 placeholder:text-[#333]"
                    />
                  </div>
                  {errors.date && <span className="text-[#ff0000]">This field is required</span>}
                </div>

                <div className="flex-1">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="number"
                      {...register("quantity", { required: true })}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                      placeholder="Enter Task Quantity"
                    />
                  </div>
                  {errors.quantity && <span className="text-[#ff0000]">This field is required</span>}
                </div>
              </div>

              {/*  Payable Amount + Task Image url */}
              <div className="flex gap-3 mt-3">
                <div className="flex-1">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="number"
                      {...register("payable", { required: true })}
                      className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333] focus:bg-[#ffffff] focus:bg-opacity-50"
                      placeholder="Payable Amount"
                    />
                  </div>
                  {errors.payable && <span className="text-[#ff0000]">This field is required</span>}
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute  top-0  left-0 w-full bg-transparent  py-3 border-b border-[#333] text-[#333] text-sm px-2">
                      Enter Photo
                    </div>
                    <button className="opacity-0 z-10">
                      <input
                        {...register("image", { required: true })}
                        type="file"
                        required
                        className=" block w-full px-10 cursor-pointer py-2"
                      />
                    </button>
                    {errors.image && <span className="text-[#ff0000]">This field is required</span>}
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
                  />
                </div>
                {errors.info && <span className="text-[#ff0000]">This field is required</span>}
              </div>

              <div className="my-8">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-[#fff] bg-[#333] hover:bg-[#222] focus:outline-none"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewTask;
