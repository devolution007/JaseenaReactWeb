const Taillored = () => {
  const services = [
    {
      title: "Product Distribution and Trading",
      description:
        "Enabling you to reach your customers in a variety of B2B and B2C markets across the GCC",
      icon: "https://magnetmakerz.com/wp-content/uploads/2025/01/03-2.png",
      delay: "700",
    },
    {
      title: "Third Party Logistics Solutions",
      description:
        "Accomplish more with our extensive shipping, warehousing, inventory management and order fulfillment solutions",
      icon: "https://magnetmakerz.com/wp-content/uploads/2025/01/05-2.png",
      delay: "800",
    },
    {
      title: "Ecommerce and Sales Management Services",
      description:
        "Increase your revenues by selling directly to your customers in the GCC through custom-built ecommerce portals",
      icon: "https://magnetmakerz.com/wp-content/uploads/2025/01/06.png",
      delay: "900",
    },
  ];
  const services2 = [
    {
      title: "Brand Management Services",
      description:
        "Elevate your brand’s visibility and impact with tailored strategies for the GCC market.",
      icon: "https://magnetmakerz.com/wp-content/uploads/2025/01/04-1.png",
      delay: "1000",
    },
    {
      title: "Exploration of New Markets",
      description:
        "Expand your horizons and unlock growth opportunities to increase revenue streams",
      icon: "https://magnetmakerz.com/wp-content/uploads/2025/01/02-1.png",
      delay: "1100",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-[150px]">
      <div>
        <h1
          className="text-lg md:text-[46px] text-left uppercase font-semibold font-[Calibri] text-transparent bg-clip-text leading-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #9f6310, #FFD700, #9f6310)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="400"
        >
          Tailored B2B and B2C Solutions for the GCC
        </h1>
        <p
          className="text-white mt-4 text-left text-[17px]"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-offset="400"
        >
          At Jaseena, we understand that health, beauty, and hygiene products
          require care and expertise. That’s why we provide custom B2B and B2C
          fulfillment solutions designed to meet the unique needs of your brand
          as you enter the Middle East market.
        </p>
        <p
          className="text-white mt-4 text-left text-[17px]"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-offset="400"
        >
          Our cutting-edge systems, powered by centralized ERP integration,
          ensure complete transparency, easy tracking, and seamless
          operations—whether managing bulk orders or direct-to-consumer
          fulfillment. By leveraging our strong networks and omni-channel
          strategies, we connect brands and customers across the GCC with
          precision and care.
        </p>
        <p
          className="text-white mt-4 text-left text-[17px]"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-offset="400"
        >
          We’re more than logistics partners; we’re committed to protecting your
          brand and driving your success in this fast-growing region. Together,
          we can create sustainable connections that deliver value at every
          step.
        </p>
      </div>
      {/* New section begins */}
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              data-aos-offset="300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="mb-4 w-[130px]"
              />
              <h3 className="font-semibold text-[25px]">{service.title}</h3>
              <p className="text-white mt-5">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl my-14 mx-auto flex text-center">
          {services2.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              data-aos-offset="300"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="mb-4 w-[130px]"
              />
              <h3 className="font-semibold text-[25px]">{service.title}</h3>
              <p className="text-white mt-5">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taillored;
