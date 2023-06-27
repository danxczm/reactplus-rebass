import React, {
  useEffect,
  useMemo,
  useState,
  createContext,
  useContext,
  useRef,
  useCallback,
} from "react";
// import { Appearance, StatusBar } from "react-native";
// import { ThemeProvider } from "@shopify/restyle";
// import { useSelector } from "react-redux";

import { theme, darkTheme } from "./theme";

// import cacheStorage from "@trustee/trusteeBasic/utils/CacheStorage/CacheStorage";

const COLOR_SCHEME_FLICKER_DELAY_MS = 250;

export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  SYSTEM: "system",
};

export const ThemeContext = createContext({
  isDarkMode: false,
  colorScheme: THEMES.LIGHT,
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const MainThemeProvider = (props) => {
  const [colorScheme, setColorScheme] = useState();

  const isSystemDarkMode = useColorScheme() === "dark";

  const colorSchemeSystemAdjusted =
    colorScheme === THEMES.SYSTEM
      ? isSystemDarkMode
        ? "dark"
        : "light"
      : colorScheme;

  useEffect(() => {
    if (colorScheme) {
      cacheStorage.setItem("theme", colorScheme);
    }
  }, [colorScheme]);

  useEffect(() => {
    const loadUserPref = async () => {
      const userPref = cacheStorage.getItem("theme") || THEMES.LIGHT;

      const userPrefSystemAdjusted =
        userPref === THEMES.SYSTEM
          ? isSystemDarkMode
            ? "dark"
            : "light"
          : userPref;

      StatusBar.setBarStyle(
        userPrefSystemAdjusted === THEMES.DARK
          ? "light-content"
          : "dark-content",
        true
      );

      setColorScheme(userPref);
    };

    loadUserPref();
  }, [isSystemDarkMode]);

  const currentTheme = useMemo(
    () => ({
      colorScheme,
      isDarkMode: colorSchemeSystemAdjusted === "dark",
      setTheme: (scheme) => {
        const schemeSystemAdjusted =
          scheme === THEMES.SYSTEM
            ? isSystemDarkMode
              ? "dark"
              : "light"
            : scheme;

        StatusBar.setBarStyle(
          schemeSystemAdjusted === THEMES.DARK
            ? "light-content"
            : "dark-content",
          true
        );

        setColorScheme(scheme);

        // LayoutAnimation.configureNext(
        //     LayoutAnimation.create(300, 'easeInEaseOut', 'opacity')
        // );
      },

      // return currentColorScheme
    }),
    [colorScheme, colorSchemeSystemAdjusted, isSystemDarkMode]
  );

  const currentScheme = useMemo(() => {
    const schemeSystemAdjusted =
      colorScheme === THEMES.SYSTEM
        ? isSystemDarkMode
          ? "dark"
          : "light"
        : colorScheme;

    const currentColorScheme =
      schemeSystemAdjusted === THEMES.DARK ? darkTheme : theme;

    return currentColorScheme;
  }, [colorScheme, colorSchemeSystemAdjusted, isSystemDarkMode]);

  if (!colorScheme) {
    return null;
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      {/* <ThemeProvider theme={currentScheme}>{props.children}</ThemeProvider>// ! Shopify ting  */}
    </ThemeContext.Provider>
  );
};

function useColorScheme() {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const timeout = useRef();

  const resetCurrentTimeout = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }, []);

  const onColorSchemeChange = useCallback(
    (preferences) => {
      resetCurrentTimeout();

      timeout.current = setTimeout(() => {
        setColorScheme(preferences.colorScheme);
      }, COLOR_SCHEME_FLICKER_DELAY_MS);
    },
    [resetCurrentTimeout]
  );

  useEffect(() => {
    Appearance.addChangeListener(onColorSchemeChange);
    return () => {
      resetCurrentTimeout();
    };
  }, [onColorSchemeChange, resetCurrentTimeout]);

  return colorScheme;
}
