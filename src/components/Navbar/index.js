import React, { Fragment } from "react";
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
import PropTypes from "prop-types";

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
    <Fragment>
      <MobileCloseIcon onClick={toggle} aria-label="Close menu">
        <BsTimes />
      </MobileCloseIcon>
      <NavMenu>
        {navbarLinkItems.map((item, index) => (
          <NavItem key={index}>
            <NavLinks
              to={item.path}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-64}
              tabIndex={0}
            >
              {item.name}
            </NavLinks>
          </NavItem>
        ))}
      </NavMenu>
      <NavBtn>
        <BtnLink href={linkResume} target="_blank" rel="noopener noreferrer">
          {t("navbar.resume")}
        </BtnLink>
      </NavBtn>
      <NavLanguageWrapper>
        <BtnLinkFlag
          onClick={() => changeLanguage("es")}
          aria-label="Language spanish change"
        >
          <FgES />
        </BtnLinkFlag>
        <BtnLinkFlag
          onClick={() => changeLanguage("en")}
          aria-label="Language english change"
        >
          <FgEN />
        </BtnLinkFlag>
      </NavLanguageWrapper>
    </Fragment>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  linkResume: PropTypes.string.isRequired,
};

export default Navbar;
