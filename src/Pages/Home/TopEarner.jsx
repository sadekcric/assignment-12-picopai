import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import Marquee from "react-fast-marquee";
import SectionTitle from "../../Component/SectionTitle";

const TopEarner = () => {
  const axiosPublic = useAxiosPublic();
  const { data: toper = [] } = useQuery({
    queryKey: ["toper"],
    queryFn: async () => {
      const res = await axiosPublic.get("/toper");
      return res.data;
    },
  });

  return (
    <section>
      <SectionTitle
        title={"Top Earners"}
        description={"Highlights the six workers with the most coins earned, showcasing their Name, Pictures and available coins."}
      />

      <div className="lg:w-4/5 mx-auto">
        <Marquee>
          {toper.map((top) => (
            <div
              key={top._key}
              className="bg-customGray border inline-block w-[400px] overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative mr-5"
            >
              <div className="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                <img src={top.photo} alt="sunglass1" className="h-full w-full object-contain" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-center text-gray-800">{top.name}</h3>
                <h4 className="text-lg text-gray-800 mt-6 text-center font-bold">${top.coin}</h4>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TopEarner;
