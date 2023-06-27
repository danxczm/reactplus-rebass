import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App";
import { theme, darkTheme } from "./components/Theme";

function Root() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<Root />);
