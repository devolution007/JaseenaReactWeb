import React from "react";

const FAQs = () => {
  return (
    <div className="faq-container font-sans text-white p-5 text-center">
      <header className="faq-header mb-10">
        <h1 className="bg-gradient-to-r from-[#9f6310] via-[#FFD700] to-[#9f6310] bg-clip-text text-transparent leading-[50px] text-4xl">
          JOIN THE JASEENA COMMUNITY
        </h1>
        <p className="text-lg text-white mb-5">
          Stay updated with our latest news and insights from the GCC market—delivered
          monthly.
        </p>
        <div className="faq-form-container flex justify-center gap-2.5">
          <input type="text" placeholder="NAME" className="faq-input p-2.5 border border-transparent rounded bg-[#22222200] text-white w-[250px] border-image-[linear-gradient(to_right,#9f6310,#FFD700,#9f6310)_1]" />
          <input type="email" placeholder="EMAIL" className="faq-input p-2.5 border border-transparent rounded bg-[#22222200] text-white w-[250px] border-image-[linear-gradient(to_right,#9f6310,#FFD700,#9f6310)_1]" />
          <button className="faq-submit-button bg-gradient-to-r from-[#9f6310] via-[#FFD700] to-[#9f6310] text-black px-6 py-2.5 border-0 w-[150px] h-[50px] text-center rounded-md">
            SUBMIT
          </button>
        </div>
      </header>

      <section className="faq-info-section grid grid-cols-4 gap-5 mt-10">
        <div className="faq-info-card p-5 bg-transparent border border-gold rounded-md text-sm text-gray-300 h-[400px]">
          <div className="faq-info-border"></div>
          <p>Built on a foundation of effective solutions.</p>
        </div>
        <div className="faq-info-card p-5 bg-transparent border border-gold rounded-md text-sm text-gray-300 h-[400px]">
          <div className="faq-info-border"></div>
          <p>A trusted partner for brands.</p>
        </div>
        <div className="faq-info-card p-5 bg-transparent border border-gold rounded-md text-sm text-gray-300 h-[400px]">
          <div className="faq-info-border"></div>
          <p>Expanding to the Middle East and beyond.</p>
        </div>
        <div className="faq-info-card p-5 bg-transparent border border-gold rounded-md text-sm text-gray-300 h-[400px]">
          <div className="faq-info-border"></div>
          <p>Our extensive distributor network.</p>
        </div>
      </section>

      <section className="team-section mt-12 text-white w-full">
        <h2 className="text-[#ffcc00] text-2xl mb-7.5">OUR LEADERSHIP TEAM</h2>
        <div className="team-container flex justify-center gap-5">
          <div className="team-card border border-gray-600 rounded-lg p-5 text-center w-[400px]">
            <div className="team-photo bg-[#333] border-2 border-[#ffcc00] w-full h-[300px] mb-3.75 rounded-md"></div>
            <h3 className="text-lg text-[#ffcc00] mb-2.5">Imtiaz Ahmad Minhas</h3>
            <p className="text-sm text-gray-300">Chairman & CEO</p>
          </div>
          <div className="team-card border border-gray-600 rounded-lg p-5 text-center w-[400px]">
            <div className="team-photo bg-[#333] border-2 border-[#ffcc00] w-full h-[300px] mb-3.75 rounded-md"></div>
            <h3 className="text-lg text-[#ffcc00] mb-2.5">Aamer Shahzad</h3>
            <p className="text-sm text-gray-300">Operations Director</p>
          </div>
          <div className="team-card border border-gray-600 rounded-lg p-5 text-center w-[250px]">
            <div className="team-photo bg-[#333] border-2 border-[#ffcc00] w-full h-[300px] mb-3.75 rounded-md"></div>
            <h3 className="text-lg text-[#ffcc00] mb-2.5">Sarfraz Ahmed</h3>
            <p className="text-sm text-gray-300">Sales Director</p>
          </div>
        </div>
        <button className="learn-more-button bg-[#ffcc00] border-none rounded-md cursor-pointer text-lg mt-5 px-5 py-2.5 hover:bg-[#ffaa00]">
          LEARN MORE
        </button>
      </section>
    </div>
  );
};

export default FAQs;