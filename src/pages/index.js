import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import Navbar from "../components/Navbar";
import { data } from "../data/information";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
import Head from "../components/Head";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <main className="main">
        <HeroSection info={data.info} />
        <AboutSection data={data.info} skills={data.skills} />
        <ProjectSection projects={data.projects} />
        <ServiceSection />
        <ContactSection contact={data.socials} />
        <Footer name={data.info.name} />
      </main>
    </>
  );
};

export default Home;
