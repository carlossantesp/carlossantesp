import styled from "styled-components";

export const ServiceContainer = styled.section`
  padding: 5rem 1rem 0 1rem;
`;

export const ServiceContent = styled.div`
  color: ${({ theme }) => theme.colorTextAccent};
  margin-top: 1rem;
`;

export const ServiceDescription = styled.p`
  margin: 2rem 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.3rem;
  }
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    ${({ theme }) => theme.bg.tabletS};
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    ${({ theme }) => theme.bg.desktopXS};
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    ${({ theme }) => theme.bg.desktopS};
  }
`;

export const ServiceCard = styled.article`
  ${({ theme }) => theme.mixins.flexFullColumn};
  background-color: ${({ theme }) => theme.colorBgAccent};
  margin: 0 auto;
  padding: 1rem;
  max-width: 25rem;
  transition: border 0.2s;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
  }
`;

export const ServiceIcon = styled.div`
  width: 3rem;
  margin: 0 auto;
`;

export const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export const ServiceInfo = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
  min-height: 5rem;
`;
