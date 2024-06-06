import SectionTitle from "../../Component/SectionTitle";
import line from "../../assets/line4.svg";

const HowToWork = () => {
  return (
    <section>
      <SectionTitle title={"How to Work"} description={"Join Picopai: Quick Tasks, Instant Earnings"} />

      <div className="pt-24 pb-28 bg-customPrimary bg-opacity-80 text-[#ffff] overflow-hidden ">
        <div className="">
          <div className="flex flex-col lg:flex-row  lg:gap-0 items-center justify-center">
            <div className="w-full md:w-1/3 p-8">
              <div className="relative text-center">
                <img className="absolute -right-40 top-8 hidden lg:block" src={line} alt="" />

                <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-[#40A578] rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="w-12 h-12 flex items-center justify-center   rounded-full">1</p>
                  </div>
                </div>
                <div className="md:max-w-xs mx-auto">
                  <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal">Register</h3>
                  <p className="font-sans text-white">Sign up quickly with your email to get started.</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-16 lg:hidden">
                <div className="border-l-2 border-dashed h-[100px]"></div>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-8">
              <div className="relative text-center">
                <img className="absolute -right-40 top-8 hidden lg:block" src={line} alt="" />
                <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-[#40A578] rounded-full">
                  {/* <img className="absolute top-0 left-0" src={line} alt=""> */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="w-12 h-12 flex items-center justify-center   rounded-full">2</p>
                  </div>
                </div>
                <div className="md:max-w-xs mx-auto">
                  <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal">Complete Tasks</h3>
                  <p className="font-sans text-white">Choose from a variety of micro-tasks and complete them.</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-16 lg:hidden">
                <div className="border-l-2 border-dashed h-[100px]"></div>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-8">
              <div className="text-center">
                <div className="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-[#D0C9C0] rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="w-12 h-12 flex items-center text-[#000] justify-center   rounded-full">3</p>
                  </div>
                </div>
                <div className="md:max-w-xs mx-auto">
                  <h3 className="mb-5 font-heading text-xl font-bold font-heading leading-normal">Earn Rewards</h3>
                  <p className="font-sans text-white">Receive payments securely and enjoy the rewards you earn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;

// {/* <section classNameName="pt-24 pb-28 bg-white overflow-hidden">
//         <div classNameName="container px-4 mx-auto">
//           <h2 classNameName="mb-5 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight">How Flaro Works</h2>
//           <p classNameName="mb-20 text-lg text-gray-900 text-center font-medium md:max-w-lg mx-auto">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elemen tum.
//           </p>
//           <div classNameName="flex flex-wrap -m-8">
//             {/* cat */}
//             <div classNameName="relative text-center">
//               <img classNameName="absolute -right-40 top-8" src="flaro-assets/images/how-it-works/line4.svg" alt="" />

//               <div classNameName="relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-100 rounded-full">
//                 <div classNameName="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                   <svg width="25" height="24" viewbox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M21.5391 21L15.5391 15M17.5391 10C17.5391 13.866 14.4051 17 10.5391 17C6.67307 17 3.53906 13.866 3.53906 10C3.53906 6.13401 6.67307 3 10.5391 3C14.4051 3 17.5391 6.13401 17.5391 10Z"
//                       stroke="#111827"
//                       stroke-width="2"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>

//               <div classNameName="md:max-w-xs mx-auto">
//                 <h3 classNameName="mb-5 font-heading text-xl font-bold font-heading leading-normal">Choose Package</h3>
//                 <p classNameName="font-sans text-gray-600">Lorem ipsum dolor sit amet, consec tetur adipiscing elit volutpat.</p>

//                 <div classNameName="w-full md:w-1/3 p-8"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
