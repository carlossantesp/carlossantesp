import styled from "styled-components";

export const ProjectContainer = styled.section`
  padding: 5rem 1rem 0 1rem;
`;

export const ProjectContent = styled.div`
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  ${({ theme }) => theme.bg.mobileM};
  @media screen and (min-width: 768px) {
    max-width: 700px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 992px) {
    ${({ theme }) => theme.bg.desktopXS};
  }
  @media screen and (min-width: 1200px) {
    ${({ theme }) => theme.bg.desktopS};
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    ${({ theme }) => theme.bg.desktopM};
  }
`;

export const ProjectBtnWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
`;
