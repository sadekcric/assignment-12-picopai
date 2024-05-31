import slider1 from "../../assets/slider1.mp4";
import slider2 from "../../assets/slider2.mp4";
import slider3 from "../../assets/slider3.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import BannerCart from "../../Component/BannerCart";

const Banner = () => {
  return (
    <>
      <Swiper pagination={true} autoplay={true} modules={[Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <BannerCart
            background={slider1}
            title1={"Boost Your"}
            highlight={"Earnings"}
            title2={"with PicoPay"}
            description={
              " Discover a world of opportunities with PicoPay. Complete simple tasks and watch your earnings grow. Start now and turn your spare time into extra income!"
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerCart
            background={slider2}
            title1={"Fast and Easy"}
            highlight={"Micro-Tasks"}
            title2={"with PicoPay"}
            description={
              " Join our community of task doers on PicoPay and earn money by completing quick and easy tasks. Whether you have a few minutes or a few hours, there’s always something you can do to earn cash."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <BannerCart
            background={slider3}
            title1={"Flexible Work,"}
            highlight={"Real Rewards"}
            title2={"on PicoPay"}
            description={
              " Discover a world of opportunities with PicoPay. Complete simple tasks and watch your earnings grow. Start now and turn your spare time into extra income!"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
