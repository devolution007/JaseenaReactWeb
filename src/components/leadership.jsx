import React, { useState } from "react";
import ContactForm from "../components/form";

const LeadershipTeam = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-16">
      <h1
        className="text-transparent bg-clip-text uppercase text-center text-[65px] font-[Calibri] font-bold my-[60px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-offset="400"
      >
        OUR LEADERSHIP TEAM
      </h1>
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            name: "IMTIAZ AHMAD MINHAS",
            role: "CEO",
            img: "https://magnetmakerz.com/wp-content/uploads/2025/01/Group-113-2.png",
            link: "#",
          },
          {
            name: "AAMER SHAHZAD MINHAS",
            role: "Director – Operations",
            img: "https://magnetmakerz.com/wp-content/uploads/2025/01/team2.png",
            link: "https://www.linkedin.com/in/aamer-minhas-190347a1/",
          },
          {
            name: "SARAH KHAN",
            role: "Director – Sales & Marketing",
            img: "https://magnetmakerz.com/wp-content/uploads/2025/01/ahmed.png",
            link: "https://www.linkedin.com/in/sarfraz-ahmed-359095a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            name: "ALI RAZA",
            role: "Business Advisor",
            img: "https://magnetmakerz.com/wp-content/uploads/2025/01/Rudradev.png",
            link: "https://www.linkedin.com/in/rudra-dasgupta-0798463?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
        ].map((leader, index) => (
          <div key={index} className="relative group">
            <div className="relative">
              {/* Background effect sirf image pe */}
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full border-[2px] border-yellow-500"
              />
              {/* LinkedIn Icon Always Visible on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <a
                  href={leader.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20"
                >
                  <svg
                    className="w-12 h-12"
                    fill="#ffffff"
                    height="200px"
                    width="200px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-143 145 512 512"
                    stroke="#ffffff"
                  >
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <h3 className="text-sm md:text-[20px] text-white my-6 font-[Calibri] font-bold">
              {leader.name}
            </h3>
            <p className="text-center text-sm md:text-[18px] mt-4 text-white font-normal">
              {leader.role}
            </p>
          </div>
        ))}
      </div>
      <button
        data-aos="fade-up"
        data-aos-delay="300"
        onClick={() => setIsOpen(true)}
        className="text-black uppercase font-semibold px-8 py-1 my-[5rem] rounded-[10px] transition-all duration-300 ease-in-out bg-gold-gradient font-[Calibri] text-[20px] 
    hover:tracking-[3px] 
    hover:shadow-[0px_7px_29px_0px_gold]"
      >
        Connect with us
      </button>
      {isOpen && <ContactForm setIsOpen={setIsOpen} />}
    </div>
  );
};

export default LeadershipTeam;
