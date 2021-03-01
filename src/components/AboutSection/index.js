import React from "react";
import { Title, TitleWrapper } from "../elements/Title";
import Skill from "../Skill";
import {
  AboutContainer,
  AboutContent,
  AboutDescWrapper,
  AboutDescription,
  AboutImage,
  ImageSelf,
  AboutSkillWrapper,
} from "./AboutSectionElements";
import { useTranslation } from "react-i18next";

const AboutSection = ({ data, skills }) => {
  const { image, description } = data;
  const { t } = useTranslation("global");

  return (
    <>
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
            <ImageSelf src={image} alt="Carlos Santillan" />
          </AboutImage>
          <AboutSkillWrapper>
            <AboutDescription>{t("about.details")}</AboutDescription>
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill}></Skill>
            ))}
          </AboutSkillWrapper>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
