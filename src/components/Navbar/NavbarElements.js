import styled from "styled-components";
import { Link } from "react-scroll";

export const MobileCloseIcon = styled.button`
  background-color: transparent;
  border: none;
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

export const NavLinks = styled(Link)`
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
