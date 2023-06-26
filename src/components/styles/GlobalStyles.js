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

export default GlobalStyles;
