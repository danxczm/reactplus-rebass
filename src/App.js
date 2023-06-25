import { ThemeProvider } from "@emotion/react";
import theme from "./components/Theme";
import { Global } from "@emotion/react";
import { Button, Flex, Text } from "rebass";
import { Label, Switch } from "@rebass/forms";
import { useState } from "react";
// import theme from "@rebass/preset";

const GlobalStyles = () => (
  <Global
    styles={{
      "*": {
        fontFamily: "Montserrat, sans-serif",
        margin: 0,
        padding: 0,
      },
    }}
  />
);

function App() {
  console.log(`theme: `, {
    theme,
  });
  const [switched, setSwitched] = useState(false);
  const toggleSwitch = () => {
    setSwitched(!switched);
  };
  console.log(`switched: `, switched);

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
          {switched ? "Dark" : "Light"} theme buttons
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
      </Flex>
    </ThemeProvider>
  );
}

export default App;
