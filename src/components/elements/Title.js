import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.colorText};
  font-family: ${({ theme }) => theme.fontOswald};
  font-size: 1.75rem;
  font-weight: 500;
  display: grid;
  align-items: flex-end;
  grid-template-columns: auto auto 1fr;
  grid-gap: 0.75rem;
  &::before {
    ${({ section }) => (section ? `content: "${section}."` : `content: ""`)};
    font-family: ${({ theme }) => theme.fontFira};
    color: ${({ theme }) => theme.colorPrimary};
    font-size: 1.25rem;
  }
  &::after {
    content: "";
    margin-bottom: 1rem;
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colorAlt};
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    &::before {
      font-size: 1.875rem;
    }
  }
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.bg.mobileL};
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    ${({ theme }) => theme.bg.tabletS};
  }
  @media screen and (min-width: 992px) {
    ${({ theme }) => theme.bg.tabletL};
  }
`;
