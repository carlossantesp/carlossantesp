import React from "react";
import styled from "styled-components";
import { BsGitHub, BsLink } from "./icons/basic";

const ProjectCard = styled.article`
  background-color: ${({ theme }) => theme.colorBgAccent};
`;
const ProjectHeader = styled.div`
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
const ProjectImage = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
`;
const ProjectLinksWrapper = styled.div`
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
const ProjectLink = styled.a`
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
const ProjectBody = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colorAlt};
`;
const ProjectTitle = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colorTextAccent};
  font-size: 1.125rem;
  margin: 1rem 0;
  min-height: 4.25rem;
`;
const ProjectFooter = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexEvenly};
  flex-wrap: wrap;
  padding: 0.5rem 1rem 0.75rem 1rem;
`;
const ProjectTool = styled.span`
  font-family: ${({ theme }) => theme.fontFira};
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 0.875rem;
`;

const Project = ({ project }) => {
  const { name, description, link, repo, image, technologies } = project;

  return (
    <ProjectCard>
      <ProjectHeader>
        <ProjectImage src={image} />
        <ProjectLinksWrapper>
          <ProjectLink href={repo} target="_blank">
            <BsGitHub />
          </ProjectLink>
          <ProjectLink href={link} target="_blank">
            <BsLink />
          </ProjectLink>
        </ProjectLinksWrapper>
      </ProjectHeader>
      <ProjectBody>
        <ProjectTitle href={link} target="_blank">
          {name}
        </ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectBody>
      <ProjectFooter>
        {technologies.map((techology, index) => (
          <ProjectTool key={index}>{techology}</ProjectTool>
        ))}
      </ProjectFooter>
    </ProjectCard>
  );
};

export default Project;
