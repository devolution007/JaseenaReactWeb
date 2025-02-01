import React, { useEffect } from "react";
import HeroSection from "../components/Herosection";
import Services from "../components/services";
import BrandSection from "../components/brands";
import Distributors from "../components/distributors";
import FeaturedProducts from "../components/Featured";
import Values from "../components/values";
import Newsletter from "../components/newsletter";
import LeadershipTeam from "../components/leadership";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Easing function
      once: true, // Animation triggers once when scrolling into view
    });
  }, []);
  return (
    <>
      <HeroSection />
      <Services />
      <BrandSection />
      <Distributors />
      <FeaturedProducts />
      <Values />
      <Newsletter />
      <LeadershipTeam />
    </>
  );
};

export default Home;
