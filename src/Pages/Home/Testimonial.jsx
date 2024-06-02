import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import TestimonialCart from "../../Component/TestimonialCart";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section>
      <SectionTitle title={"Testimonials"} description={"Insights from Those Who Benefit from Our Platform"} />

      {/* for Pc */}
      <div className=" container mx-auto hidden lg:block">
        <>
          <Swiper slidesPerView={4} spaceBetween={10} centeredSlides={true} freeMode={true} modules={[FreeMode]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <TestimonialCart img={review.img} name={review.name} comment={review.comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>

      {/* for medium device */}
      <div className=" container mx-auto hidden md:block lg:hidden">
        <>
          <Swiper slidesPerView={3} spaceBetween={10} centeredSlides={true} freeMode={true} modules={[FreeMode]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <TestimonialCart img={review.img} name={review.name} comment={review.comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>

      {/* for mobile */}
      <div className=" container mx-auto md:hidden">
        <>
          <Swiper slidesPerView={1} centeredSlides={true} freeMode={true} modules={[FreeMode]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <TestimonialCart img={review.img} name={review.name} comment={review.comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default Testimonial;
