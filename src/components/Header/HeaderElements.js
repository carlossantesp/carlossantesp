import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContent = styled.header`
  background-color: ${({ scrollNav, theme }) =>
    scrollNav ? theme.colorBgAccent : theme.colorMenu};
  ${({ theme }) => theme.mixins.positionFixed}
  width: 100%;
  height: 4rem;
  z-index: 1;
`;

export const HeaderWrapper = styled.div`
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

export const HeaderBrand = styled(Link)`
  display: inline-block;
  width: ${({ theme }) => theme.sizeMenuIcon};
  height: ${({ theme }) => theme.sizeMenuIcon};
`;

export const MobileIcon = styled.button`
  background: transparent;
  border: none;
  display: inline-block;
  cursor: pointer;
  width: ${({ theme }) => theme.sizeMenuIcon};
  height: ${({ theme }) => theme.sizeMenuIcon};
  color: ${({ theme }) => theme.colorPrimary};

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
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
