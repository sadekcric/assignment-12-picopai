/* eslint-disable react/prop-types */

const HomeState = ({ info }) => {
  const { logo1, value1, title1, logo2, value2, title2, logo3, value3, title3 } = info;
  return (
    <div className="lg:w-4/5 mx-auto p-3 lg:bg-customPrimary  lg:p-5 rounded-lg">
      <div className="flex gap-5 flex-col justify-between md:flex-row md:gap-3 lg:gap-8">
        <div className="bg-[#FF0066] lg:h-36 h-24 w-full rounded-lg flex gap-4 items-center justify-center">
          <div className="lg:text-6xl text-4xl text-white">{logo1}</div>
          <div>
            <h2 className="lg:text-5xl text-3xl font-bold text-white">{value1}</h2>
            <p className="text-xl font-semibold uppercase text-white">{title1}</p>
          </div>
        </div>

        <div className="lg:h-36 h-24  bg-[#FE9E2F] w-full rounded-lg flex gap-4 items-center justify-center">
          <div className="lg:text-7xl text-4xl text-white">{logo2}</div>
          <div>
            <h2 className="lg:text-5xl text-3xl font-bold text-white">{value2}</h2>
            <p className="text-xl font-semibold uppercase text-white">{title2}</p>
          </div>
        </div>

        <div className="bg-regular lg:h-36 h-24  w-full rounded-lg flex gap-4 items-center justify-center">
          <div className="lg:text-7xl text-4xl text-white ">{logo3}</div>
          <div>
            <h2 className="lg:text-5xl text-3xl font-bold text-white">{value3}</h2>
            <p className="text-xl font-semibold uppercase text-white">{title3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeState;
