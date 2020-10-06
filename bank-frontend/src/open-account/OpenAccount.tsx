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

const accountTypeMapping = {
  "CD-3": "High Yield 3 Month CD",
  "CD-6": "High Yield 6 Month CD",
  "CD-9": "High Yield 9 Month CD",
  "CD-12": "High Yield 12 Month CD",
  "CD-18": "High Yield 18 Month CD",
  "CD-36": "High Yield 3 Year CD",
  "CD-60": "High Yield 5 Year CD",
  "CDRYR-48": "Raise Your Rate 4 Year CD",
  "CDRYR-24": "Raise Your Rate 2 Year CD",
  "NCD-11": "No Penalty 11 Month CD",
};

type OpenAccountProps = {
  OAP: string;
};
type TParams = {
  OAP: string;
};

const OpenAccount: React.FC = ({
  match,
  history,
  location,
}: RouteComponentProps<TParams>) => {
  const [locationParams, setLocationParams] = useState(
    location.search ? location.search : ""
  );
  const [existing, setExisting] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {};
  const radioButtonChange = (e) => {
    setExisting(e.target.value);
  };
  return (
    <Box margin="auto" bg="GrayBackground">
      <Box maxW="1300px" m="auto">
        <Box
          display="flex"
          color="Paragraph"
          fontSize="14px"
          py="20px"
          justifyContent="flex-end"
        >
          {" "}
          <Box mx="10px">Orion Bank: 1-877-247-2559</Box>
          <Box mx="10px">Open 24/7</Box>
          <Box mx="10px">Wait Time: 1 min</Box>
        </Box>
        <Box
          p="30px"
          border="1px solid black"
          boxShadow="2px 2px 3px 2px gray"
          bg="Background"
        >
          <strong>Protect your money.</strong> Fraudsters sometimes offer you
          money to open an account, then use your information to access your
          assets. Don’t open an account because someone you’ve never met in
          person asked you to, and don’t share your bank login information with
          anyone.
        </Box>
        <Box d="flex" justifyContent="space-between" py="50px">
          <Box color="Purple" fontSize="35px" flex={0.3}>
            Open Accounts
          </Box>
          <Box d="flex" flex={0.7} justifyContent="space-around">
            <Box color="Gray">1 Create Accounts</Box>
            <Box color="Gray">2 Your Information</Box>
            <Box color="Gray">3 Submit Application</Box>
            <Box color="Gray">4 Deposit Money</Box>
            <Box color="Gray">5 Enroll</Box>
          </Box>
        </Box>
        <Box width="60%">
          <Box py="20px">You can open an account in 5 minutes or less.</Box>
          {locationParams && (
            <Box border="1px solid black" p="20px" bg="Background">
              {accountTypeMapping[locationParams.split("=")[1]]}
            </Box>
          )}

          <Box border="1px solid black" p="20px" bg="LightGrayBackground">
            <Box d="flex" py="20px">
              <Box flex={0.7}>Choose the option that describes you best.</Box>

              <Box flex={0.3}>
                <Link>Have you placed a security freeze on your credit?</Link>
              </Box>
            </Box>

            <Box onChange={radioButtonChange} d="flex" flexDir="column">
              <RadioLabel htmlFor="notExisting">
                <RadioInput
                  type="radio"
                  id="notExisting"
                  name="existing"
                  value="notExisting"
                />{" "}
                I'm not an existing Orion Bank customer{" "}
              </RadioLabel>
              <RadioLabel htmlFor="Existing">
                <RadioInput
                  type="radio"
                  id="Existing"
                  name="existing"
                  value="existing"
                />{" "}
                I already have an account with Orion Bank or Orion Invest{" "}
              </RadioLabel>
            </Box>
            {existing === "notExisting" && (
              <ContinueButton
                onClick={() => history.push("/open-account/create-accounts")}
              >
                Continue
              </ContinueButton>
            )}
            {existing === "existing" && (
              <Box w="50%" ml="45px">
                <Box d="grid" gridTemplateColumns="1fr 1fr">
                  <TextLabel htmlFor="username">Username</TextLabel>
                  <TextInput
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <TextLabel htmlFor="password">Password</TextLabel>
                  <TextInput
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Box>
                <Box p="10px">
                  Forgot <Link>username</Link> or <Link>password</Link>?
                </Box>
                <ContinueButton onClick={Login}>Log In</ContinueButton>
              </Box>
            )}
          </Box>
          <Box my="35px" w="80%" color="Paragraph">
            <Box fontSize="20px" fontWeight="600">
              What you need to apply
            </Box>
            <Box my="10px">
              Each account owner must be 18 or older and provide:
            </Box>
            <ul>
              <li>A Social Security or Tax Identification number</li>
              <li>A U.S. residential street address</li>
              <li>Legal name</li>
              <li>Birth date</li>
            </ul>
            <Box fontSize="20px" fontWeight="600" mt="20px">
              Important Information About Opening a New Account
            </Box>
            <Box my="10px" lineHeight={1.5}>
              To help the U.S. government fight terrorism and money laundering,
              federal law requires us to obtain, verify and record information
              identifying each person opening an account. We may ask to see your
              driver's license or other identifying documents.
            </Box>
          </Box>
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default withRouter(OpenAccount);
