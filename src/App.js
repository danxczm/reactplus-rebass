import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import palette from "./components/styles/palette";
import { Button, Flex, Text } from "rebass";
import { Global } from "@emotion/react";

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
    palette,
  });

  return (
    <ThemeProvider
      theme={{
        theme,
        palette,
      }}
    >
      <GlobalStyles />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg={palette.generalPerfectGray}
        p={20}
      >
        <Text mb={20} fontWeight="bold">
          Light theme buttons
        </Text>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          fontWeight="600"
          color={palette.generalDavysGray}
          bg="inherit"
          width={340}
          height={50}
          m={2}
        >
          Sign up
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          fontWeight="600"
          color={palette.generalGhostWhite}
          bg={palette.generalPebblePebble}
          width={340}
          height={50}
          m={2}
        >
          Login
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          fontWeight="600"
          color={palette.generalGhostWhite}
          bg={palette.generalPebblePebble}
          width={340}
          height={50}
          m={2}
        >
          Next
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          fontWeight="600"
          color={palette.generalGhostWhite}
          bg={palette.generalPebblePebble}
          width={340}
          height={50}
          m={2}
        >
          Done
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          fontWeight="600"
          color={palette.generalGhostWhite}
          bg={palette.generalSilverSilver}
          width={340}
          height={50}
          m={2}
        >
          Get SMS Code
        </Button>
      </Flex>

      {/* // ! Dark theme */}

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg={palette.generalSplashBg}
        p={20}
      >
        <Text mb={20} fontWeight="bold" color="white">
          Dark theme buttons
        </Text>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          color={palette.generalGentleGray}
          bg="inherit"
          width={340}
          height={50}
          m={2}
        >
          Sign up
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          color={palette.generalPebblePebble}
          bg={palette.generalGentleGray}
          width={340}
          height={50}
          m={2}
        >
          Login
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          color={palette.generalPebblePebble}
          bg={palette.generalGentleGray}
          width={340}
          height={50}
          m={2}
        >
          Next
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          color={palette.generalPebblePebble}
          bg={palette.generalGentleGray}
          width={340}
          height={50}
          m={2}
        >
          Done
        </Button>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={2}
          color={palette.generalSilverOp50}
          bg={palette.darkThemeShadesOn}
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
