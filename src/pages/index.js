import React from "react";
import { HeadProvider } from "react-head";
import Head from "../components/Head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { InformationProvider } from "../context/InformationContext";

const Home = () => {
  return (
    <HeadProvider>
      <Head />
      <InformationProvider>
        <Header />
        <main className="main">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ServiceSection />
          <ContactSection />
        </main>
        <Footer />
      </InformationProvider>
    </HeadProvider>
  );
};

export default Home;
