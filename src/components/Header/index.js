import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../icons/Logo";
import Navbar from "../Navbar";
import { BsMenu } from "../icons/basic";
import {
  HeaderBrand,
  HeaderContent,
  HeaderWrapper,
  HeaderNav,
  MobileIcon,
} from "./HeaderElements";

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
        <HeaderBrand to="/" onClick={toggleHome}>
          <Logo />
        </HeaderBrand>
        <MobileIcon onClick={toggle}>
          <BsMenu />
        </MobileIcon>
        <HeaderNav isOpen={isOpen}>
          <Navbar toggle={toggle} linkResume={linkResume} />
        </HeaderNav>
      </HeaderWrapper>
    </HeaderContent>
  );
};

export default Header;
