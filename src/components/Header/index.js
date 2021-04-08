import React from "react";
import { BsMenu } from "../icons/basic";
import {
  HeaderBrand,
  HeaderContent,
  HeaderWrapper,
  HeaderNav,
  MobileIcon,
} from "./HeaderElements";
import Navbar from "../Navbar";
import Logo from "../icons/Logo";
import PropTypes from "prop-types";
import { useNavbar } from "../../hooks/useNavbar";

const Header = ({ linkResume }) => {
  const { scrollNav, toggleHome, isOpen, toggle } = useNavbar();

  return (
    <HeaderContent scrollNav={scrollNav}>
      <HeaderWrapper>
        <HeaderBrand
          aria-label="Carlos Santillan logo"
          role="logo"
          to="/"
          onClick={toggleHome}
        >
          <Logo />
        </HeaderBrand>
        <MobileIcon onClick={toggle} aria-label="Menu">
          <BsMenu />
        </MobileIcon>
        <HeaderNav isOpen={isOpen}>
          <Navbar toggle={toggle} linkResume={linkResume} />
        </HeaderNav>
      </HeaderWrapper>
    </HeaderContent>
  );
};

Header.propTypes = {
  linkResume: PropTypes.string.isRequired,
};

export default Header;
