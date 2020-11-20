import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoggedInRoute from "src/AuthorizedComponents/protectedRoutes/LoggedInRoute";
import { Box } from "@chakra-ui/core";
import { ThemeProvider } from "emotion-theming";
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
import ViewRates from "src/view-rates/ViewRates";
import OpenAccount from "src/open-account/OpenAccount";
import CreateAccounts from "src/open-account/fiveSteps/CreateAccounts";
import SubmitApplication from "src/open-account/fiveSteps/SubmitApplication";
import DepositMoney from "src/open-account/fiveSteps/DepositMoney";
import Enroll from "src/open-account/fiveSteps/Enroll";

import "./App.css";
import Footer from "src/sharedComponents/Footer";
import YourInformation from "src/open-account/fiveSteps/YourInformation";
import Dashboard from "src/AuthorizedComponents/dashboard/Dashboard";
import Transactions from "src/AuthorizedComponents/dashboard/Transactions";

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
            <Route path="/bank/view-rates" exact>
              <ViewRates />
            </Route>
            <Route path="/open-account" exact>
              <OpenAccount />
            </Route>
            <Route path="/open-account/create-accounts" exact>
              <CreateAccounts />
            </Route>
            <Route path="/open-account/your-information" exact>
              <YourInformation />
            </Route>
            <Route path="/open-account/submit-application" exact>
              <SubmitApplication />
            </Route>
            <Route path="/open-account/deposit-money" exact>
              <DepositMoney />
            </Route>
            <Route path="/open-account/enroll" exact>
              <Enroll />
            </Route>
            <LoggedInRoute path="/dashboard" exact>
              <Dashboard />
            </LoggedInRoute>
            <LoggedInRoute path="/account/:accountid" exact>
              <Transactions />
            </LoggedInRoute>
            <Route path="/bank/savings" exact></Route>
            <Route path="/bank/checking" exact></Route>
          </Switch>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
