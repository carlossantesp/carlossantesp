import React, { useContext } from "react";
import { BsGitHub, BsLink } from "../icons/basic";
import {
  ProjectCard,
  ProjectHeader,
  ProjectImage,
  ProjectBody,
  ProjectTitle,
  ProjectDescription,
  ProjectFooter,
} from "./ProjectElements";
import PropTypes from "prop-types";
import Button from "../elements/Button";
import { InformationContext } from "../../context/InformationContext";

const Project = ({ project }) => {
  const { t } = useContext(InformationContext);
  const { name, description, link, repo, image } = project;

  return (
    <ProjectCard>
      <ProjectHeader>
        <ProjectImage src={image} />
      </ProjectHeader>
      <ProjectBody>
        <ProjectTitle href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectBody>
      <ProjectFooter>
        <Button
          size="small"
          linkUrl={link}
          external={true}
          block={true}
          secondary={true}
        >
          <BsLink /> {t("project.project")}
        </Button>
        <Button size="small" linkUrl={repo} external={true} block={true}>
          <BsGitHub /> {t("project.code")}
        </Button>
      </ProjectFooter>
    </ProjectCard>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
