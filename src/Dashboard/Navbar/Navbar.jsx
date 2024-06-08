import { useEffect, useState } from "react";
import useGetUser from "../../Hooks/useGetUser";
import coin from "../../assets/coin.png";
import { IoMdNotifications } from "react-icons/io";
import useGetNotificationByAdmin from "../../Hooks/useGetNotificationByAdmin";
import useGetNotificationByEmail from "../../Hooks/useGetNotificationByEmail";
import useDateFunc from "../../Hooks/useDateFunc";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const [getUser] = useGetUser();
  const [activeNotification, setActiveNotification] = useState(false);
  const [notification, setNotification] = useState([]);
  const date = useDateFunc();

  // get Notification Show
  const [adminNotification, , refetchAdmin] = useGetNotificationByAdmin();
  const [allNotification, , refetchEmail] = useGetNotificationByEmail();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (getUser.role === "Admin") {
      setNotification(adminNotification);
    } else {
      setNotification(allNotification);
    }
  }, [getUser, adminNotification, allNotification]);

  const handleNotification = () => {
    setActiveNotification(!activeNotification);
    axiosPublic
      .patch(`/notification/status/${getUser.email}`, { status: "read" })
      .then((res) => {
        if (res.data) {
          refetchAdmin();
          refetchEmail();
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const notificationStatusCheck = notification?.filter((n) => n.status === "unread");

  return (
    <div className="flex gap-3  justify-between lg:justify-end mr-3 lg:mr-10">
      <div className="lg:hidden drawer-button">button</div>

      <div className="flex gap-3 ">
        <div className="lg:border-[#FEA832] lg:shadow-[#FEA832] lg:border-opacity-30 lg:border-t-[1px]  lg:shadow-md lg:pt-3 lg:pb-2 lg:px-3">
          <div className="space-y-2  flex justify-center flex-col items-center">
            <div className="bg-[#5d7788] shadow-sm shadow-[#FEA832] text-[#FEA832]  font-semibold rounded-xl pt-1 border-b-2 border-[#FEA832] h-16 w-36">
              <div className="justify-center pb-[2px]  text-center text-xl flex gap-2 items-center">
                <span>
                  <img src={coin} className="w-8 h-8" alt="" />
                </span>
                <span>{getUser.coin}</span>
              </div>

              <div className=" text-center text-sm  rounded-b-lg">{getUser.role}</div>
            </div>
          </div>
        </div>

        <div className="space-y-2 px-3 pb-2 pt-3 shadow-md border-t-[1px] border-opacity-30 border-regular shadow-regular hidden lg:flex justify-center flex-col items-center">
          <div className="">
            <div className="justify-center pb-[2px] text-xl flex items-center">
              <span>
                <img src={getUser.photo} className="w-12 h-12 rounded-lg border-2 border-regular" alt="" />
              </span>
            </div>

            <div className=" text-center uppercase text-sm pt-1 text-regular rounded-b-lg">{getUser.name}</div>
          </div>
        </div>

        <div className=" relative space-y-2 px-3 pb-2 pt-3 shadow-md border-t-[1px] border-opacity-30 border-regular rounded-lg lg:rounded-none shadow-regular  lg:flex justify-center flex-col items-center">
          {/* Notification Implementation Button */}
          <div>
            <div className="text-center">
              <button onClick={handleNotification} className="justify-center inline-block pb-[2px] relative text-xl ">
                <span className="text-regular lg:text-3xl">
                  <IoMdNotifications />
                </span>
                {notificationStatusCheck?.length > 0 && (
                  <span className="absolute  text-xs bg-red-600 px-[6px] rounded-full text-regular -top-2 lg:top-0 lg:right-0 -right-2">
                    {notificationStatusCheck.length}
                  </span>
                )}
              </button>
            </div>

            <div className=" text-center text-xs lg:text-sm pt-1 text-regular rounded-b-lg uppercase">notification</div>
          </div>

          {/* all Notification Hear============================= */}
          {activeNotification && (
            <div className="lg:w-72 w-[300px] text-sm lg:text-base overflow-y-auto h-[300px] transition bg-customPrimary absolute lg:top-[98px] top-[66px] rounded-b-lg -right-1 text-regular px-3 py-2 border-2 border-regular border-t-0 shadow-md shadow-regular ">
              <ul>
                {notification.map((n) => (
                  <li className="pb-2 border-b mb-2 border-regular" key={n._id}>
                    {n.message}
                    <p className="text-end mt-1">{date(n.date)}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* all Notification Hear============================= */}
        </div>

        {/* <div className=" h-[64px] lg:h-[94px] shadow-md shadow-regular border-t border-regular border-opacity-30 w-24 text-7xl flex items-center justify-center text-regular"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
