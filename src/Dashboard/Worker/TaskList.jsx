import { Link } from "react-router-dom";
import useGetAllTask from "../../Hooks/useGetAllTask";
import SectionTitle from "./../../Component/SectionTitle";
import { TbCoinYuanFilled } from "react-icons/tb";
import useDateFunc from "../../Hooks/useDateFunc";

const TaskList = () => {
  const [allTask, isLoading] = useGetAllTask();
  const dateFunc = useDateFunc();

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
    <section className="bg-[#eaeaea] ">
      <div className="">
        <SectionTitle
          title={"Choose The Task"}
          description={"Choose the appropriate task based on your skills and interests to contribute effectively and earn rewards."}
        />
      </div>

      <div>
        <div className=" px-4 pb-10 -z-20">
          <div className="max-w-7xl max-md:max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {allTask.map((task) => (
                <div key={task._id} className="bg-[#fff] cursor-pointer rounded overflow-hidden group">
                  <div className="lg:relative overflow-hidden">
                    <img
                      src={task.taskImage}
                      alt="Blog Post 1"
                      className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                    />
                    <div className="px-4 py-2.5 text-[#fff] text-sm tracking-wider bg-customPrimary text-center lg:absolute bottom-0 right-0">
                      {dateFunc(task.completionDate)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#333]">{task.title}</h3>

                    <div className="mt-3 text-customPrimary space-y-1">
                      <p>
                        <span className="font-semibold">Creator:</span> {task.creator}
                      </p>

                      <p className="flex items-center gap-2">
                        <span className="font-semibold">Payable Amount:</span>{" "}
                        <span className=" flex items-center gap-[2px]">
                          <TbCoinYuanFilled />
                          {task.payable}
                        </span>
                      </p>

                      <p>
                        <span className="font-semibold">Task Quantity:</span> {task.quantity}
                      </p>
                    </div>

                    <div className="text-center mt-5">
                      <Link
                        to={`/dashboard/details/${task._id}`}
                        type="button"
                        className="bg-customPrimary text-customSecondary px-6 py-3 rounded-md font-semibold inline-block btn-shadow"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskList;
