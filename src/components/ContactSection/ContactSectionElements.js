import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 5rem 1rem 0 1rem;
`;

export const ContactContent = styled.div`
  ${({ theme }) => theme.mixins.flexFullColumn};
  grid-gap: 1rem;
  margin: 2rem auto;
  @media screen and (min-width: 768px) {
    ${({ theme }) => theme.bg.tabletS};
  }
  @media screen and (min-width: 992px) {
    ${({ theme }) => theme.bg.desktopXS};
  }
`;

export const ContactDescription = styled.p`
  color: ${({ theme }) => theme.colorTextAccent};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.3rem;
  }
`;

export const ContactSocialWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  margin-top: 1rem;
`;

export const ContactSocial = styled.a`
  background-color: ${({ theme }) => theme.colorText};
  color: ${({ theme }) => theme.colorBg};
  display: inline-block;
  padding: 0.75rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  transition: all 0.25s;
  &:hover {
    background-color: ${({ theme }) => theme.colorPrimaryAccent};
    color: ${({ theme }) => theme.colorText};
  }
`;
