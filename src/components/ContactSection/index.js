import React, { useContext } from "react";
import {
  BsEmail,
  BsGitHub,
  BsCodepen,
  BsLinkedin,
  BsFacebook,
} from "../icons/basic";
import {
  ContactContainer,
  ContactContent,
  ContactDescription,
  ContactSocialWrapper,
  ContactSocial,
} from "./ContactSectionElements";
import { Title, TitleWrapper } from "../elements/Title";
import { InformationContext } from "../../context/InformationContext";

const ContactSection = () => {
  const { t, socials } = useContext(InformationContext);
  const { email, github, codepen, linkedin, facebook } = socials;

  return (
    <ContactContainer id="contact">
      <TitleWrapper>
        <Title section="04">{t("contact-section.title")}</Title>
      </TitleWrapper>
      <ContactContent>
        <ContactDescription>
          {t("contact-section.description")}
        </ContactDescription>
        <ContactSocialWrapper>
          <ContactSocial href={`mailto:${email}`}>
            <BsEmail />
          </ContactSocial>
          <ContactSocial
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGitHub />
          </ContactSocial>
          <ContactSocial
            href={codepen}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsCodepen />
          </ContactSocial>
          <ContactSocial
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </ContactSocial>
          <ContactSocial
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </ContactSocial>
        </ContactSocialWrapper>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;
