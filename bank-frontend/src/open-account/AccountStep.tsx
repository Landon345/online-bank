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

type AccountStepProps = {
  step: 1 | 2 | 3 | 4 | 5;
};
type TParams = {
  OAP: string;
};

const AccountStep: React.FC<AccountStepProps> = ({
  match,
  history,
  step,
  location,
}: RouteComponentProps<TParams>) => {
  const [locationParams, setLocationParams] = useState(
    location.search ? location.search : ""
  );

  return (
    <Box
      bg="Background"
      d="flex"
      p="20px"
      px="10%"
      boxShadow="0px 4px 6px 0.5px Gray"
    >
      <Box flex={0.45}>Step {step} of 5</Box>
      <Box d="flex" flex={0.55} justifyContent="space-around" fontSize="14px">
        <Box
          color={step === 1 ? "Purple" : "Gray"}
          borderBottom={step === 1 ? "5px solid Purple" : "Gray"}
        >
          1 Create Accounts
        </Box>
        <Box
          color={step === 2 ? "Purple" : "Gray"}
          borderBottom={step === 2 ? "5px solid Purple" : "Gray"}
        >
          2 Your Information
        </Box>
        <Box
          color={step === 3 ? "Purple" : "Gray"}
          borderBottom={step === 3 ? "5px solid Purple" : "Gray"}
        >
          3 Submit Application
        </Box>
        <Box
          color={step === 4 ? "Purple" : "Gray"}
          borderBottom={step === 4 ? "5px solid Purple" : "Gray"}
        >
          4 Deposit Money
        </Box>
        <Box
          color={step === 5 ? "Purple" : "Gray"}
          borderBottom={step === 5 ? "5px solid Purple" : "Gray"}
        >
          5 Enroll
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(AccountStep);
