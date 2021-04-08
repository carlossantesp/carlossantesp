import React, { useContext } from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectBtnWrapper,
} from "./ProjectSectionElements";
import Title from "../elements/Title";
import Button from "../elements/Button";
import Project from "../Project";
import { InformationContext } from "../../context/InformationContext";

const ProjectSection = () => {
  const { t, projects } = useContext(InformationContext);

  return (
    <ProjectContainer id="projects">
      <Title section="02">{t("project-section.title")}</Title>
      <ProjectContent>
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </ProjectContent>
      <ProjectBtnWrapper>
        <Button
          linkUrl="https://github.com/carlossantesp?tab=repositories"
          external={true}
        >
          {t("project-section.see-more")}
        </Button>
      </ProjectBtnWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
