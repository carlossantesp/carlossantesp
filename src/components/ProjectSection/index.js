import React from "react";
import { Title, TitleWrapper } from "../elements/Title";
import { BtnLinkC } from "../elements/Button";
import Project from "../Project";
import {
  ProjectContainer,
  ProjectContent,
  ProjectBtnWrapper,
} from "./ProjectSectionElements";
import { useTranslation } from "react-i18next";

const ProjectSection = ({ projects }) => {
  const { t } = useTranslation("global");
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
        >
          {t("project-section.see-more")}
        </BtnLinkC>
      </ProjectBtnWrapper>
    </ProjectContainer>
  );
};

export default ProjectSection;
