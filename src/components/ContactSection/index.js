import React from "react";
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
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

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

ContactSection.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactSection;
