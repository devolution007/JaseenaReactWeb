import React from "react";

const Footer = () => {
  return (
    <>
      <img
        className="w-full h-[30px]"
        src="https://magnetmakerz.com/wp-content/uploads/2025/01/GOLD-BAR.png"
        alt="bar"
      />
      <footer
        className="text-white py-6 relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://magnetmakerz.com/wp-content/uploads/2025/01/cityline.png')",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {/* Background Overlay with Updated Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #534705 23%, #BDA10E73 95%)",
          }}
        ></div>
        
        <div className="relative mx-auto px-6 flex flex-wrap justify-between items-center z-10">
          {/* Left Side Content */}
          <div className="max-w-lg text-start">
            <h2
              className="text-[24px] font-semibold font-[Calibri] text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Jaseena Trading Co. LLC
            </h2>
            <p className="my-8 text-[17px] font-normal font-[Calibri]">
              Office # 1007 Emirates NBD Building <br />
              Baniyas Road, Deira <br />
              P.O Box: 55957, Dubai – UAE
            </p>
            <p className="mt-2 font-bold text-[20px] font-[Calibri]">
              Contact: 71 4 2555901
            </p>
            <p className="mt-1 font-bold text-[20px] font-[Calibri]">
              Email:
              <a href="mailto:info@jaseena.ae">info@jaseena.ae</a>
            </p>
          </div>

          {/* Right Side Content */}
          <div className="text-right">
            <a
              href="https://jaseenainternational.com/wp-content/uploads/2025/01/Jaseena-Trading-Co.-LLC_-Terms-and-Conditions.pdf"
              className="text-white font-normal text-[24px]"
            >
              Terms & Conditions
            </a>
            <div className="mt-4 flex justify-end gap-3">
              {/* LinkedIn Icon */}
              <a
                href="/"
                className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  className="e-font-icon-svg e-fab-linkedin w-5 h-5"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a
                href="/"
                className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full transform transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  className="e-font-icon-svg e-fab-instagram w-5 h-5"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
