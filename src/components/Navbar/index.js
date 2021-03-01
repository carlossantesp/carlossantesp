import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../icons/Logo";
import { BsMenu, BsTimes } from "../icons/basic";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenuContainer,
  MobileCloseIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
} from "./NavbarElements";

import { useTranslation } from "react-i18next";

import { BtnLink } from "../elements/Button";

const Navbar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { t } = useTranslation("global");

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <BsMenu />
          </MobileIcon>
          <NavMenuContainer isOpen={isOpen}>
            <MobileCloseIcon onClick={toggle}>
              <BsTimes />
            </MobileCloseIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  onClick={toggle}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-64}
                >
                  {t("navbar.about")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  onClick={toggle}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-64}
                >
                  {t("navbar.projects")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  onClick={toggle}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-64}
                >
                  {t("navbar.services")}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  onClick={toggle}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-64}
                >
                  {t("navbar.contact")}
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <BtnLink
                href="https://drive.google.com/file/d/1JyK_uNwL0wHpCvs0gwSvo3lesq9FJeSm/view?usp=sharing"
                target="_blank"
              >
                {t("navbar.resume")}
              </BtnLink>
            </NavBtn>
          </NavMenuContainer>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
