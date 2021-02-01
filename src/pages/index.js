import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";
import { data } from "../data/information";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <main className="main">
        <HeroSection info={data.info} />
        <AboutSection data={data.info} skills={data.skills} />
      </main>
    </>
  );
};

export default Home;
