import palette from "./palette";

import React, { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

const theme = {
  colors: {
    violetViolet: palette.lightThemeVioletViolet,
    violetOp70: palette.lightThemeVioletOp70,
    violetOp10: palette.lightThemeVioletOp10,
    violetGrayViolet: palette.lightThemeVioletGrayViolet,
    whiteSmoke: palette.lightThemeWhiteSmoke,
    violetOp15: palette.lightThemeVioletOp15,
    white: palette.lightThemeWhite,
    mediumGrayOp20: palette.lightThemeMediumGrayOp20,
    mediumGrayOp30: palette.lightThemeMediumGrayOp30,
    mediumGrayOp80: palette.lightThemeMediumGrayOp80,
    lightGray: palette.lightThemeLightGray,
    violetLightViolet: palette.lightThemeVioletLightViolet,
    lightGreen: palette.lightThemeLightGreen,
    lightGreenOp10: palette.lightThemeGreenOp10,
    green: palette.lightThemeGreen,
    pink: palette.lightThemePink,
    goldenEye: palette.lightThemeGoldenEye,
    goldenEyeOp10: palette.lightThemeGoldenEyeOp10,
    red: palette.lightThemeRed,
    greenOp10: palette.lightThemeGreen + "1A",

    lightThemeVioletViolet: palette.lightThemeVioletViolet,
    lightThemeWhiteSmoke: palette.lightThemeWhiteSmoke,

    // general
    generalGhostWhite: palette.generalGhostWhite,
    generalGentleGray: palette.generalGentleGray,
    generalPerfectGray: palette.generalPerfectGray,
    generalSpanishGray: palette.generalSpanishGray,
    generalSpanishGrayOp10: palette.generalSpanishGrayOp10,
    generalBlackShadowOp20: palette.generalBlackShadowOp20,
    generalBlackShadowOp50: palette.generalBlackShadowOp50,
    generalPebblePebble: palette.generalPebblePebble,
    generalSilverOp50: palette.generalSilverOp50,
    generalSilverSilver: palette.generalSilverSilver,
    generalPebbleOp40: palette.generalPebbleOp40,
    generalMediumGray: palette.generalMediumGray,
    generalLightGreen: palette.generalLightGreen,
    generalDarkGreen: palette.generalDarkGreen,
    davysGray: palette.generalDavysGray,
    generalDavysGray: palette.generalDavysGray,
    generalSplashBg: palette.generalSplashBg,

    // skins
    skinsUniversalBlack: palette.skinsUniversalBlack,
    skinsStrongViolet: palette.skinsStrongViolet,
    skinsLightBlue: palette.skinsLightBlue,
    skinsDarkPink: palette.skinsDarkPink,
    skinsTan: palette.skinsTan,
    skinsGold: palette.skinsGold,
    skinsStrongGold: palette.skinsStrongGold,
    skinsOrange: palette.skinsOrange,
    skinsDarkOrange: palette.skinsDarkOrange,
    skinsRed: palette.skinsRed,
    skinsLightRed: palette.skinsLightRed,
    skinsMediumRed: palette.skinsMediumRed,
    skinsPink: palette.skinsPink,
    skinsBlue: palette.skinsBlue,
    skinsMediumBlue: palette.skinsMediumBlue,
    skinsSkyBlue: palette.skinsSkyBlue,
    skinsTurquoise: palette.skinsTurquoise,
    skinsSpringGreen: palette.skinsSpringGreen,
    skinsChartreuse: palette.skinsChartreuse,
    skinsYellowGreen: palette.skinsYellowGreen,
    skinsBlueViolet: palette.skinsBlueViolet,
    skinsVegasGold: palette.skinsVegasGold,
    skinsBiceGreen: palette.skinsBiceGreen,

    // cardDarkColor
    cardDarkColor: palette.cardDarkColor,

    transparent: palette.generalTransparent,

    // gradient
    splashBgGradient: palette.splashBgGradient,
    vipCardBgGradient1: palette.vipCardBgGradient1,
    vipCardBgGradient2: palette.vipCardBgGradient2,
    vipCardBgGradient3: palette.vipCardBgGradient3,
    vipCardBg: palette.vipCardBg,

    // navBar
    navBarBg: palette.generalGhostWhite,

    // main
    cardStyle: palette.skinsUniversalBlack,
    background: palette.generalPerfectGray,
    bannerColorText: palette.skinsUniversalBlack,

    // asset item
    assetBg: palette.generalGhostWhite,
    assetTitle: palette.generalPebblePebble,

    // dropDown
    dropDownCancelButtonBg: palette.lightThemeMediumGrayOp30,
    dropDownElementBg: palette.generalGhostWhite,
    dropDownText: palette.generalPebblePebble,
    dropDownSeparator: palette.lightThemeMediumGrayOp80,
    dropDownBg: palette.generalPerfectGray,

    // radioButton
    radioBorder: palette.generalGentleGray,
    radioCenter: palette.generalGentleGray,

    // header
    headerText: palette.generalDavysGray,
    headerIcons: palette.generalPebblePebble,
    headerUnderline: palette.generalSilverSilver,
    headerUnderlineModal: palette.generalSilverSilver,

    // history
    historyText: palette.generalPebblePebble,
    historySeparator: palette.generalGentleGray,
    historyCanceledStatus: palette.generalDavysGray,
    historyCanceledText: palette.generalMediumGray,
    historyDetailsBg: palette.lightThemeWhiteSmoke,
    historySubtext: palette.generalDavysGray,
    historySeparatorTwo: palette.generalSpanishGray,
    historyHideButton: palette.generalPebblePebble,
    historyHideButtonBG: palette.generalGentleGray,
    historyStatusText: palette.skinsUniversalBlack,

    // Input
    inputBorder: palette.generalMediumGray,
    inputColor: palette.generalGhostWhite,
    inputActiveColor: palette.lightThemeWhite,
    inputLabel: palette.generalSpanishGray,
    clearButtonBg: palette.generalPerfectGray,
    cleanButtonIcon: palette.generalPebblePebble,
    countryInputBg: palette.generalGhostWhite,

    // SelectCoin
    selectAssetBg: palette.generalGhostWhite,
    selectAssetDetailedText: palette.generalPebblePebble,
    selectAssetDetailedSeparator: palette.generalGentleGray,
    selectAssetBlockBg: palette.generalGhostWhite,
    currencyBg: palette.generalGhostWhite,

    // TopUp
    addressText: palette.generalPebblePebble,
    buttonsBg: palette.generalSilverOp50,
    topUpMin: palette.generalDavysGray,
    topUpAssetNameBg: palette.lightThemeWhiteSmoke,
    topUpFeeText: palette.generalDavysGray,
    topUpSeparator: palette.generalGentleGray,

    // TopUp History Addresses
    historyAddressBg: palette.generalGhostWhite,
    notActiveHistoryAddressBg: palette.generalSilverOp50,
    notActiveAddressText: palette.generalSpanishGray,
    addressNameColor: palette.generalDavysGray,

    // Toast
    toastBg: palette.lightThemeWhite,

    // Cards
    selectedCardText: palette.generalSpanishGray,
    selectedCardCarouselText: palette.generalDavysGray,
    cardNumberColor: palette.generalDavysGray,
    cardViewBg: palette.generalGhostWhite,
    cardIcon: palette.generalPebblePebble,
    cardInfoBlockBg: palette.generalGhostWhite,

    // Buttons
    buttonText: palette.generalGhostWhite,
    buttonSelected: palette.generalSilverSilver,

    // Swap
    youGiveBg: palette.generalGhostWhite,
    swapSeparator: palette.generalSilverSilver,
    currencySelectBg: palette.generalSilverOp50,
    swapButtonBg: palette.generalGentleGray,
    swapOldFee: palette.generalDavysGray,

    // Settings
    settingsSeparator: palette.generalGentleGray,
    containerBg: palette.generalGhostWhite,

    // CheckBox
    checkIconActive: palette.generalGhostWhite,
    checkIcon: palette.generalGentleGray,

    // QrPage
    qrText: palette.generalPebblePebble,

    // Awards
    awardsListTitle: palette.generalDavysGray,
    awardsItemTitle: palette.generalPebblePebble,
    awardsItemBGColor: palette.generalGentleGray,
    awardsItemCurrencySignBGColor: palette.generalSpanishGray,
    awardsBottomSheetText: palette.generalDavysGray,
    awardsBottomSheetAmount: palette.generalPebblePebble,
    awardsLoaderBg: palette.lightThemeVioletOp15,

    // Donations
    donationsBg: palette.generalGentleGray,
    donationsSeparator: palette.generalMediumGray,
    donationsElementBg: palette.generalGhostWhite,
    donationCategoryText: palette.generalPebblePebble,
    donationUkraine: palette.generalSpanishGray,

    // SendInviteScreen
    generateLinkBg: palette.generalGhostWhite,
    generateLinkDescriptionBg: palette.generalGentleGray,
    generateLinkDescriptionBorder: palette.generalSpanishGray,

    // WithdrawFileScreen
    withdrawItemSeparator: palette.generalSpanishGray,
    withdrawTotal: palette.generalPebblePebble,

    // AcceptScreen
    selectedContactBg: palette.generalGentleGray,

    // ProfileScreen
    userAvatarBg: palette.generalGhostWhite,
    userIcon: palette.generalPebblePebble,
    userPhone: palette.generalPebblePebble,
    userIdBg: palette.generalGentleGray,
    userIdItem: palette.generalSpanishGray,
    userProfileNavBG: palette.generalGhostWhite,
    userProfileItem: palette.generalPebblePebble,
    userApyContainer: palette.lightThemeVioletOp10,
    userEmailItem: palette.lightThemeVioletViolet,
    userRemoveItem: palette.generalDavysGray,

    // InvestScreen
    tabsInactiveBg: palette.generalGentleGray,
    tabsActiveBg: palette.generalGhostWhite,
    tabsInactiveText: palette.generalSpanishGray,
    tabsActiveText: palette.generalDavysGray,
    subHeaderText: palette.generalDavysGray,
    searchIcon: palette.generalPebblePebble,
    activeFilterTabText: palette.generalGhostWhite,
    inactiveTabBg: palette.generalSilverOp50,
    activeTabBg: palette.generalDavysGray,
    investItemBg: palette.generalGhostWhite,
    rankBg: palette.generalPerfectGray,
    chartTopValue: palette.generalMediumGray,
    chartSeparator: palette.generalPerfectGray,
    currencyInfoBg: palette.generalGhostWhite,
    currencyInfoSeparator: palette.generalGentleGray,

    // InfoNotification
    notificationDescription: palette.generalPebblePebble,

    // SecurityScreen
    secretBackground: palette.generalGhostWhiteOp60,
    settingsBackground: palette.generalGhostWhite,
    googleAuthTextColor: palette.lightThemeVioletOp70,
    secretTitle: palette.generalDavysGray,

    // Verification
    countrySelectorBg: palette.lightThemeWhite,

    // Notification
    notificationIcon: palette.lightThemeVioletViolet,

    // Referral screen
    refLinkItemBg: palette.generalGhostWhite,
    refLinkBg: palette.generalPerfectGray,
  },
  fontSize: {
    xs: "8px",
    s: "12px",
    m: "16px",
    l: "20px",
    xl: "24px",
  },
  buttonVariants: {
    defaults: {},
    primary: {
      backgroundColor: "addressText",
      paddingHorizontal: "m",
      paddingVertical: "m",
      alignItems: "center",
      justifyContent: "center",
      //   borderRadius: scale(10),
      //   height: scale(54),
    },
    primarySmall: {
      backgroundColor: "addressText",
      paddingHorizontal: "sm",
      paddingVertical: "s",
      alignItems: "center",
      justifyContent: "center",
      //   borderRadius: scale(10),
    },
    primaryKeyboard: {
      backgroundColor: "addressText",
      paddingVertical: "m",
      alignItems: "center",
      justifyContent: "center",
    },
    primaryCircle: {
      backgroundColor: "addressText",
      paddingHorizontal: "m",
      paddingVertical: "m",
      justifyContent: "center",
      alignItems: "center",
    },
    disabled: {
      backgroundColor: "generalSilverSilver",
      paddingHorizontal: "m",
      paddingVertical: "m",
      alignItems: "center",
      justifyContent: "center",
      //   borderRadius: scale(10),
    },
    second: {
      paddingHorizontal: "m",
      paddingVertical: "m",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
    },
    dotted: {
      paddingHorizontal: "m",
      paddingVertical: "m",
      alignItems: "center",
      //   borderRadius: scale(10),
      //   borderWidth: scale(2),
      borderStyle: "dotted",
      justifyContent: "center",
    },
    borderBtn1: {
      justifyContent: "center",
      alignItems: "center",
      //   borderRadius: scale(16),
      //   height: scale(46),
      //   width: scale(46),
    },
    borderBtn2: {
      justifyContent: "center",
      alignItems: "center",
      //   borderRadius: scale(10),
      //   height: scale(36),
      //   width: scale(36),
    },
    borderBtnPin: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 36,
      height: 72,
      width: 72,
      backgroundColor: "generalPebblePebble",
    },
    borderBtnCopy: {
      justifyContent: "center",
      alignItems: "center",
      //   borderRadius: scale(20),
      //   height: scale(40),
      //   width: scale(40),
      backgroundColor: "generalPebblePebble",
    },
    themeSwitch: {
      //   borderWidth: scale(10),
      borderColor: "violetViolet",
      backgroundColor: "violetOp15",
      //   borderRadius: scale(8),
      justifyContent: "center",
      alignItems: "center",
    },
    cancel1: {
      backgroundColor: "dropDownCancelButtonBg",
      paddingHorizontal: "m",
      paddingVertical: "m",
      justifyContent: "center",
      alignItems: "center",
      //   borderRadius: scale(12),
    },
    blackLinear: {
      //   borderWidth: scale(1),
      borderColor: "historyText",
      backgroundColor: "",
      //   borderRadius: scale(8),
      justifyContent: "center",
      alignItems: "center",
    },
  },
  phoneNumberInput: {
    defaults: {},
    inputPlaceholder: {
      fontFamily: "Montserrat-SemiBold",
      //   fontSize: moderateScale(20),
      //   lineHeight: moderateScale(24),
      //   letterSpacing: moderateScale(0.5),
    },
  },
  textInput: {
    defaults: {},
    primary: {
      //   height: scale(46),
      fontFamily: "Montserrat-Medium",
      //   fontSize: moderateScale(16),
      //   lineHeight: moderateScale(19),
      //   letterSpacing: moderateScale(0.5),
      color: "generalPebblePebble",
      //   borderRadius: scale(10),
    },
    // fonts input
    inputLabelIdle: {
      fontFamily: "Montserrat-Regular",
      //   fontSize: moderateScale(18),
      //   lineHeight: moderateScale(23),
      //   letterSpacing: moderateScale(0.5),
    },
    inputLabelActive: {
      fontFamily: "SFUIDisplay-Medium",
      //   fontSize: moderateScale(12),
      //   lineHeight: moderateScale(16),
      //   letterSpacing: moderateScale(1),
    },
    inputPlaceholder: {
      fontFamily: "Montserrat-SemiBold",
      //   fontSize: moderateScale(20),
      //   lineHeight: moderateScale(24),
      //   letterSpacing: moderateScale(0.5),
    },
    inputPlaceholder2: {
      fontFamily: "Montserrat-Medium",
      //   fontSize: moderateScale(20),
      //   lineHeight: moderateScale(24),
      //   letterSpacing: moderateScale(0.5),
    },
  },
  textKeyboardInput: {
    defaults: {},
    primary: {
      fontFamily: "Montserrat-Regular",
      //   fontSize: moderateScale(18),
      //   lineHeight: moderateScale(23),
      //   letterSpacing: moderateScale(0.5),
      // letterSpacing: 0.5
    },
  },
};

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // dark
    violetOp70: palette.darkThemeVioletOp70,
    violetOp10: palette.darkThemeVioletOp20,
    violetLightViolet: palette.darkThemeVioletLightViolet,
    shadesOn: palette.darkThemeShadesOn,
    charcoal: palette.darkThemeCharcoal,
    jet: palette.darkThemeJet,
    black: palette.darkThemeBlack,
    mediumGrayOp80: palette.darkThemeMediumGrayOp80,
    green: palette.darkThemeGreen,
    pink: palette.darkThemePink,
    goldenEye: palette.darkThemeGoldenEye,
    red: palette.darkThemeRed,
    violetViolet: palette.darkThemeVioletViolet,
    generalDavysGray: palette.generalMediumGray,
    skinsBlueViolet: palette.darkSkinsBlueViolet,
    skinsSpringGreen: palette.darkSkinsSpringGreen,
    greenOp10: palette.darkThemeGreen + "1A",

    // navBar
    navBarBg: palette.skinsUniversalBlack,

    // main
    background: palette.darkThemeBlack,
    cardStyle: palette.generalPebblePebble,
    bannerColorText: palette.generalGhostWhite,

    // asset item
    assetBg: palette.darkThemeCharcoal,
    assetTitle: palette.generalGentleGray,

    // dropDown
    dropDownCancelButtonBg: palette.generalPebblePebble,
    dropDownElementBg: palette.darkThemeShadesOn,
    dropDownText: palette.generalGentleGray,
    dropDownSeparator: palette.generalPebblePebble,
    dropDownBg: palette.darkThemeLightBlack,

    // radioButton
    radioBorder: palette.generalMediumGray,
    radioCenter: palette.generalSpanishGray,

    // header
    headerText: palette.generalMediumGray,
    headerIcons: palette.generalGentleGray,
    headerUnderline: palette.darkThemeJet,
    headerUnderlineModal: palette.generalPebblePebble,

    // history
    historyText: palette.generalGentleGray,
    historySeparator: palette.generalBlackShadowOp50,
    historySeparatorTwo: palette.darkThemeCharcoal,
    historyCanceledStatus: palette.generalSpanishGray,
    historyCanceledText: palette.generalSpanishGray,
    historyDetailsBg: palette.generalPebblePebble,
    historySubtext: palette.generalMediumGray,
    historyHideButton: palette.generalMediumGray,
    historyHideButtonBG: palette.darkThemeShadesOn,
    historyStatusText: palette.generalGentleGray,

    // Input
    inputBorder: palette.generalPebblePebble,
    inputColor: palette.darkThemeShadesOn,
    inputActiveColor: palette.generalGentleGray,
    inputLabel: palette.generalGentleGray,
    clearButtonBg: palette.generalSpanishGray,
    cleanButtonIcon: palette.generalPebblePebble,
    countryInputBg: palette.darkThemeShadesOn,

    // SelectCoin
    selectAssetBg: palette.darkThemeShadesOn,
    selectAssetDetailedText: palette.generalGentleGray,
    selectAssetDetailedSeparator: palette.generalPebblePebble,
    selectAssetBlockBg: palette.generalBlackShadowOp20,
    currencyBg: palette.generalPebblePebble,

    // TopUp
    addressText: palette.generalGentleGray,
    buttonsBg: palette.generalDavysGray,
    topUpMin: palette.generalMediumGray,
    topUpAssetNameBg: palette.generalPerfectGray,
    topUpFeeText: palette.generalMediumGray,
    topUpSeparator: palette.generalPebblePebble,

    // TopUp History Addresses
    historyAddressBg: palette.skinsUniversalBlack,
    notActiveHistoryAddressBg: palette.skinsUniversalBlack,
    addressNameColor: palette.generalGentleGray,

    // Toast
    toastBg: palette.generalDavysGray,

    // Cards
    selectedCardText: palette.generalMediumGray,
    selectedCardCarouselText: palette.generalGentleGray,
    cardNumberColor: palette.generalGentleGray,
    cardViewBg: palette.generalPebblePebble,
    cardIcon: palette.generalGentleGray,
    cardInfoBlockBg: palette.darkThemeCharcoal,

    // Buttons
    buttonText: palette.generalPebblePebble,
    buttonSelected: palette.generalDavysGray,

    // Swap
    youGiveBg: palette.generalPebblePebble,
    swapSeparator: palette.darkThemeCharcoal,
    currencySelectBg: palette.generalSpanishGray,
    swapButtonBg: palette.darkThemeShadesOn,
    swapOldFee: palette.generalMediumGray,

    // Settings
    settingsSeparator: palette.darkThemeCharcoal,
    containerBg: palette.darkThemeCharcoal,

    // CheckBox
    checkIconActive: palette.generalGentleGray,
    checkIcon: palette.darkThemeShadesOn,

    // awards
    awardsLoaderBg: palette.darkThemeVioletOp20,

    // QrPage
    qrText: palette.generalGhostWhite,

    // Awards
    awardsListTitle: palette.generalMediumGray,
    awardsItemTitle: palette.generalGentleGray,
    awardsItemBGColor: palette.darkThemeShadesOn,
    awardsItemCurrencySignBGColor: palette.darkThemeJet,
    awardsBottomSheetText: palette.generalMediumGray,
    awardsBottomSheetAmount: palette.generalGentleGray,

    // Donations
    donationsBg: palette.generalBlackShadowOp20,
    donationsSeparator: palette.darkThemeShadesOn,
    donationsElementBg: palette.generalGentleGray,
    donationCategoryText: palette.generalSpanishGray,
    donationUkraine: palette.skinsUniversalBlack,

    // SendInviteScreen
    generateLinkBg: palette.darkThemeShadesOn,
    generateLinkDescriptionBg: palette.darkThemeJet,
    generateLinkDescriptionBorder: palette.generalDavysGray,

    // WithdrawFileScreen
    withdrawItemSeparator: palette.generalSpanishGray,
    withdrawTotal: palette.skinsUniversalBlack,

    // AcceptScreen
    selectedContactBg: palette.darkThemeJet,

    // ProfileScreen
    userAvatarBg: palette.generalGentleGray,
    userIcon: palette.generalPebblePebble,
    userPhone: palette.generalGentleGray,
    userIdBg: palette.generalBlackShadowOp50,
    userIdItem: palette.generalDavysGray,
    userProfileNavBG: palette.generalSilverSilver,
    userProfileItem: palette.generalPebblePebble,
    userApyContainer: palette.darkThemeVioletOp30,
    userEmailItem: palette.generalGentleGray,
    userRemoveItem: palette.generalMediumGray,

    // InvestScreen
    tabsInactiveBg: palette.skinsUniversalBlack,
    tabsActiveBg: palette.generalSpanishGray,
    tabsInactiveText: palette.generalDavysGray,
    tabsActiveText: palette.generalPerfectGray,
    subHeaderText: palette.generalMediumGray,
    searchIcon: palette.generalGentleGray,
    activeFilterTabText: palette.generalPebblePebble,
    inactiveTabBg: palette.generalPebblePebble,
    activeTabBg: palette.generalGentleGray,
    investItemBg: palette.darkThemeCharcoal,
    rankBg: palette.generalDavysGray,
    chartTopValue: palette.generalDavysGray,
    chartSeparator: palette.generalPebblePebble,
    currencyInfoBg: palette.skinsUniversalBlack,
    currencyInfoSeparator: palette.generalPebblePebble,

    // InfoNotification
    notificationDescription: palette.generalGentleGray,

    // SecurityScreen
    secretBackground: palette.darkThemeShadesOnOp60,
    settingsBackground: palette.skinsUniversalBlack,
    googleAuthTextColor: palette.generalGentleGray,
    secretTitle: palette.generalMediumGray,

    // Verification
    countrySelectorBg: palette.darkThemeLightBlack,

    // Notification
    notificationIcon: palette.generalGentleGray,

    // Referral screen
    refLinkItemBg: palette.darkThemeLightBlack,
    refLinkBg: palette.darkThemeShadesOn,
  },
};

export { theme, darkTheme };
