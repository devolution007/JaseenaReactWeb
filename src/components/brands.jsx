import React from "react";

const BrandSection = () => {
  const brands1 = [
    {
      name: "VDY",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/8-1-1.png",
    },
    {
      name: "ARABIYAT",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/3-1-1.png",
    },
    {
      name: "RUE BROCA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/6-1-1.png",
    },
    {
      name: "AL WATANIAH",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/10-1-1.png",
    },
    {
      name: "GRANDEUR",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/11-2.png",
    },
    {
      name: "AFNAN PERFUMES",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/4-1-1.png",
    },
  ];

  const brands2 = [
    {
      name: "ZIMAYA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/7-1-1.png",
    },
    {
      name: "GALAXY PLUS",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/9-2.png",
    },
    {
      name: "KHALDAJ",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/12-2.png",
    },

    {
      name: "FEAH ARABIA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/5-1-1.png",
    },
    {
      name: "LADY DIANA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/1-1-1.png",
    },
    {
      name: "LATAFA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/2-1-1.png",
    },
  ];

  const brands3 = [
    {
      name: "AL HARAMAIN",
      image:
        "https://magnetmakerz.com/wp-content/uploads/2025/01/Al__Haramain-1024x303-1.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 my-auto">
      <h2
        className="text-yellow-400 text-center text-[40px] font-[Calibri] font-bold mt-[100px]"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="300"
      >
        OUR BRANDS
      </h2>
      <div className="mx-auto container">
        <div className="flex flex-wrap align-middle justify-center gap-[6rem] mt-[75px] py-4">
          {brands1.map((brand, index) => (
            <div key={index} className="w-32">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-contain transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap align-middle justify-center gap-[6rem] my-[50px] py-4">
          {brands2.map((brand, index) => (
            <div key={index} className="w-32">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-contain transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap align-middle justify-center gap-[6rem] mt-[10px] py-4 ">
          {brands3.map((brand, index) => (
            <div key={index} className="w-[16%]">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-contain transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
