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

const AboutSection = ({ data, skills }) => {
  const { image, description } = data;
  return (
    <>
      <AboutContainer>
        <TitleWrapper>
          <Title section="01">About Me</Title>
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
            <AboutDescription>
              Here are some technologies that I have been working with recently:
            </AboutDescription>
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
