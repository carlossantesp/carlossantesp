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
import Button from "../elements/Button";
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
            <Button linkUrl={`mailto:${email}`} external={true}>
              {t("hero.button-get")}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </Fragment>
  );
};

export default HeroSection;
