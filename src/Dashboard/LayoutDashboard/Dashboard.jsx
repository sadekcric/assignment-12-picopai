import { Outlet } from "react-router-dom";
import AdminLayout from "../Admin/AdminLayout";
import Navbar from "../Navbar/Navbar";
import Footer from "../../CommonRoute/Footer/Footer";
import TaskCreator from "../TaskCreator/TaskCreator";
import Worker from "../Worker/Worker";
import useAuth from "../../Hooks/useAuth";
import useGetRole from "../../Hooks/useGetRole";
import { RiMenu5Fill } from "react-icons/ri";

const Dashboard = () => {
  const { user } = useAuth();
  const [role, isLoading] = useGetRole();

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
    <>
      <div className="bg-customPrimary z-10 sticky lg:static top-0 py-2 lg:py-3 px-3 lg:ml-[250px]">
        <Navbar />
      </div>

      {user && role === "Admin" && (
        <div className="lg:flex min-h-[calc(100vh-96px)] hidden">
          <div className="w-[250px] bg-customPrimary fixed top-0 left-0 min-h-screen">
            <AdminLayout />
          </div>

          <div className=" ml-[250px] flex-1 border-2 ">
            <Outlet />
          </div>
        </div>
      )}

      {user && role === "Task Creator" && (
        <div className="lg:flex min-h-[calc(100vh-96px)] hidden">
          <div className="w-[250px] bg-customPrimary fixed top-0 left-0 min-h-screen">
            <TaskCreator />
          </div>

          <div className=" ml-[250px] flex-1 border-2 ">
            <Outlet />
          </div>
        </div>
      )}

      {user && role === "Worker" && (
        <div className="lg:flex min-h-[calc(100vh-96px)] hidden">
          <div className="w-[250px] bg-customPrimary fixed top-0 left-0 min-h-screen">
            <Worker />
          </div>

          <div className=" ml-[250px]  flex-1 border-2 ">
            <Outlet />
          </div>
        </div>
      )}

      {/* forMobile */}
      {user && role === "Admin" && (
        <div className="lg:hidden">
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="text-3xl text-customSecondary drawer-button z-20 fixed top-8 left-5">
                <RiMenu5Fill />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

              <div className="menu p-4 w-52 min-h-full bg-customPrimary text-base-content lg:hidden mt-[60px]">
                <AdminLayout />
              </div>
            </div>
          </div>

          <div className="min-h-[calc(100vh-110px)]">
            <Outlet />
          </div>
        </div>
      )}

      {user && role === "Task Creator" && (
        <div className="lg:hidden">
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="text-3xl text-customSecondary drawer-button z-20 fixed top-8 left-5">
                <RiMenu5Fill />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

              <div className="menu p-4 w-52 min-h-full bg-customPrimary text-base-content lg:hidden mt-[60px]">
                <TaskCreator />
              </div>
            </div>
          </div>

          <div className="min-h-[calc(100vh-110px)]">
            <Outlet />
          </div>
        </div>
      )}

      {user && role === "Worker" && (
        <div className="lg:hidden">
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="text-3xl text-customSecondary drawer-button z-20 fixed top-8 left-5">
                <RiMenu5Fill />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

              <div className="menu p-4 w-52 min-h-full bg-customPrimary text-base-content lg:hidden mt-[60px]">
                <Worker />
              </div>
            </div>
          </div>

          <div className="min-h-[calc(100vh-110px)]">
            <Outlet />
          </div>
        </div>
      )}

      <div className="lg:ml-[250px]">
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
