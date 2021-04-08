import React, { useContext } from "react";
import { FooterContainer, FooterDescription } from "./FooterElements";
import { InformationContext } from "../../context/InformationContext";

const Footer = () => {
  const { t, author } = useContext(InformationContext);

  return (
    <FooterContainer>
      <FooterDescription>
        {t("footer.info")} {author} &copy; {new Date().getFullYear()}
      </FooterDescription>
    </FooterContainer>
  );
};

export default Footer;
