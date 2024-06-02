import { Outlet } from "react-router-dom";
import AdminLayout from "../Admin/AdminLayout";
import Navbar from "../Navbar/Navbar";
import Footer from "../../CommonRoute/Footer/Footer";
import TaskCreator from "../TaskCreator/TaskCreator";
import Worker from "../Worker/Worker";
import useAuth from "../../Hooks/useAuth";
import useGetRole from "../../Hooks/useGetRole";

const Dashboard = () => {
  const { user } = useAuth();
  const [role, isLoading] = useGetRole();

  if (isLoading) {
    return;
  }

  return (
    <>
      <div className="bg-primary sticky top-0 py-5 px-3 lg:ml-[250px]">
        <Navbar />
      </div>

      {user && role === "Admin" && (
        <div className="flex min-h-screen">
          <div className="w-[250px] bg-primary fixed top-0 left-0 min-h-screen">
            <AdminLayout />
          </div>

          <div className=" ml-[250px] p-5 flex-1 border-2 border-regular">
            <Outlet />
          </div>
        </div>
      )}

      {user && role === "Task Creator" && (
        <div className="flex min-h-screen">
          <div className="w-[250px] bg-primary fixed top-0 left-0 min-h-screen">
            <TaskCreator />
          </div>

          <div className=" ml-[250px] p-5 flex-1 border-2 border-regular">
            <Outlet />
          </div>
        </div>
      )}

      {user && role === "Worker" && (
        <div className="flex min-h-screen">
          <div className="w-[250px] bg-primary fixed top-0 left-0 min-h-screen">
            <Worker />
          </div>

          <div className=" ml-[250px] p-5 flex-1 border-2 border-regular">
            <Outlet />
          </div>
        </div>
      )}

      <div className="ml-[250px]">
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
