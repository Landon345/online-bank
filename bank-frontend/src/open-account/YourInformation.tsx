import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import {
  RadioInput,
  RadioLabel,
  ContinueButton,
  TextInput,
  TextLabel,
} from "src/open-account/style";
import AccountStep from "src/open-account/AccountStep";

type YourInformationProps = {};

const YourInformation: React.FC<YourInformationProps> = ({}) => {
  return (
    <Box margin="auto" bg="GrayBackground">
      <AccountStep step={2} />
      <Box maxW="1300px" m="auto">
        <h1>Your Information</h1>
      </Box>
    </Box>
  );
};

export default YourInformation;
