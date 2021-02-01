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

const HeroSection = ({ info }) => {
  const { name, job, resume, email } = info;

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
          <HeroDescription>{resume}</HeroDescription>
          <HeroBtnWrapper>
            <BtnLinkC href={`mailto:${email}`}>Get In Touch</BtnLinkC>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
