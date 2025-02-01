import React from "react";

const Distributors = () => {
  const brands1 = [
    {
      name: "VDY",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/2C-07.png",
    },
    {
      name: "ARABIYAT",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/05-1.png",
    },
    {
      name: "RUE BROCA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/10-1.png",
    },
    {
      name: "AL WATANIAH",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/03-1.png",
    },
  ];

  const brands2 = [
    {
      name: "ZIMAYA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/01.png",
    },
    {
      name: "GALAXY PLUS",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/11.png",
    },
    {
      name: "KHALDAJ",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/08.png",
    },

    {
      name: "FEAH ARABIA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/13.png",
    },
  ];

  const brands3 = [
    {
      name: "AL HARAMAIN",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/7-2.png",
    },
    {
      name: "ZIMAYA",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/04.png",
    },
    {
      name: "GALAXY PLUS",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/09-1.png",
    },
    {
      name: "KHALDAJ",
      image: "https://magnetmakerz.com/wp-content/uploads/2025/01/3-2.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 my-auto">
      <h2
        className="text-yellow-400 text-center text-[40px] font-[Calibri] font-bold mt-[100px]"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="400"
      >
        OUR DISTRIBUTION NETWORK
      </h2>
      <div className="mx-auto container">
        <div className="flex flex-wrap align-middle justify-center gap-[13rem] mt-[75px] py-4">
          {brands1.map((brand, index) => (
            <div key={index} className="w-[130px]">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-fill transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap align-middle justify-center gap-[13rem] my-[50px] py-4">
          {brands2.map((brand, index) => (
            <div key={index} className="w-[130px]">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-fill transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap align-middle justify-center gap-[13rem] mt-[10px] py-4 ">
          {brands3.map((brand, index) => (
            <div key={index} className="w-[130px]">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-fill transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Distributors;
