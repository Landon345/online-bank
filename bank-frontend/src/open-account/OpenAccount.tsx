import React, { useState } from "react";
import { Box, Icon } from "@chakra-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import HomeNavbar from "src/sharedComponents/HomeNavbar";
import CDs from "src/view-rates/CDs";

type OpenAccountProps = {
  OAP: string;
};
type TParams = {
  OAP: string;
};

const OpenAccount: React.FC = ({
  match,
  location,
}: RouteComponentProps<TParams>) => {
  const [locationParams, setLocationParams] = useState(
    location.search ? location.search : ""
  );
  const [existing, setExisting] = useState("");
  const moveon = (e) => {
    e.preventDefault();
  };
  const radioButtonChange = (e) => {
    setExisting(e.target.value);
  };
  return (
    <Box margin="auto" bg="GrayBackground" pt="20px">
      <Box maxW="1300px" m="auto">
        <Box
          p="30px"
          border="1px solid black"
          boxShadow="2px 2px 3px 2px gray"
          bg="Background"
        >
          Protect your money. Fraudsters sometimes offer you money to open an
          account, then use your information to access your assets. Don’t open
          an account because someone you’ve never met in person asked you to,
          and don’t share your bank login information with anyone.
        </Box>
        <Box color="Purple" fontSize="35px" pt="50px">
          Open Accounts
        </Box>
        <Box>You can open an account in 5 minutes or less.</Box>
        <Box border="1px solid black">Online Savings Account</Box>
        <Box border="1px solid black">
          <form onSubmit={moveon}>
            <Box onChange={radioButtonChange} d="flex" flexDir="column">
              <label htmlFor="notExisting">
                <input
                  type="radio"
                  id="notExisting"
                  name="existing"
                  value="notExisting"
                />{" "}
                I'm not an existing Ally Bank customer{" "}
              </label>
              <label htmlFor="Existing">
                <input
                  type="radio"
                  id="Existing"
                  name="existing"
                  value="existing"
                />{" "}
                I already have an account with Ally Bank or Ally Invest{" "}
              </label>
            </Box>
            {existing && <button type="submit">Continue</button>}
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(OpenAccount);
