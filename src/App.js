import "./App.css";
import { ThemeProvider } from "styled-components";
import React from "react";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";
import TopButton from "./components/topButton/TopButton";
import { createGlobalStyle } from "styled-components";
import "./assets/font-awesome/css/all.css";

const theme = {
  body: "#FFFEFD",
  text: "#5D2A42",
  expTxtColor: "#000a12",
  highlight: "#FFF9EC",
  dark: "#00072D",
  secondaryText: "#8D697A",
  imageHighlight: "#E29F95",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#FB6376",
  headerColor: "#E29F9577",
  splashBg: "#5D2A42",
};

const GlobalStyles = createGlobalStyle`

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home theme={theme} />
      <Education theme={theme} />
      <Experience theme={theme} />
      <Contact theme={theme} />
      <TopButton theme={theme} />
    </ThemeProvider>
  );
}

export default App;
