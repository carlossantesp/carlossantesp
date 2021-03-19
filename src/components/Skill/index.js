import React from "react";
import {
  SkillWrapper,
  SkillIconContent,
  SkillIcon,
  SkillLabel,
} from "./SkillElements";

const Skill = ({ skill }) => {
  const { title, icon } = skill;
  return (
    <SkillWrapper>
      <SkillIconContent>
        <SkillIcon src={icon} />
      </SkillIconContent>
      <SkillLabel>{title}</SkillLabel>
    </SkillWrapper>
  );
};

export default Skill;
