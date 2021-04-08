import React, { Fragment, useContext } from "react";
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
import { InformationContext } from "../../context/InformationContext";

const HeroSection = () => {
  const { t, info } = useContext(InformationContext);
  const { name, job, resume, email } = info;

  return (
    <Fragment>
      <HeroContainer id="home">
        <HeroBg>
          <HeroImg src={Image} alt="Background image of a laptop" />
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
    </Fragment>
  );
};

export default HeroSection;
