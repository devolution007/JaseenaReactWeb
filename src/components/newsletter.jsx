import React from "react";

const Newsletter = () => {
  return (
    <div className=" text-white">
      <div className="container mx-auto px-4 py-16">
        <h1
          className="text-transparent bg-clip-text uppercase text-center text-[25px] sm:text-[65px] font-[Calibri] font-bold mt-[10px] sm:mt-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-offset="300"
        >
          SUBSCRIBE TO JASEENA'S NEWSLETTER
        </h1>
        <p
          className="text-[18px] md:text-[26px] text-white mb-4 font-[Calibri] leading-[20px] sm:leading-[35px]"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="300"
        >
          Stay updated with our latest news and insights from the GCC market -
          delivered monthly.
        </p>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 sm:p-0"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="300"
        >
          <input
            type="text"
            placeholder="NAME"
            className="w-[100%] sm:w-[20%] px-4 py-2 bg-transparent border-[2px] focus:outline-none border-yellow-500"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="w-[100%] sm:w-[20%] px-4 py-2 bg-transparent border-[2px] focus:outline-none border-yellow-500"
          />
          <button
            className="w-[100%] sm:w-[10%] text-black uppercase font-semibold px-8 py-1 rounded-[10px] transition-all duration-300 ease-in-out bg-gold-gradient font-[Calibri] text-[20px] 
    hover:tracking-[3px] 
    hover:shadow-[0px_7px_29px_0px_gold]"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          className="p-4 "
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-offset="400"
        >
          <a
            href="https://afnan.com/blogs/news/a-journey-through-the-enigmatic-world-of-oud-with-afnan-perfumes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://magnetmakerz.com/wp-content/uploads/2025/01/Cambodi_B-2_grande_56c743af-5291-46c4-8a70-d2c115c89731.webp"
              alt="Oud Wood"
              className="w-full h-[250px] border-[3px] border-yellow-500"
            />
          </a>
          <h3 className="text-sm md:text-[17px] text-white mt-2 font-[Calibri] font-semibold">
            A Journey through the Enigmatic World of Oud with Afnan Perfumes
          </h3>
        </div>
        <div
          className="p-4 "
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-offset="400"
        >
          <a
            href="https://shop.alharamainperfumes.com/uae/blog/post/5-best-perfume-for-men-al-haramain-edition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://magnetmakerz.com/wp-content/uploads/2025/01/L_Aventure.jpg"
              alt="Oud Wood"
              className="w-full h-[250px] border-[3px] border-yellow-500"
            />
          </a>
          <h3 className="text-sm md:text-[17px] text-white mt-2 font-[Calibri] font-semibold">
            5 Best Perfume for Men Al Haramain Edition
          </h3>
        </div>
        <div
          className="p-4"
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-offset="400"
        >
          <a
            href="https://www.luluretail.com/media/news/lulus-ipo-set-share-price-at-aed-204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://magnetmakerz.com/wp-content/uploads/2025/01/photo-2024-11-06-20-50-20-1-768x384-1.webp"
              alt="Oud Wood"
              className="w-full h-[250px] border-[3px] border-yellow-500"
            />
          </a>
          <h3 className="text-sm md:text-[17px] text-white mt-2 font-[Calibri] font-semibold">
            Lulu's IPO set share price at AED 2.04
          </h3>
        </div>
        <div
          className="p-4"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-offset="400"
        >
          <a
            href="https://jaseenainternational.com/wp-content/uploads/2024/12/Media-Recycling-Facility-EN-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://magnetmakerz.com/wp-content/uploads/2025/01/Capture-1.png"
              alt="Oud Wood"
              className="w-fu h-[250px] border-[3px] border-yellow-500"
            />
          </a>
          <h1 className="text-sm md:text-[17px] text-white mt-2 font-[Calibri] font-semibold">
            Landmark Group Unveils Region's First Textile Recycling Facility in
            Ceremony Inaugurated by UAE Minister of Economy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
