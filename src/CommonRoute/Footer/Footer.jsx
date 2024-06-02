import { Link } from "react-router-dom";
import { SiSololearn } from "react-icons/si";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-customPrimary text-customSecondary p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
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
        </div>

        {/* Social Media */}
        <div className="lg:flex lg:items-center">
          <ul className="flex space-x-6">
            {/* facebook */}
            <li>
              <a href="javascript:void(0)" target="blank">
                <div className="w-8">
                  <img src={facebook} className="w-full" alt="" />
                </div>
              </a>
            </li>

            {/* twitter */}
            <li>
              <a href="javascript:void(0)" target="blank">
                <div className="w-8">
                  <img src={twitter} className="w-full" alt="" />
                </div>
              </a>
            </li>

            {/* Linked in */}
            <li>
              <a href="javascript:void(0)" target="blank">
                <div className="w-8">
                  <img src={linkedin} className="w-full" alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-between">
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">
                  Email
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">
                  Phone
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">
                  Address
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Information</h4>
            <ul className="space-y-4">
              <li>
                <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-10">
        © 2023
        <a href="https://readymadeui.com/" target="_blank" className="hover:underline mx-1">
          ReadymadeUI
        </a>
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
