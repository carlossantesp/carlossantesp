import styled from "styled-components";

export const AboutContainer = styled.section`
  ${({ theme }) => theme.mixins.flexColumn};
  padding: 5rem 1rem;
`;

export const AboutContent = styled.div`
  ${({ theme }) => theme.bg.mobileL};
  margin: 1rem auto;
  display: grid;
  grid-template-areas:
    "image"
    "description"
    "skill";
  grid-gap: 0.5rem;
  @media screen and (min-width: 768px) {
    ${({ theme }) => theme.bg.tabletS};
    grid-template-areas:
      "description image"
      "skill skill";
    align-items: center;
  }
  @media screen and (min-width: 992px) {
    ${({ theme }) => theme.bg.tabletL};
    margin: 2rem auto;
  }
  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.bg.desktopXS};
    margin: 3rem auto;
  }
  @media screen and (min-width: 1440px) {
    ${({ theme }) => theme.bg.desktopS};
  }
`;

export const AboutDescWrapper = styled.div`
  grid-area: description;
  margin-top: 1.5rem;
  @media screen and (min-width: 992px) {
    ${({ theme }) => theme.bg.tabletS};
  }
`;

export const AboutDescription = styled.p`
  color: ${({ theme }) => theme.colorTextAccent};
  font-size: 1.125rem;
  width: 100%;
  line-height: 1.5;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.3rem;
  }
`;

export const AboutImage = styled.div`
  grid-area: image;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorImageSelf};
    background-blend-mode: multiply;
  }
  @media screen and (min-width: 992px) {
    margin-right: 2rem;
    text-align: right;
    &::before {
      width: 15rem;
      height: 15rem;
      right: 0;
      left: initial;
      transform: none;
    }
  }
  @media screen and (min-width: 1200px) {
    margin-right: 3rem;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 4rem;
  }
`;

export const ImageSelf = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colorPrimary};
  @media screen and (min-width: 992px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const AboutSkillWrapper = styled.div`
  grid-area: skill;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > p {
    justify-content: start;
  }
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;
