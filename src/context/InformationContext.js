import React, { createContext } from "react";
import { data } from "../data/information";
import { useLanguage } from "../hooks/useLanguage";

export const InformationContext = createContext();

export const InformationProvider = ({ children }) => {
  const { t, language, changeLanguage } = useLanguage();
  return (
    <InformationContext.Provider
      value={{
        info: data.info[language],
        skills: data.skills,
        projects: data.projects[language],
        socials: data.socials,
        author: data.info[language].name,
        resume: data.info[language].linkResume,
        t,
        language,
        changeLanguage,
      }}
    >
      {children}
    </InformationContext.Provider>
  );
};
