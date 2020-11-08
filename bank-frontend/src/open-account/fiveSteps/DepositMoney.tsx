import React, { useState } from "react";
import { Box, Icon } from "@chakra-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import {
  RadioInput,
  RadioLabel,
  ContinueButton,
  TextInput,
  TextLabel,
} from "src/open-account/style";
import "react-tabs/style/react-tabs.css";
import HomeNavbar from "src/sharedComponents/HomeNavbar";
import CDs from "src/view-rates/CDs";
import AccountStep from "src/open-account/AccountStep";

type DepositMoneyProps = {
  step: 1 | 2 | 3 | 4 | 5;
};
type TParams = {
  OAP: string;
};

const DepositMoney: React.FC<DepositMoneyProps> = ({
  match,
  history,
  step,
  location,
}: RouteComponentProps<TParams>) => {
  return (
    <Box margin="auto" bg="GrayBackground" minH="100vh">
      <AccountStep step={4} />
      <Box maxWidth="1300px" m="auto" mt="50px">
        <h1>Deposit Money</h1>
        <ContinueButton onClick={() => history.push("/open-account/enroll")}>
          Move On
        </ContinueButton>
      </Box>
    </Box>
  );
};

export default withRouter(DepositMoney);
