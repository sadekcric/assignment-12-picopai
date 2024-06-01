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
  console.log(reviews);

  return (
    <section>
      <SectionTitle title={"Testimonials"} description={"Insights from Those Who Benefit from Our Platform"} />

      <div className="overflow-hidden container mx-auto hidden lg:block">
        <>
          <Swiper slidesPerView={4} spaceBetween={30} freeMode={true} modules={[FreeMode]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <TestimonialCart img={review.img} name={review.name} comment={review.comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>

      <div className="overflow-hidden container mx-auto lg:hidden">
        <>
          <Swiper slidesPerView={1} spaceBetween={30} freeMode={true} modules={[FreeMode]} className="mySwiper">
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
