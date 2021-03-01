import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.header`
  background-color: ${({ scrollNav, theme }) =>
    scrollNav ? theme.colorBgAccent : theme.colorMenu};
  ${({ theme }) => theme.mixins.positionFixed}
  width: 100%;
  height: 4rem;
  z-index: 1;
`;

export const NavbarContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBetween}
  height: 100%;
  padding: 1rem;
  ${({ theme }) => theme.bg.desktopL};
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (min-width: 992px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const NavLogo = styled(LinkR)`
  display: inline-block;
  width: ${({ theme }) => theme.sizeMenuIcon};
  height: ${({ theme }) => theme.sizeMenuIcon};
`;

export const MobileIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  width: ${({ theme }) => theme.sizeMenuIcon};
  height: ${({ theme }) => theme.sizeMenuIcon};
  color: ${({ theme }) => theme.colorPrimary};

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const NavMenuContainer = styled.nav`
  background-color: ${({ theme }) => theme.colorBgAccent};
  ${({ theme }) => theme.mixins.flexFullColumn};
  font-family: ${({ theme }) => theme.fontFira};
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  margin: 0;
  width: 80%;
  height: 100vh;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    background-color: transparent;
    position: initial;
    width: auto;
    height: inherit;
    flex-direction: initial;
    overflow: initial;
    opacity: 1;
  }
`;

export const MobileCloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  display: block;
  width: 2.75rem;
  height: 2.75rem;
  color: ${({ theme }) => theme.colorPrimary};
  top: 1rem;
  right: 1rem;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  counter-reset: section;
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.75rem;
  display: block;
  width: 100%;
  @media screen and (min-width: 992px) {
    margin: 0 1.5rem 0 0;
    height: inherit;
    ${({ theme }) => theme.mixins.flexBetween};
  }
`;

export const NavItem = styled.li`
  font-size: 1.25rem;
  display: block;
  @media screen and (min-width: 992px) {
    font-size: 0.875rem;
  }
`;

export const NavLinks = styled(LinkS)`
  color: ${({ theme }) => theme.colorText};
  display: block;
  padding: 1rem;
  text-align: center;
  @media screen and (min-width: 992px) {
    &.active {
      border-bottom: 3px solid ${({ theme }) => theme.colorPrimaryAccent};
    }
  }
  &::before {
    counter-increment: section;
    content: "0" counter(section) ".";
    display: block;
    color: ${({ theme }) => theme.colorPrimary};
    @media screen and (min-width: 992px) {
      margin-right: 0.5rem;
      display: inline-block;
    }
  }
`;

export const NavBtn = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  margin-bottom: 1rem;
  @media screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const NavLanguageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 0.5rem;
`;
export const BtnLinkFlag = styled.button`
  width: 3.25rem;
  height: 3.25rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: block;
  border-radius: 50%;
  color: ${({ theme }) => theme.colorText};
  &:hover {
    border: 2px solid ${({ theme }) => theme.colorTextAccent};
  }
  @media screen and (min-width: 992px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
