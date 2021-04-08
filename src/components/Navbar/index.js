import React, { Fragment, useContext } from "react";
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
import { BtnLink } from "../elements/Button";
import PropTypes from "prop-types";
import { InformationContext } from "../../context/InformationContext";

const Navbar = ({ toggle }) => {
  const { t, changeLanguage, resumen } = useContext(InformationContext);

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
        <BtnLink href={resumen} target="_blank" rel="noopener noreferrer">
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
};

export default Navbar;
