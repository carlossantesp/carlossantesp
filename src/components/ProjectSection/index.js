import React, { useContext } from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectBtnWrapper,
} from "./ProjectSectionElements";
import { Title, TitleWrapper } from "../elements/Title";
import { BtnLinkC } from "../elements/Button";
import Project from "../Project";
import { InformationContext } from "../../context/InformationContext";

const ProjectSection = () => {
  const { t, projects } = useContext(InformationContext);

  return (
    <ProjectContainer id="projects">
      <TitleWrapper>
        <Title section="02">{t("project-section.title")}</Title>
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
          rel="noopener noreferrer"
        >
          {t("project-section.see-more")}
        </BtnLinkC>
      </ProjectBtnWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
