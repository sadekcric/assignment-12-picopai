// eslint-disable-next-line react/prop-types
const Navbar = () => {
  return (
    <div className="flex gap-3  justify-between lg:justify-end mr-3 lg:mr-10">
      <div className="lg:hidden drawer-button">button</div>

      <div className="flex gap-3 ">
        <div className="space-y-2 hidden lg:block">
          <div className="border-2 bg-regular h-8 w-24"></div>
          <div className="border-2 bg-regular h-8 w-24"></div>
        </div>

        <div className="space-y-2">
          <div className="border-2 bg-regular h-8 w-24"></div>
          <div className="border-2 bg-regular h-8 w-24"></div>
        </div>

        <div className="border-2 bg-regular h-18 w-24"></div>
      </div>
    </div>
  );
};

export default Navbar;
