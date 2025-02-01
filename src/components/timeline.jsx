import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const timelineData = [
  { year: "1975", description: "Established in Singapore" },
  {
    year: "1989",
    description: "Shifted base to UAE to serve Middle East",
  },
  {
    year: "1992",
    description:
      "Diversified business toinclude trading and distribution of well-known watch brands",
  },
  {
    year: "1995",
    description:
      "Launched Louis Arden Watches, our flagship brand, andexpanded to provide 3PL, distribution and DTC solutions",
  },
  {
    year: "1998",
    description: "Launched a retail outlet for perfumes and cosmetics",
  },
  {
    year: "2004",
    description: "Widely expanded our perfumes and fragrances line",
  },
  {
    year: "2007",
    description: "Commenced operations in Qatar",
  },
  {
    year: "2008",
    description: "Commenced operations in Oman",
  },
  {
    year: "2010",
    description: "Launched our distribution network in Africa",
  },
  {
    year: "2013",
    description:
      "Expanded to include ecommerce services and retail event management",
  },
  {
    year: "2014",
    description: "Established flagship retail outlet for watches",
  },
  {
    year: "2015",
    description: "Commenced operations in Saudi Arabia",
  },
  {
    year: "2016",
    description: "Launched our distribution model in UAE, KSA, Oman and Qatar",
  },
  {
    year: "2019",
    description: "Established our Sweden Office",
  },
  {
    year: "2020",
    description:
      "Expanded to include logistical services and added hygiene, wellness and babycare products",
  },
  {
    year: "2020",
    description:
      "Expanded to include logistical services and added hygiene, wellness and babycare products",
  },
];

export default function TimelineCarousel() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-10">
      {/* Horizontal Line Behind Icons */}
      <div className="absolute top-[30%] left-0 w-full border-t-[3px] border-[#BDA10E] z-0"></div>

      {/* Custom Navigation Arrows */}
      <button className="swiper-button-prev-custom absolute left-[-27px] top-[30%] transform -translate-y-[44%] z-10">
        <ChevronLeft className="text-yellow-400 w-8 h-8" />
      </button>

      <button className="swiper-button-next-custom absolute right-[-27px] top-[30%] transform -translate-y-[44%] z-10">
        <ChevronRight className="text-yellow-400 w-8 h-8" />
      </button>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
        className="relative z-10"
      >
        {timelineData.map((item, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            {/* Timeline Icon - Fixed Centering */}
            <div
              className="relative z-20 flex items-center justify-center w-[3rem] h-[3rem] rounded-full border-4 border-yellow-400 bg-black text-black 
            absolute left-1/2 transform -translate-x-1/2 top-[3.2rem]"
            >
              <Calendar className="text-yellow-400" size={24} />
            </div>
            <div className="mt-[70px] flex flex-col items-center">
              {/* Year - Adjusted Margins */}
              <h3 className="text-[24px] font-bold text-white">{item.year}</h3>

              {/* Description - Improved Alignment */}
              <p className="text-gray-300 mt-2 text-center w-4/5">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
