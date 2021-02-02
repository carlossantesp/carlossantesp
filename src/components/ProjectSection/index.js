import React from "react";
import { Title, TitleWrapper } from "../elements/Title";
import { BtnLinkC } from "../elements/Button";
import Project from "../Project";
import {
  ProjectContainer,
  ProjectContent,
  ProjectBtnWrapper,
} from "./ProjectSectionElements";

const ProjectSection = ({ projects }) => {
  return (
    <ProjectContainer id="projects">
      <TitleWrapper>
        <Title section="02">Some Things I’ve Built</Title>
      </TitleWrapper>
      <ProjectContent>
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </ProjectContent>
      <ProjectBtnWrapper>
        <BtnLinkC
          href="https://github.com/carlossantesp?tab=repositories"
          target="_blank"
        >
          See more projects
        </BtnLinkC>
      </ProjectBtnWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
