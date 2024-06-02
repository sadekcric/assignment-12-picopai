import { Outlet } from "react-router-dom";
import AdminLayout from "../Admin/AdminLayout";
import Navbar from "../Navbar/Navbar";
import Footer from "../../CommonRoute/Footer/Footer";
import TaskCreator from "../TaskCreator/TaskCreator";

const Dashboard = () => {
  let taskCreator = true;
  let admin = false;
  return (
    <>
      <div className="bg-primary sticky top-0 py-5 px-3 lg:ml-[300px]">
        <Navbar />
      </div>

      {admin && (
        <div className="flex min-h-screen">
          <div className="w-[300px] bg-primary fixed top-0 left-0 min-h-screen">
            <AdminLayout />
          </div>

          <div className=" ml-[300px] p-5 flex-1 border-2 border-regular">
            <Outlet />
          </div>
        </div>
      )}

      {taskCreator && (
        <div className="flex min-h-screen">
          <div className="w-[300px] bg-primary fixed top-0 left-0 min-h-screen">
            <TaskCreator />
          </div>

          <div className=" ml-[300px] p-5 flex-1 border-2 border-regular">
            <Outlet />
          </div>
        </div>
      )}

      <div className="ml-[300px]">
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
