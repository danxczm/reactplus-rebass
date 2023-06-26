import { ThemeProvider } from "@emotion/react";
import theme from "./components/Theme";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Button, Flex, Text } from "rebass";
import { Label, Switch } from "@rebass/forms";
import { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [switched, setSwitched] = useState(false);
  const toggleSwitch = () => {
    setSwitched(!switched);
  };

  const { colors, fontSize, fontWeight } = theme;

  return (
    <ThemeProvider
      theme={{
        theme,
      }}
    >
      <GlobalStyles />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        bg={switched ? colors.generalSplashBg : colors.generalPerfectGray}
        p={40}
        height="100vh"
      >
        <Label sx={{ padding: "10px" }}>
          <Switch mr="10px" checked={switched} onClick={() => toggleSwitch()} />
        </Label>
        <Text
          mb={20}
          fontWeight={fontWeight.normal}
          color={switched ? "white" : "black"}
        >
          {switched ? "Dark" : "Light"} theme
        </Text>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={fontSize.m}
          fontWeight={fontWeight.normal}
          color={switched ? colors.generalGentleGray : colors.generalDavysGray}
          bg="inherit"
          width={340}
          height={50}
          m={2}
        >
          Sign up
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={fontSize.m}
          fontWeight={fontWeight.normal}
          color={
            switched ? colors.generalPebblePebble : colors.generalGhostWhite
          }
          bg={switched ? colors.generalGentleGray : colors.generalPebblePebble}
          width={340}
          height={50}
          m={2}
        >
          Login
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={fontSize.m}
          fontWeight={fontWeight.normal}
          color={
            switched ? colors.generalPebblePebble : colors.generalGhostWhite
          }
          bg={switched ? colors.generalGentleGray : colors.generalPebblePebble}
          width={340}
          height={50}
          m={2}
        >
          Next
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={fontSize.m}
          fontWeight={fontWeight.normal}
          color={
            switched ? colors.generalPebblePebble : colors.generalGhostWhite
          }
          bg={switched ? colors.generalGentleGray : colors.generalPebblePebble}
          width={340}
          height={50}
          m={2}
        >
          Done
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={fontSize.m}
          fontWeight={fontWeight.normal}
          color={switched ? colors.generalSilverOp50 : colors.generalGhostWhite}
          bg={switched ? colors.darkThemeShadesOn : colors.generalSilverSilver}
          width={340}
          height={50}
          m={2}
        >
          Get SMS Code
        </Button>
        <InputField
          bg={switched ? colors.darkThemeShadesOn : colors.generalGhostWhite}
          textColor={
            switched ? colors.generalGentleGray : colors.generalSpanishGray
          }
          focusColor={switched ? "#6A6A6A" : "#fefefe"}
          borderColor={
            switched ? colors.generalPebblePebble : colors.generalMediumGray
          }
          label={"Phone number"}
        />
        <InputField
          bg={switched ? colors.darkThemeShadesOn : colors.generalGhostWhite}
          textColor={
            switched ? colors.generalGentleGray : colors.generalSpanishGray
          }
          focusColor={switched ? "#6A6A6A" : "#fefefe"}
          borderColor={
            switched ? colors.generalPebblePebble : colors.generalMediumGray
          }
          label={"SMS Code"}
        />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
