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

type CreateAccountsProps = {};

const CreateAccounts: React.FC<CreateAccountsProps> = ({}) => {
  return (
    <Box margin="auto" bg="GrayBackground">
      <AccountStep step={1} />
      <Box maxW="1300px" m="auto">
        <h1>Create Accounts</h1>
      </Box>
    </Box>
  );
};

export default CreateAccounts;
