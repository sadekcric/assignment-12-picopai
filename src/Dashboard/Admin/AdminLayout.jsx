import { NavLink } from "react-router-dom";
import Logo from "../../Component/Logo";
import { IoHome } from "react-icons/io5";

const AdminLayout = () => {
  const activeNav = ({ isActive }) => (isActive ? "text-regular" : "text-customSecondary");

  return (
    <div>
      <div className="flex justify-center mt-6">
        <Logo />
      </div>
      <div className="mt-12 font-semibold flex justify-center  text-customSecondary">
        <div className="space-y-3">
          <div>
            <NavLink to="/dashboard/admin-home" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Admin Home</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/manage-user" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Manage User</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/manage-task" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Manage Task</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
