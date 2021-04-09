import React from "react";
import { Box } from "@chakra-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ContinueButton } from "src/open-account/style";
import "react-tabs/style/react-tabs.css";

import AccountStep from "src/open-account/AccountStep";

type EnrollProps = {
  step: 1 | 2 | 3 | 4 | 5;
};
type TParams = {
  OAP: string;
};

const Enroll: React.FC<EnrollProps> = ({
  match,
  history,
  step,
  location,
}: RouteComponentProps<TParams>) => {
  return (
    <Box margin="auto" bg="GrayBackground" minH="100vh">
      <AccountStep step={5} />
      <Box maxWidth="1300px" m="auto" mt="50px">
        <h1>Enroll, Now you can login</h1>
        <ContinueButton onClick={() => history.push("/")}>
          All Done!
        </ContinueButton>
      </Box>
    </Box>
  );
};

export default withRouter(Enroll);
