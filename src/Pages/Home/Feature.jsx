import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle";

const Feature = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <SectionTitle title={"Features"} description={" Enhancing your micro-tasking experience efficiently."} />

      <div>
        <div className="text-white bg-gradient-to-r from-purple-800 to-indigo-800 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
              {features.map((f) => (
                <div
                  key={f.id}
                  className="rounded-xl group p-8 text-center hover:bg-white hover:text-purple-800 hover:shadow-xl transition duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-3">
                    <img src={f.img} className="w-full " alt="" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-gray-300 group-hover:text-gray-500 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
