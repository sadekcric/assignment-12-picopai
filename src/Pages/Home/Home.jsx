import Banner from "./Banner";
import Feature from "./Feature";
import HowToWork from "./HowToWork";
import Testimonial from "./Testimonial";
import TopEarner from "./TopEarner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>picopai | home</title>
      </Helmet>
      <Banner />
      <Feature />
      <HowToWork />
      <TopEarner />
      <Testimonial />
    </div>
  );
};

export default Home;
