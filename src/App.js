import { useTheme } from "@emotion/react";
import { css } from "@emotion/core";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Button, Flex, Text } from "rebass";
import { Label, Switch } from "@rebass/forms";
import InputField from "./components/InputField";

function App({ isDark, setIsDark }) {
  const theme = useTheme();
  const { colors, buttons, inputs, fontSize, fontWeight } = theme;

  return (
    <>
      <GlobalStyles />
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        bg={colors.containerBg}
        p={40}
        height="100vh"
        css={css`
          transition-duration: 1s;
          transition-property: background-color, color;
        `}
      >
        <Label sx={{ padding: "10px" }}>
          <Switch checked={isDark} onClick={() => setIsDark(!isDark)} />
        </Label>
        <Text
          mb={20}
          fontWeight={fontWeight.normal}
          color={isDark ? "white" : "black"}
        >
          {isDark ? "Dark" : "Light"} theme
        </Text>
        <Button
          sx={{ borderRadius: "10px" }}
          fontSize={fontSize.m}
          fontWeight={fontWeight.normal}
          color={buttons.signUpText}
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
          color={buttons.primaryColor}
          bg={buttons.primaryBg}
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
          color={buttons.primaryColor}
          bg={buttons.primaryBg}
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
          color={buttons.primaryColor}
          bg={buttons.primaryBg}
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
          color={buttons.secondaryColor}
          bg={buttons.secondaryBg}
          width={340}
          height={50}
          m={2}
        >
          Get SMS Code
        </Button>
        <InputField
          bg={inputs.primaryBg}
          textColor={inputs.primaryColor}
          focusColor={inputs.focusColor}
          borderColor={inputs.borderColor}
          label={"Phone number"}
        />
        <InputField
          bg={inputs.primaryBg}
          textColor={inputs.primaryColor}
          focusColor={inputs.focusColor}
          borderColor={inputs.borderColor}
          label={"SMS Code"}
        />
      </Flex>
    </>
  );
}

export default App;
