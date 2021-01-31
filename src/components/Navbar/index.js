import React from "react";
import Logo from "../icons/Logo";
import CsMenu from "../icons/Menu";
import CsTimes from "../icons/Times";

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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Logo />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <CsMenu fill="current-color" />
          </MobileIcon>
          <NavMenuContainer isOpen={isOpen}>
            <MobileCloseIcon onClick={toggle}>
              <CsTimes />
            </MobileCloseIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <BtnLink to="/">Resume</BtnLink>
            </NavBtn>
          </NavMenuContainer>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
