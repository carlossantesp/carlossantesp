import React from "react";
import styled from "styled-components";

const BtnLink = styled.a`
  font-family: ${({ theme }) => theme.fontFira};
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.colorPrimaryAccent : "transparent"};
  color: ${({ secondary, theme }) =>
    secondary ? theme.colorText : theme.colorPrimary};
  border: 1px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 0.25rem;
  padding: ${({ size }) =>
    size === "small" ? `0.75rem 2rem` : `0.75rem 1.75rem`};
  font-size: 1.25rem;
  ${({ block }) => block && `width:100%`};
  display: ${({ block }) => (block ? `block` : `inline-block`)};
  text-align: center;
  transition: all 0.25s;
  svg {
    display: inline-block;
    width: auto;
    height: inherit;
  }
  &:hover {
    background-color: ${({ secondary, theme }) =>
      secondary ? theme.colorBgAccent : theme.colorPrimaryAccent};
    color: ${({ theme }) => theme.colorText};
  }
  @media screen and (min-width: 992px) {
    font-size: ${({ size }) => (size === "small" ? `0.875rem` : `1.25rem`)};
    padding: ${({ size }) =>
      size === "small" ? `0.5rem 1rem` : `0.75rem 1.75rem`};
    border-radius: 0.5rem;
  }
`;
const Button = ({ children, linkUrl, external, size, block, secondary }) => {
  return (
    <BtnLink
      href={linkUrl}
      rel={external && "noopener noreferrer"}
      target={external && "_blank"}
      size={size}
      block={block}
      secondary={secondary}
    >
      {children}
    </BtnLink>
  );
};

export default Button;
