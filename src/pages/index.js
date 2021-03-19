import React, { useState } from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { data } from "../data/information";
import { HeadProvider } from "react-head";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation("global");
  const language = i18n.language;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeadProvider>
      <Head />
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
      </main>
      <Footer name={data.info[language].name} />
    </HeadProvider>
  );
};

export default Home;
