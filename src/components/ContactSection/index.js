import React from "react";
import {
  BsEmail,
  BsGitHub,
  BsCodepen,
  BsLinkedin,
  BsFacebook,
} from "../icons/basic";
import { Title, TitleWrapper } from "../elements/Title";
import {
  ContactContainer,
  ContactContent,
  ContactDescription,
  ContactSocialWrapper,
  ContactSocial,
} from "./ContactSectionElements";

const ContactSection = ({ contact }) => {
  const { email, github, codepen, linkedin, facebook } = contact;
  return (
    <ContactContainer>
      <TitleWrapper>
        <Title section="04">Contact Me</Title>
      </TitleWrapper>
      <ContactContent>
        <ContactDescription>
          If you have a job offer, a project proposal or are interested in that
          we work together contact me.
        </ContactDescription>
        <ContactSocialWrapper>
          <ContactSocial href={`mailto:${email}`}>
            <BsEmail />
          </ContactSocial>
          <ContactSocial href={github} target="_blank">
            <BsGitHub />
          </ContactSocial>
          <ContactSocial href={codepen} target="_blank">
            <BsCodepen />
          </ContactSocial>
          <ContactSocial href={linkedin} target="_blank">
            <BsLinkedin />
          </ContactSocial>
          <ContactSocial href={facebook} target="_blank">
            <BsFacebook />
          </ContactSocial>
        </ContactSocialWrapper>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
