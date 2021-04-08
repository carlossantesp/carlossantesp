import { useCallback, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

export const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = useCallback(() => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, [changeNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return {
    scrollNav,
    toggleHome,
    isOpen,
    toggle,
  };
};
