import React, { useState } from "react";
import ContactForm from "../components/form";

export default function CommitmentSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-white py-12 my-[100px] px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-start">
        {/* Left Content */}
        <div
          className="md:w-2/5 space-y-6"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <h2 className="text-4xl md:text-[46px] font-bold text-transparent bg-clip-text font-[Calibri]">
            <span
              style={{
                backgroundImage:
                  "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Undaunted commitment
            </span>
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              to growth and progress
            </span>
          </h2>
          <p className="text-sm md:text-[17px] text-white font-medium leading-[25px]">
            At Jaseena we’ve been spreading happiness and building trust since
            1975. With over 25 years of experience distributing international
            perfume brands, we’ve grown into a trusted partner for brands
            looking to make their mark in the GCC.
          </p>
          <p className="text-sm md:text-[17px] text-white font-medium leading-[25px]">
            We made a strategic move to the UAE in 1989. This shift opened the
            door to exciting opportunities, and we’ve since expanded our
            portfolio to include perfumes, beauty, health, hygiene, and
            household cleaning products—products that enrich lifestyles and
            create memorable experiences.
          </p>
          <p className="text-sm md:text-[17px] text-white font-medium leading-[25px]">
            We’re more than just distributors; we’re innovators. From
            third-party logistics to omni-channel distribution and
            direct-to-consumer fulfillment, we provide sustainable solutions
            that add real value to your business. With offices in the UAE, Oman,
            and Saudi Arabia, we connect brands to the Middle East, Africa, Far
            East, and South East Asia.
          </p>
          <p className="text-sm md:text-[17px] text-white font-medium leading-[25px]">
            Let’s grow together. Partner with us to elevate your brand, explore
            untapped markets, and create a lasting impact in the GCC.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-black uppercase font-semibold px-8 py-1 mt-6 rounded-[10px] transition-all duration-300 ease-in-out bg-gold-gradient font-[Calibri] text-[20px] 
    hover:tracking-[3px] 
    hover:shadow-[0px_7px_29px_0px_gold]"
          >
            Connect With Us
          </button>
          {isOpen && <ContactForm setIsOpen={setIsOpen} />}
        </div>

        {/* Right Images */}
        <div
          className="md:w-3/5 flex justify-end relative mt-10 md:mt-0"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="relative">
            {/* Top Image */}
            <img
              src="https://magnetmakerz.com/wp-content/uploads/2025/01/empowering.png"
              alt="Business Strategy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
