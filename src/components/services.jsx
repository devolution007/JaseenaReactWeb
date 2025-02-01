import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const services = [
    {
      title: "Omni Channel Distribution & Trading",
      description:
        "Enabling you to reach your customers in a variety of B2B and B2C markets across the GCC",
      image:
        "https://magnetmakerz.com/wp-content/uploads/2025/01/OMNICHANEL.png",
    },
    {
      title: "THIRD PARTY LOGISTICS",
      description:
        "Accomplish more with our extensive shipping, warehousing, inventory management and order fulfillment solutions",
      image:
        "https://magnetmakerz.com/wp-content/uploads/2025/01/LOGISTICAL-SOLUTIONS.png",
    },
    {
      title: "E com & sale management services",
      description:
        "Increase your revenues by selling directly to your customers in the GCC through custom-built ecommerce portal",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/ECOM.png",
    },
    {
      title: "brand Management services",
      description:
        "Build and grow your brand with tailored strategies that resonate in the GCC market",
      image:
        "https://magnetmakerz.com/wp-content/uploads/2025/01/TOoYFP-768x498-1.png",
    },
  ];

  return (
    <div className="flex w-full h-[90vh]">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className={`relative overflow-hidden group cursor-pointer transition-all duration-1000 ${
            hoveredIndex === index ? "flex-[2]" : "flex-1"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-0 bg-[#BDA10E59] transition-all duration-1000"></div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[50px] text-center">
            <h3
              className="text-lg md:text-[50px] uppercase font-semibold text-transparent bg-clip-text font-[Calibri]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "normal", // Adjust line-height if needed
                height: "auto", // Ensure the container can grow with the text
              }}
            >
              {service.title}
            </h3>
            <p className="text-sm md:text-[25px] text-white mt-2 font-[Calibri] leading-[35px]">
              {service.description}
            </p>
            <a
              href="/empowering-organizations"
              className="text-black uppercase font-semibold px-8 py-1 mt-4 rounded-[10px] transition-all duration-300 ease-in-out bg-gold-gradient font-[Calibri] text-[20px] 
    hover:tracking-[3px] 
    hover:shadow-[0px_7px_29px_0px_gold]"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
