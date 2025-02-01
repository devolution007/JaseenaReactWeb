const MessageCeo = () => {
  return (
    <div
      className="max-w-7xl mx-auto mt-[150px]"
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-offset="400"
    >
      <div>
        <h1
          className="text-lg md:text-[46px] text-left uppercase font-semibold font-[Calibri] text-transparent bg-clip-text leading-[50px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A MESSAGE <br /> FROM OUR CEO
        </h1>
        <p className="text-[#E2E2E2] mt-5 text-left text-[17px]">
          At Jaseena, we’re here to make your supply chain seamless and
          stress-free. We offer flexible, end-to-end solutions for consumer
          goods manufacturers—covering everything from consulting and planning
          to warehousing, packaging, logistics, and distribution.
        </p>
        <p className="text-[#E2E2E2] mt-4 text-left text-[17px]">
          With over 40 years of experience in the GCC and MENA region, we
          understand the challenges of getting your products to market. That’s
          why we focus on anticipating your needs and delivering tailored
          solutions for industries like perfumes, cosmetics, wellness, hygiene,
          mothercare, and babycare.
        </p>
        <p className="text-[#E2E2E2] mt-4 text-left text-[17px]">
          Our sustainable, reliable systems give you the visibility and control
          you need to meet customer demands with fast, multi-channel order
          fulfillment. Let us help you stay ahead and take your business to new
          heights!
        </p>
        <p className="text-[#E2E2E2] mt-4 text-left text-[17px]">
          Warm regards,
        </p>
        <p className="text-[#E2E2E2] mt-2 font-bold text-left text-[17px]">
          Imtiaz Ahmad Minhas
        </p>
      </div>
    </div>
  );
};

export default MessageCeo;
