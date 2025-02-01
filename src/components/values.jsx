import React, { useState } from "react";
import ContactForm from "../components/form";

const Values = () => {
  const [isOpen, setIsOpen] = useState(false);

  const icons = [
    {
      src: "https://magnetmakerz.com/wp-content/uploads/2025/01/care-1.png",
      alt: "Care",
      title: "Care",
      desc: `We prioritize people, partnerships and planet in every decision`,
      delay: "500",
    },
    {
      src: "https://magnetmakerz.com/wp-content/uploads/2025/01/sustainability-1.png",
      alt: "Sustainability",
      title: "Sustainability",
      desc: `Committed to long-term growth that respects our environment`,
      delay: "600",
    },
    {
      src: "https://magnetmakerz.com/wp-content/uploads/2025/01/trust-1.png",
      alt: "Trust",
      title: "Trust",
      desc: "Nurtured over 5 decades, through transparency and reliability",
      delay: "700",
    },
    {
      src: "https://magnetmakerz.com/wp-content/uploads/2025/01/empowerment-1.png",
      alt: "Empowerment",
      title: "Empowerment ",
      desc: "Helping businesses and communities thrive together",
      delay: "800",
    },
  ];
  return (
    <>
      <div>
        <h2
          className="text-yellow-400 uppercase text-center text-[60px] font-[Calibri] font-bold mt-[100px] leading-[4rem]"
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-offset="300"
        >
          Built On Values,
          <br /> Driven by Impact
        </h2>
        <p
          className="text-sm md:text-[40px] font-bold text-white mt-2 font-[Calibri] leading-[35px] uppercase"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="300"
        >
          Empowering companies through effective solution since 1975
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="300"
          onClick={() => setIsOpen(true)}
          className="text-black uppercase font-semibold px-8 py-1 mt-4 rounded-[10px] transition-all duration-300 ease-in-out bg-gold-gradient font-[Calibri] text-[20px] 
    hover:tracking-[3px] 
    hover:shadow-[0px_7px_29px_0px_gold]"
        >
          Connect WITH US
        </button>
      </div>
      <div className="container mx-auto flex justify-around my-[80px] gap-20">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={icon.delay}
            data-aos-offset="300"
          >
            <img src={icon.src} alt={icon.alt} className="w-[50%] mb-2" />
            <h1 className="text-sm uppercase md:text-[30px] text-white font-[Calibri] font-semibold">
              {icon.title}
            </h1>
            <p className="text-sm md:text-[25px] text-white mt-4 font-normal font-[Calibri] leading-[30px]">
              {icon.desc}
            </p>
          </div>
        ))}
      </div>
      {isOpen && <ContactForm setIsOpen={setIsOpen} />}
    </>
  );
};

export default Values;
