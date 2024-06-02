import { NavLink } from "react-router-dom";
import Logo from "../../Component/Logo";
import { IoHome } from "react-icons/io5";

const TaskCreator = () => {
  const activeNav = ({ isActive }) => (isActive ? "text-regular" : "text-secondary");

  return (
    <div>
      <div className="flex justify-center mt-10">
        <Logo />
      </div>
      <div className="mt-12 font-semibold flex justify-center  text-secondary">
        <div className="space-y-3">
          <div>
            <NavLink to="/dashboard/task-creator-home" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Task creator home</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/add-task" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Add new task</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/my-task" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>My task</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/purchase-coin" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Purchase Coin</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/payment-history" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Payment history</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCreator;
