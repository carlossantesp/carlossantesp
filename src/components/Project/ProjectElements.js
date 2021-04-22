import styled from "styled-components";

export const ProjectCard = styled.article`
  background-color: ${({ theme }) => theme.colorBgAccent};
  border-radius: 0.5rem;
`;
export const ProjectHeader = styled.div`
  height: 20rem;
  overflow: hidden;
  padding: 0.75rem;
`;
export const ProjectImage = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
`;

export const ProjectBody = styled.div`
  padding: 1rem;
`;
export const ProjectTitle = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;
export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colorTextAccent};
  font-size: 1.125rem;
  margin: 1rem 0;
  min-height: 4.25rem;
`;
export const ProjectFooter = styled.div`
  width: 100%;
  display: flex;
  /* ${({ theme }) => theme.mixins.flexEvenly}; */
  flex-wrap: wrap;
  padding: 0.5rem 1rem 0.75rem 1rem;
  gap: 0.5rem;
  @media (min-width: 992px) {
    flex-wrap: initial;
  }
`;
