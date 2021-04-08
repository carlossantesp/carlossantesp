import React, { Fragment, useContext } from "react";
import {
  AboutContainer,
  AboutContent,
  AboutDescWrapper,
  AboutDescription,
  AboutImage,
  ImageSelf,
  AboutSkillWrapper,
} from "./AboutSectionElements";
import { Title, TitleWrapper } from "../elements/Title";
import Skill from "../Skill";
import { InformationContext } from "../../context/InformationContext";

const AboutSection = () => {
  const { t, info, skills } = useContext(InformationContext);
  const { image, description } = info;

  return (
    <Fragment>
      <AboutContainer id="about">
        <TitleWrapper>
          <Title section="01">{t("about.title")}</Title>
        </TitleWrapper>
        <AboutContent>
          <AboutDescWrapper>
            {description.map((el, index) => (
              <AboutDescription key={index}>{el}</AboutDescription>
            ))}
          </AboutDescWrapper>
          <AboutImage>
            <ImageSelf src={image} alt="photography by carlos Santillan" />
          </AboutImage>
          <AboutSkillWrapper>
            <AboutDescription>{t("about.details")}</AboutDescription>
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill}></Skill>
            ))}
          </AboutSkillWrapper>
        </AboutContent>
      </AboutContainer>
    </Fragment>
  );
};

export default AboutSection;
