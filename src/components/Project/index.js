import React from "react";
import { BsGitHub, BsLink } from "../icons/basic";
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
import PropTypes from "prop-types";

const Project = ({ project }) => {
  const { name, description, link, repo, image, technologies } = project;

  return (
    <ProjectCard>
      <ProjectHeader>
        <ProjectImage src={image} />
        <ProjectLinksWrapper>
          <ProjectLink href={repo} target="_blank" rel="noopener noreferrer">
            <BsGitHub />
          </ProjectLink>
          <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
            <BsLink />
          </ProjectLink>
        </ProjectLinksWrapper>
      </ProjectHeader>
      <ProjectBody>
        <ProjectTitle href={link} target="_blank" rel="noopener noreferrer">
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

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
