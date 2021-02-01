import mixins from "./mixins";

const theme = {
  bg: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },

  colorBg: "#0B0C10",
  colorBgHero: `rgba(11, 12, 16, 0.7)`,
  colorImageSelf: `rgba(56,186,204,0.15)`,
  colorBgAccent: "#1F2833",
  colorMenu: `rgba(31, 40, 51, 0.85)`,
  colorText: "#F0F1F2",
  colorTextAccent: "#C5C6C7",
  colorPrimary: "#66FCF1",
  colorPrimaryAccent: "#4CB3AE",
  colorAlt: "#CED9D8",

  fontFira: `'Fira Code', monospace`,
  fontOswald: `'Oswald', sans-serif`,
  fontLato: `'Lato', sans-serif`,

  sizeBase: "16px",

  sizeMenuIcon: "2.75rem",

  mixins,
};

export default theme;
