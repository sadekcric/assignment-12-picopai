import { SiSololearn } from "react-icons/si";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      {" "}
      <Link to={"/"}>
        <button className="text-2xl font-semibold ubuntu text-secondary flex gap-2 items-center">
          <div>
            <SiSololearn />
          </div>
          <div>
            <span className="text-3xl text-[#15F5BA]">P</span>ico<span className="text-[#15F5BA] text-3xl">P</span>ay
          </div>
        </button>
      </Link>
    </>
  );
};

export default Logo;
