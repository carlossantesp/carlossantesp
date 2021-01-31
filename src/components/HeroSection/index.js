import React from "react";
import Image from "../../images/image-bg.jpg";
import {
  HeroContainer,
  HeroBg,
  HeroImg,
  HeroContent,
  HeroSay,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroBtnWrapper,
} from "./HeroSectionElements";
import { BtnLinkC } from "../elements/Button";
import { data } from "../../data/information";

const HeroSection = () => {
  const { name, job, info, email } = data;

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <HeroImg src={Image} alt="Background image" />
        </HeroBg>
        <HeroContent>
          <HeroSay>Hi, my name is</HeroSay>
          <HeroTitle>{name}</HeroTitle>
          <HeroSubtitle>{job}</HeroSubtitle>
          <HeroDescription>{info}</HeroDescription>
          <HeroBtnWrapper>
            <BtnLinkC href={`mailto:${email}`}>Get In Touch</BtnLinkC>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
