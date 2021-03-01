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
import { useTranslation } from "react-i18next";

const HeroSection = ({ info }) => {
  const { name, job, resume, email } = info;
  const { t } = useTranslation("global");

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <HeroImg src={Image} alt="Background image" />
        </HeroBg>
        <HeroContent>
          <HeroSay>{t("hero.say")}</HeroSay>
          <HeroTitle>{name}</HeroTitle>
          <HeroSubtitle>{job}</HeroSubtitle>
          <HeroDescription>{resume}</HeroDescription>
          <HeroBtnWrapper>
            <BtnLinkC href={`mailto:${email}`}>{t("hero.button-get")}</BtnLinkC>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
