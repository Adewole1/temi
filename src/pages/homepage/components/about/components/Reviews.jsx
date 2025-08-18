import { Swiper, SwiperSlide } from "swiper/react";
import { Reviews as reviews } from "../../../../../constants";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center self-center text-center max-w-2/3 gap-4 md:gap-8 lg:gap-12 xl:gap-14 min-[90rem]:gap-16">
      <h2 className="text-3xl xl:text-4xl min-[90rem]:text-5xl font-medium">
        Trusted by founders & tech studios
      </h2>
      <div className="relative flex flex-col items-center self-center text-center gap-4 md:gap-8 lg:gap-12 xl:gap-14 min-[90rem]:gap-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          className="testimonials-swiper w-full max-w-3xl h-auto"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          speed={1000}
          pagination={{
            enabled: true,
            clickable: true,
            type: "bullets",
          }}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 group mb-3 lg:mb-8">
                <p className="text-xl xl:text-2xl min-[90rem]:text-3xl">
                  &ldquo;{review.review}&rdquo;
                </p>
                <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="size-16 lg:size-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="flex flex-col gap-0.5 lg:gap-1 capitalize">
                    <p className="text-sm lg:text-base font-medium">
                      {review.name}
                    </p>
                    <p className="text-xs md:text-sm text-zinc-300">
                      {review.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
