import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { t, i18n } = useTranslation("global");
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const language = i18n.language;
  return {
    t,
    language,
    changeLanguage,
  };
};
