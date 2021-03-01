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
import { useTranslation } from "react-i18next";

const ContactSection = ({ contact }) => {
  const { email, github, codepen, linkedin, facebook } = contact;
  const { t } = useTranslation("global");

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
