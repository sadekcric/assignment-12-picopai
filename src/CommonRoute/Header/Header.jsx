import { Link, NavLink } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive
      ? "bg-secondary rounded   text-primary px-4 py-3  text-[15px] border-secondary border-2"
      : "px-4 py-3 text-[15px] rounded border-2 border-secondary text-secondary ";

  return (
    <div className="sticky top-0 z-50">
      <header className="flex shadow-md py-4 px-4 sm:px-10 font-[sans-serif] min-h-[80px] tracking-wide relative z-50 bg-primary text-secondary ">
        <div className="flex flex-wrap items-center gap-5 w-full container mx-auto">
          {/* Logo */}
          <Link to={"/"}>
            <button className="text-2xl font-semibold ubuntu text-white flex gap-2 items-center">
              <div>
                <SiSololearn />
              </div>
              <div>
                <span className="text-3xl text-[#15F5BA]">P</span>ico<span className="text-[#15F5BA] text-3xl">P</span>ay
              </div>
            </button>
          </Link>

          {/* For Computer */}
          <div className="max-lg:hidden lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <ul className="lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 items-center">
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="blank"
                  className={`bg-secondary rounded   text-primary px-4 py-3  text-[15px] border-secondary border-2`}
                >
                  <button className="font-semibold">Watch Demo</button>
                </a>
              </li>

              <li>
                <NavLink to="/register" className={activeLink}>
                  <button className="   font-semibold  ">Sign up</button>
                </NavLink>
              </li>

              <li>
                <NavLink to="/login" className={activeLink}>
                  <button className="font-semibold">Log in</button>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* For mobile and tab  */}
          <div
            className={`${
              active
                ? "lg:hidden absolute translate-y-32 duration-1000 opacity-100 transition right-10 py-10 pl-8 pr-16 bg-primary rounded-b-lg"
                : "lg:hidden absolute -translate-y-72 duration-1000 opacity-0 transition right-10 py-10 pl-8 pr-16 bg-primary rounded-b-lg"
            }`}
          >
            <ul className="space-y-8">
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="blank"
                  className={`bg-secondary rounded   text-primary px-4 py-3  text-[15px] border-secondary border-2`}
                >
                  <button className="font-semibold w-full">Watch Demo</button>
                </a>
              </li>

              <li>
                <NavLink to="/register" className={activeLink}>
                  <button className="   font-semibold  w-full">Sign up</button>
                </NavLink>
              </li>

              <li>
                <NavLink to="/login" className={activeLink}>
                  <button className="font-semibold w-full">Log in</button>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center max-lg:ml-auto space-x-6 lg:hidden">
            <div onClick={() => setActive(!active)} className="text-3xl">
              <IoMenuSharp />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
