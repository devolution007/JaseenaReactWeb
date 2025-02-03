import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "swiper/css";
import "yet-another-react-lightbox/styles.css";

const images = [
  "https://magnetmakerz.com/wp-content/uploads/2025/01/15-Tobacco-768x960-1.jpg",
  "https://magnetmakerz.com/wp-content/uploads/2025/01/09_9PM-768x960-1.jpg",
  "https://magnetmakerz.com/wp-content/uploads/2025/01/07_TributeBlue-768x960-1.jpg",
  "https://magnetmakerz.com/wp-content/uploads/2025/01/6.1-768x1365-1.png",
  "https://magnetmakerz.com/wp-content/uploads/2025/01/Sharaf-Blend-768x608-1.jpg",
  "https://magnetmakerz.com/wp-content/uploads/2025/01/25_Souvenir-White-768x960-1.jpg",
  "https://magnetmakerz.com/wp-content/uploads/2025/01/18_VioletBouquet-768x960-1.jpg",
];

const FeaturedProducts = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setIndex(swiper.realIndex);
  };

  return (
    <div className="w-full py-10">
      <h2
        className="text-yellow-400 uppercase text-center text-[25px] sm:text-[40px] font-[Calibri] font-semibold sm:font-bold my-[30px] sm:my-[100px]"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="400"
      >
        Featured Products
      </h2>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5} // Keeping only 3 visible slides
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // autoplay={false}
        spaceBetween={20}
        modules={[Autoplay]}
        className="w-full"
        onSlideChange={handleSlideChange}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="relative group flex justify-center">
            <div
              className={`relative overflow-hidden rounded-[25px] cursor-pointer border-[3px] border-transparent transition-all duration-300 border-yellow-400 ${
                index === i ? "scale-100 opacity-1" : "scale-90 opacity-60"
              }`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={image}
                alt={`Product ${i + 1}`}
                className="w-full h-[350px] object-cover transition-all duration-300 transform group-hover:scale-110 "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={index}
      />
    </div>
  );
};

export default FeaturedProducts;
