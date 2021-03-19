import React from "react";
import { FooterContainer, FooterDescription } from "./FooterElements";
import { useTranslation } from "react-i18next";

const Footer = ({ name }) => {
  const dateYear = new Date().getFullYear();

  const { t } = useTranslation("global");
  return (
    <FooterContainer>
      <FooterDescription>
        {t("footer.info")} {name} &copy; {dateYear}
      </FooterDescription>
    </FooterContainer>
  );
};

export default Footer;
