import styled from "styled-components";

export const ProjectCard = styled.article`
  background-color: ${({ theme }) => theme.colorBgAccent};
`;
export const ProjectHeader = styled.div`
  height: 15rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    &:hover {
      &::before {
        bottom: 0;
      }
      & > div {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(31, 40, 51, 0.25);
    transition: all 0.25s;
    @media screen and (min-width: 992px) {
      bottom: -100%;
    }
  }
`;
export const ProjectImage = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
`;
export const ProjectLinksWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (min-width: 992px) {
    top: 100%;
    left: 50%;
    right: initial;
    transform: translateX(-50%);
    transition: top 0.25s;
  }
`;
export const ProjectLink = styled.a`
  margin: 1rem 1rem 0 0;
  transition: color 0.25s;
  &:hover {
    color: ${({ theme }) => theme.colorPrimary};
  }
  @media screen and (min-width: 992px) {
    margin: 0.5rem;
    width: 2.5rem;
  }
`;
export const ProjectBody = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorAlt};
`;
export const ProjectTitle = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
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
  ${({ theme }) => theme.mixins.flexEvenly};
  flex-wrap: wrap;
  padding: 0.5rem 1rem 0.75rem 1rem;
`;
export const ProjectTool = styled.span`
  font-family: ${({ theme }) => theme.fontFira};
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 0.875rem;
`;
