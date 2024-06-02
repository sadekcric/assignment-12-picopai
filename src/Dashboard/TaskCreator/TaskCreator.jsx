import { NavLink } from "react-router-dom";
import Logo from "../../Component/Logo";
import { IoHome } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { RiFolderHistoryFill } from "react-icons/ri";

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
                <span>Your home</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/add-task" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <MdCreateNewFolder />
                </span>
                <span>Add new task</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/my-task" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <RiTaskFill />
                </span>
                <span>My task</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/purchase-coin" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <FaAddressCard />
                </span>
                <span>Purchase Coin</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/payment-history" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <RiFolderHistoryFill />
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
