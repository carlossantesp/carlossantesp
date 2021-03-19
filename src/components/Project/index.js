import React from "react";
import {
  ProjectCard,
  ProjectHeader,
  ProjectImage,
  ProjectLinksWrapper,
  ProjectLink,
  ProjectBody,
  ProjectTitle,
  ProjectDescription,
  ProjectFooter,
  ProjectTool,
} from "./ProjectElements";
import { BsGitHub, BsLink } from "../icons/basic";

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
