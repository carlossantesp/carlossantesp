import React from "react";
import { BsTimes } from "../icons/basic";
import { FgES, FgEN } from "../icons/languages";

import {
  MobileCloseIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavLanguageWrapper,
  BtnLinkFlag,
} from "./NavbarElements";

import { useTranslation } from "react-i18next";

import { BtnLink } from "../elements/Button";

const Navbar = ({ toggle, linkResume }) => {
  const { t, i18n } = useTranslation("global");

  const navbarLinkItems = [
    {
      name: t("navbar.about"),
      path: "about",
    },
    {
      name: t("navbar.projects"),
      path: "projects",
    },
    {
      name: t("navbar.services"),
      path: "services",
    },
    {
      name: t("navbar.contact"),
      path: "contact",
    },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <MobileCloseIcon onClick={toggle}>
        <BsTimes />
      </MobileCloseIcon>
      <NavMenu>
        {navbarLinkItems.map((item, index) => (
          <NavItem key={index}>
            <NavLinks
              to={item.path}
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-64}
            >
              {item.name}
            </NavLinks>
          </NavItem>
        ))}
      </NavMenu>
      <NavBtn>
        <BtnLink href={linkResume} target="_blank">
          {t("navbar.resume")}
        </BtnLink>
      </NavBtn>
      <NavLanguageWrapper>
        <BtnLinkFlag onClick={() => changeLanguage("es")}>
          <FgES />
        </BtnLinkFlag>
        <BtnLinkFlag onClick={() => changeLanguage("en")}>
          <FgEN />
        </BtnLinkFlag>
      </NavLanguageWrapper>
    </>
  );
};

export default Navbar;
