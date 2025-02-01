import React, { useEffect } from "react";
import Commitment from "../components/commitment";
import TimelineCarousel from "../components/timeline";
import Taillored from "../components/Tailored";
import BrandSection from "../components/brands";
import Distributors from "../components/distributors";
import MessageCeo from "../components/messageCeo";
import LeadershipTeam from "../components/leadership";
import Addresses from "../components/maplocation";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
const Empowering = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      easing: "ease-in-out", // Easing function
      once: true, // Animation triggers once when scrolling into view
    });
  }, []);
  return (
    <>
      <Commitment />
      <TimelineCarousel />
      <Taillored />
      <BrandSection />
      <Distributors />
      <MessageCeo />
      <LeadershipTeam />
      <Addresses />
    </>
  );
};

export default Empowering;
