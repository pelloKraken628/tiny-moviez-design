import React from "react";
import Home from "./pages/Home";
import "reset-css";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
