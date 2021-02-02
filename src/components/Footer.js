import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  background-color: ${({ theme }) => theme.colorBgAccent};
  margin: 5rem 0 0 0;
  @media screen and (min-width: 992px) {
    background-color: transparent;
  }
`;

const FooterDescription = styled.p`
  font-family: ${({ theme }) => theme.fontFira};
  color: ${({ theme }) => theme.colorTextAccent};
  font-size: 0.75rem;
  padding: 0.75rem 0;
  text-align: center;
  @media screen and (min-width: 992px) {
    padding: 1.2rem 0;
  }
`;

const Footer = ({ name }) => {
  return (
    <FooterContainer>
      <FooterDescription>Design & Built by {name}</FooterDescription>
    </FooterContainer>
  );
};

export default Footer;
