import { Link, NavLink, useNavigate } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { BsCashCoin } from "react-icons/bs";
import coin from "../../assets/coin.png";

const Header = () => {
  const [active, setActive] = useState(false);
  const { user, logout } = useAuth();
  const [availableCoin, setAvailableCoin] = useState(false);
  const navigate = useNavigate();

  const userActiveLink = ({ isActive }) =>
    isActive
      ? "text-primary py-3 rounded-lg px-6 border-2 bg-secondary border-secondary"
      : "text-secondary py-3 rounded-lg px-6 border-2 border-secondary";

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
              {user ? (
                <>
                  <li className="-translate-x-24">
                    <NavLink to="/dashboard/user" className={userActiveLink}>
                      <button>Dashboard</button>
                    </NavLink>
                  </li>

                  <li className="-translate-x-20">
                    <button
                      onClick={() => setAvailableCoin(true)}
                      className={`bg-success min-w-[71px] overflow-hidden px-9 rounded-lg py-3 text-primary text-xl ${
                        availableCoin
                          ? "scale-0 -z-10 opacity-0 duration-1000 transition"
                          : "scale-100 z-10 duration-1000 opacity-100 transition"
                      }`}
                    >
                      <span>
                        <BsCashCoin />
                      </span>
                    </button>
                  </li>

                  <li className="-translate-x-20">
                    <button
                      onClick={() => setAvailableCoin(false)}
                      className={`bg-[#000] px-6 -translate-x-[108px] rounded-lg py-3 text-primary text-xl ${
                        availableCoin
                          ? "scale-100 translate-y-0 z-10 opacity-100 duration-1000 transition"
                          : "scale-0 translate-y-3 -z-10 opacity-0 duration-700 transition"
                      } flex items-center gap-1`}
                    >
                      <span className="text-lg font-extrabold ">
                        <img src={coin} className="w-6" alt="" />
                      </span>
                      <span className="text-sm font-bold text-[#FEC638] ">185</span>
                    </button>
                  </li>

                  <li className="-translate-x-24">
                    <img src={user.photoURL} className="w-12 h-12 border-4 border-secondary rounded-full -translate-x-20" alt="" />
                  </li>

                  <li>
                    <button
                      onClick={() => {
                        logout().then(() => navigate("/"));
                      }}
                      className={`bg-secondary rounded  text-primary px-6 py-[10px] font-semibold  border-secondary -translate-x-20 border-2`}
                    >
                      {" "}
                      log out
                    </button>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
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
