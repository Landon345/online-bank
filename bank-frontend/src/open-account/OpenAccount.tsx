import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/core";
import { accountTypeMapping } from "src/data/MappingData";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import * as faqs from "src/data/FAQsData";
import { RadioInput, RadioLabel, ContinueButton } from "src/open-account/style";
import Login from "src/sharedComponents/Login";
import "react-tabs/style/react-tabs.css";
import FAQs from "src/open-account/FAQs";

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
  // eslint-disable-next-line
  const [locationParams, setLocationParams] = useState(
    location.search ? location.search.split("=")[1] : ""
  );
  const [existing, setExisting] = useState("");

  useEffect(() => {
    sessionStorage.removeItem("accountpreset");
  }, []);

  const goToCreateAccounts = () => {
    sessionStorage.setItem("accountpreset", location.search.split("=")[1]);
    history.push("/open-account/create-accounts");
  };
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
        <Box d="flex">
          <Box flex={0.6}>
            <Box py="20px">You can open an account in 5 minutes or less.</Box>
            {locationParams && (
              <Box border="1px solid black" p="20px" bg="Background">
                {accountTypeMapping[locationParams]}
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
                <ContinueButton onClick={goToCreateAccounts}>
                  Continue
                </ContinueButton>
              )}
              {existing === "existing" && (
                <Box w="50%" ml="45px">
                  <Login />
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
                To help the U.S. government fight terrorism and money
                laundering, federal law requires us to obtain, verify and record
                information identifying each person opening an account. We may
                ask to see your driver's license or other identifying documents.
              </Box>
            </Box>
          </Box>
          <Box flex={0.4} ml="50px">
            {/* Faqs */}
            <FAQs
              faqs={[
                faqs.WhatAreBuckets,
                faqs.AmIEarningInterestOnMoneyInMyBuckets,
                faqs.WhatIsABooster,
                faqs.HowDoIOpenAJointAccount,
                faqs.HowDoIOpenATrustOrCustodialAccount,
                faqs.CanIApplyByPhone,
                faqs.IsAllyBankFDICInsured,
              ]}
            />
          </Box>
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default withRouter(OpenAccount);
