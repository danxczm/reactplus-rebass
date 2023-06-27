import palette from "./styles/palette";

const theme = {
  fontSize: {
    xs: "8px",
    s: "12px",
    m: "16px",
    l: "20px",
    xl: "24px",
  },
  fontWeight: {
    light: 200,
    normal: 400,
    bold: 600,
  },
  lightTheme: "light",

  colors: {
    containerBg: palette.generalPerfectGray,
  },
  buttons: {
    signUpText: palette.generalDavysGray,
    primaryBg: palette.generalPebblePebble,
    primaryColor: palette.generalGhostWhite,
    secondaryBg: palette.generalSilverSilver,
    secondaryColor: palette.generalGhostWhite,
  },
  inputs: {
    primaryBg: palette.generalGhostWhite,
    primaryColor: palette.generalSpanishGray,
    focusColor: "#fefefe",
    borderColor: palette.generalMediumGray,
  },
};

const darkTheme = {
  ...theme,
  darkTheme: "dark",
  colors: {
    containerBg: palette.generalSplashBg,
  },
  buttons: {
    signUpText: palette.generalGentleGray,
    primaryBg: palette.generalGentleGray,
    primaryColor: palette.generalPebblePebble,
    secondaryBg: palette.darkThemeShadesOn,
    secondaryColor: palette.generalSilverOp50,
  },
  inputs: {
    primaryBg: palette.darkThemeShadesOn,
    primaryColor: palette.generalGentleGray,
    focusColor: "#6A6A6A",
    borderColor: palette.generalPebblePebble,
  },
};

export { theme, darkTheme };
