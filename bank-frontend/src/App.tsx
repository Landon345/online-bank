import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import { Box } from "@chakra-ui/core";
import {
  lightTheme1,
  lightTheme2,
  darkTheme1,
  darkTheme2,
  darkPine,
} from "src/styled/bankTheme";
import Navbar from "src/sharedComponents/Navbar";
import Home from "src/home/Home";
import Help from "src/help/Help";
import About from "src/about/About";

import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme1}>
        <Box bg="Background" minH="100vh">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/help" exact>
              <Help />
            </Route>
            <Route path="/bank/open-account" exact></Route>
            <Route path="/bank/savings" exact></Route>
            <Route path="/bank/checking" exact></Route>
          </Switch>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
