import styled from "styled-components";

export const HeroContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter}
  min-height: 100vh;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    justify-content: start;
    padding-left: 3rem;
  }
  @media screen and (min-width: 992px) {
    padding-left: 10rem;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 15rem;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 26rem;
  }
`;

export const HeroBg = styled.div`
  ${({ theme }) => theme.mixins.positionAbsolute}
  height: 100vh;
  width: 100%;
  z-index: -1;

  &::before {
    content: "";
    display: block;
    position: inherit;
    width: inherit;
    height: inherit;
    background-color: ${({ theme }) => theme.colorBgHero};
  }
`;

export const HeroImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const HeroContent = styled.article`
  ${({ theme }) => theme.bg.mobileM};
  @media screen and (min-width: 768px) {
    ${({ theme }) => theme.bg.mobileL};
  }
  @media screen and (min-width: 992px) {
    ${({ theme }) => theme.bg.tabletS};
  }
`;

export const HeroSay = styled.p`
  font-family: ${({ theme }) => theme.fontFira};
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontOswald};
  color: ${({ theme }) => theme.colorText};
  margin-top: 0.5rem;
  font-size: 2.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3.875rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 5rem;
    margin-top: 1rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fontOswald};
  color: ${({ theme }) => theme.colorTextAccent};
  margin-top: 0.25rem;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 3.75rem;
  }
  @media screen and (min-width: 992px) {
    margin-top: 0.5rem;
    font-size: 4rem;
  }
`;

export const HeroDescription = styled.p`
  color: ${({ theme }) => theme.colorAlt};
  font-size: 1.125rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
    margin-top: 1.5rem;
    font-size: 1.25rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2.25rem;
  @media screen and (min-width: 768px) {
    margin-top: 2.5rem;
  }
  @media screen and (min-width: 992px) {
    margin-top: 3.5rem;
  }
`;
