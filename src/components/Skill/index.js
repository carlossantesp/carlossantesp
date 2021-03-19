import React from "react";
import {
  SkillWrapper,
  SkillIconContent,
  SkillIcon,
  SkillLabel,
} from "./SkillElements";
import PropTypes from "prop-types";

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

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
};

export default Skill;
