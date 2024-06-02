import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Logo from "../../Component/Logo";
import { FaTasks } from "react-icons/fa";
import { MdAssignmentTurnedIn } from "react-icons/md";

const Worker = () => {
  const activeNav = ({ isActive }) => (isActive ? "text-regular" : "text-secondary");

  return (
    <div>
      <div className="flex justify-center mt-10">
        <Logo />
      </div>

      <div className="mt-12 font-semibold flex justify-center  text-secondary">
        <div className="space-y-3">
          <div>
            <NavLink to="/dashboard/worker-home" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <IoHome />
                </span>
                <span>Home</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/worker-tasklist" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <FaTasks />
                </span>
                <span>Task list</span>
              </div>
            </NavLink>
          </div>

          <div>
            <NavLink to="/dashboard/my-submission" className={activeNav}>
              <div className="flex gap-2 items-center text-lg">
                <span>
                  <MdAssignmentTurnedIn />
                </span>
                <span>My submission</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worker;
