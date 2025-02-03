import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-white pt-[10px] pb-[50px] sm:pt-[150px] sm:pb-[100px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-6 ">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Hero Text */}
          <div className="flex flex-col items-center text-center md:w-[35%]">
            <h1
              data-aos="fade-right"
              data-aos-delay="500"
              className="text-[30px] leading-[30px] sm:text-4xl md:text-[55px] sm:leading-[55px] font-bold text-transparent bg-clip-text font-[Calibri]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              YOUR TRUSTED GATEWAY
            </h1>
            <h2
              data-aos="fade-right"
              data-aos-delay="800"
              className="text-[20px] my-[10px] sm:text-2xl font-semibold text-white sm:my-[15px]"
            >
              INTO THE GCC MARKET
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="1000"
              className="text-white max-w-2xl text-[21px]"
            >
              Five decades of building trustworthy partnerships.
            </p>
            {/* Learn More Button */}
            <a href="/empowering-organizations">
              <button
                data-aos="fade-right"
                data-aos-delay="1000"
                className="text-black uppercase font-semibold px-8 py-1 mt-6 rounded-[10px] transition-all duration-300 ease-in-out bg-gold-gradient font-[Calibri] text-[20px] 
    hover:tracking-[3px] 
    hover:shadow-[0px_7px_29px_0px_gold]"
              >
                Learn More
              </button>
            </a>
          </div>

          {/* Background Image */}
          <div className="relative w-full flex justify-center mt-10 md:mt-0 md:w-[65%] ">
            <img
              src="https://magnetmakerz.com/wp-content/uploads/2025/01/Group-1.png"
              alt="Gold World Map"
              className="max-w-3xl w-full h-auto"
            />
          </div>
        </div>

        {/* Country Flags */}
        <div className="flex flex-wrap sm:justify-center items-center mt-10 justify-between gap-8 sm:gap-10">
          {[
            {
              name: "UAE",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/uae.png",
            },
            {
              name: "SAUDI ARABIA",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/saudi.png",
            },
            {
              name: "OMAN",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/oman.png",
            },
            {
              name: "BAHRAIN",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/bahrin.png",
            },
            {
              name: "QATAR",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/qatar.png",
            },
            {
              name: "PAKISTAN",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/pakistan.png",
            },
            {
              name: "SWEDEN",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/sweden.png",
            },
            {
              name: "UK",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/uk.png",
            },
            {
              name: "SINGAPORE",
              flag: "https://magnetmakerz.com/wp-content/uploads/2025/01/singapore.png",
            },
          ].map((country, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={country.flag}
                alt={country.name}
                className="w-[60px] sm:w-[60px] transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <span className="text-sm mt-4">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
