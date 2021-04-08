import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const SkillWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  background-color: ${({ theme }) => theme.colorBgAccent};
  color: ${({ theme }) => theme.colorTextAccent};
  margin: 0 0.5rem 0.75rem 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colorTextAccent};
  &:hover {
    background-color: #575a5e;
  }
  @media screen and (min-width: 992px) {
    min-width: 6rem;
    flex-direction: column;
    grid-gap: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 0rem 1rem 0.5rem 0;
    border-radius: 0.25rem;
  }
`;
export const SkillIconContent = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  @media screen and (min-width: 992px) {
    width: 2rem;
    height: 2rem;
    margin-right: 0;
  }
`;
export const SkillIcon = styled(ReactSVG)`
  width: 100%;
  div {
    ${({ theme }) => theme.mixins.flexCenter};
  }
`;
export const SkillLabel = styled.p`
  font-family: ${({ theme }) => theme.fontFira};
  font-size: 0.875rem;
`;
