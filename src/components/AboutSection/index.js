import React, { Fragment } from "react";
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
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const AboutSection = ({ data, skills }) => {
  const { image, description } = data;
  const { t } = useTranslation("global");

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

AboutSection.propTypes = {
  data: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
};

export default AboutSection;
