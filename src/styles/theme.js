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
  colorBgAccent: "#1F2833",
  colorText: "#F0F1F2",
  colorTextAccent: "#C5C6C7",
  colorPrimary: "#66FCF1",
  colorPrimaryAccent: "#45A29E",
  colorAlt: "#CED9D8",

  fontFira: `'Lato', sans-serif`,
  fontOswald: `'Oswald', sans-serif`,
  fontLato: `'Lato', sans-serif`,

  sizeBase: "16px",

  mixins,
};

export default theme;
