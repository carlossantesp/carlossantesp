import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import { data } from "../data/information";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
// import Head from "../components/Head";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation("global");
  const language = i18n.language;
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Head /> */}
      <Header
        isOpen={isOpen}
        toggle={toggle}
        linkResume={data.info[language].linkResume}
      />
      <main className="main">
        <HeroSection info={data.info[language]} />
        <AboutSection data={data.info[language]} skills={data.skills} />
        <ProjectSection projects={data.projects[language]} />
        <ServiceSection />
        <ContactSection contact={data.socials} />
        <Footer name={data.info[language].name} />
      </main>
    </>
  );
};

export default Home;
