import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
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

const Header = ({ isOpen, toggle, linkResume }) => {
  const [scrollNav, setScrollNav] = useState(false);

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
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  linkResume: PropTypes.string.isRequired,
};

export default Header;
