import i18n from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18n.init({
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
