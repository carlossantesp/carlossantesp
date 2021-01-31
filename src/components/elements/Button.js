import styled from "styled-components";

export const BtnLink = styled.a`
  font-family: ${({ theme }) => theme.fontFira};
  background-color: transparent;
  color: ${({ theme }) => theme.colorPrimary};
  border: 1px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 0.25rem;
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  transition: all 0.25s;
  &:hover {
    background-color: ${({ theme }) => theme.colorPrimaryAccent};
    color: ${({ theme }) => theme.colorText};
  }
  @media screen and (min-width: 992px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
`;

export const BtnLinkC = styled(BtnLink)`
  padding: 0.75rem 1.75rem;
  @media screen and (min-width: 992px) {
    font-size: 1.25rem;
    padding: 0.75rem 1.75rem;
    border-radius: 0.5rem;
  }
`;
