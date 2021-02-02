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

import { BtnLink } from "../elements/Button";

const Navbar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
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
                  About
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
                  Projects
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
                  Services
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
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <BtnLink href="#">Resume</BtnLink>
            </NavBtn>
          </NavMenuContainer>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
