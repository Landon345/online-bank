import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  RadioInput,
  RadioLabel,
  ContinueButton,
  CheckBoxInput,
  CheckBoxLabel,
  TextInput,
  TextLabel,
  SectionTitle,
} from "src/open-account/style";
import { useRecoilState } from "recoil";
import { createdAccountsState } from "src/recoil/atoms";
import {
  accountRateMapping,
  accountTermOnlyMapping,
} from "src/data/MappingData";
import AccountStep from "src/open-account/AccountStep";

type YourInformationProps = {};
type TParams = {};

const YourInformation: React.FC<YourInformationProps> = ({
  history,
}: RouteComponentProps<TParams>) => {
  const [continued, setContinued] = useState(false);
  const [citizen, setCitizen] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [suffix, setSuffix] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [socialSecurity, setSocialSecurity] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const [occupation, setOccupation] = useState("");

  const [email, setEmail] = useState("");
  const [personalPhone, setPersonalPhone] = useState("");
  const [workPhone, setWorkPhone] = useState("");

  const [address, setAddress] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [mailingAddress, setMailingAddress] = useState("true");
  const [previousAddress, setPreviousAddress] = useState("true");
  // const [createdAccounts, setCreatedAccounts] = useRecoilState(
  //   createdAccountsState
  // );
  const [createdAccounts, setCreatedAccounts] = useState([
    {
      accountId: 1,
      accountType: "individualAccountType",
      accountCategory: "CD",
      cdTerm: "CD-3",
      amount: 0,
      debit: false,
      checks: false,
      transfers: false,
    },
    {
      accountId: 1,
      accountType: "individualAccountType",
      accountCategory: "CD",
      cdTerm: "CD-3",
      amount: 0,
      debit: false,
      checks: false,
      transfers: false,
    },
    {
      accountId: 1,
      accountType: "individualAccountType",
      accountCategory: "CD",
      cdTerm: "CD-3",
      amount: 0,
      debit: false,
      checks: false,
      transfers: false,
    },
  ]);

  useEffect(() => {
    if (createdAccounts.length == 0) {
      history.push("/open-account/");
    }
  }, []);
  return (
    <Box margin="auto" bg="GrayBackground" minH="100vh">
      <AccountStep step={2} />
      <Box
        maxW="1300px"
        m="auto"
        d="grid"
        gridTemplateColumns="2fr 1fr"
        mt="50px"
      >
        <Box mr="30px">
          <Box fontSize="25px" fontWeight="bolder" pb="10px">
            Your Information
          </Box>
          {!continued || !citizen ? (
            <Box pt="10px">
              <Box>
                We're only able to open accounts for legal U.S. residents.
              </Box>
              <CheckBoxLabel>
                <CheckBoxInput
                  type="checkbox"
                  checked={citizen}
                  onChange={() => {
                    setCitizen(!citizen);
                    setContinued(false);
                  }}
                />
                I'm a U.S. citizen or legal permanent resident of the U.S.
              </CheckBoxLabel>
              {continued && !citizen && (
                <Box color="Red" ml="30px" mt="10px" fontSize="18px">
                  If you're a legal U.S. resident or resident alien, select the
                  box to continue your application.
                </Box>
              )}
              <ContinueButton onClick={() => setContinued(true)}>
                Continue
              </ContinueButton>
            </Box>
          ) : (
            // form
            <>
              <SectionTitle>Primary Owner</SectionTitle>
              <hr />
              <Box d="grid" gridTemplateColumns="2fr 1fr" py="5px">
                {/* firstname middleInitial(optional) */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>First Name</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center">
                  <Box flex={0.5}>
                    <TextLabel>Middle Initial (Optional)</TextLabel>
                  </Box>
                  <Box flex={0.5}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                {/* lastname suffix(optional*/}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Last Name</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center">
                  <Box flex={0.5}>
                    <TextLabel>Suffix (Optional)</TextLabel>
                  </Box>
                  <Box flex={0.5}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                {/* birth date */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Birth Date</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" placeholder="/   /" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
                {/* social security */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Social Security</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" placeholder="***_**_****" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center">
                  <a>Why do you need my Social Security number?</a>
                </Box>
                {/* mother's maiden name */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Mother's maiden name</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" placeholder="" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
                {/* occupation (select box with many options)*/}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Occupation</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" placeholder="" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center">
                  <a>Why do we need to know your occupation?</a>
                </Box>
              </Box>

              {/* contact information */}
              <SectionTitle>Contact Information</SectionTitle>
              <hr />
              <Box my="10px">
                You authorize us to contact you by using any telephone number
                you provide to us, including a mobile number that you are
                authorized to use. In addition to manual calling, we may use
                text messages, prerecorded or artificial voice messages, or
                automatic dialing systems. We will not charge you for any
                contact, but your mobile phone service provider may.
              </Box>
              <Box d="grid" gridTemplateColumns="2fr 1fr">
                {/* email */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Email</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
                {/* personal phone */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Personal Phone</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
                {/* Work Phone (Optional) */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Work Phone (Optional)</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center">
                  <Box flex={0.5}>
                    <TextLabel>Ext.</TextLabel>
                  </Box>
                  <Box flex={0.5}>
                    <TextInput type="text" />
                  </Box>
                </Box>
              </Box>
              <SectionTitle>Home Address</SectionTitle>
              <hr />
              <Box my="10px">This address can't be a P.O. Box</Box>
              <Box d="grid" gridTemplateColumns="2fr 1fr">
                {/* Address */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Address</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
                {/* Address Line 2 (Optional) */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>Address Line 2 (Optional)</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
                {/* City */}
                <Box d="flex" alignItems="center">
                  <Box flex={0.4}>
                    <TextLabel>City</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>

                <Box d="flex" alignItems="center">
                  {/* State */}
                  <Box flex={0.4}>
                    <TextLabel>State</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
                <Box d="flex" alignItems="center">
                  {/* ZIP Code */}
                  <Box flex={0.4}>
                    <TextLabel>ZIP Code</TextLabel>
                  </Box>
                  <Box flex={0.6}>
                    <TextInput type="text" />
                  </Box>
                </Box>
                <Box d="flex" alignItems="center"></Box>
              </Box>

              {/* Mailing address radio button */}
              <SectionTitle>Mailing Address</SectionTitle>
              <hr />
              <Box d="grid" gridTemplateColumns="2fr 1fr" my="10px">
                <Box d="flex">
                  <Box>
                    Is your mailing address the same as your home address?
                  </Box>
                </Box>
                <Box
                  d="flex"
                  onChange={(e: any) => setMailingAddress(e.target.value)}
                >
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      id="mailingAddress"
                      name="mailingAddress"
                      value="true"
                      defaultChecked={mailingAddress == "true"}
                    />
                    Yes
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      id="mailingAddress"
                      name="mailingAddress"
                      value="false"
                      defaultChecked={mailingAddress == "false"}
                    />
                    No
                  </RadioLabel>
                </Box>
              </Box>
              {/* Previous address radio button */}
              <SectionTitle>Previous Address</SectionTitle>
              <hr />
              <Box d="grid" gridTemplateColumns="2fr 1fr" my="10px">
                <Box d="flex">
                  <Box>
                    Have you lived at the above address for more than five
                    years?
                  </Box>
                </Box>
                <Box
                  d="flex"
                  onChange={(e: any) => setPreviousAddress(e.target.value)}
                >
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      id="previousAddress"
                      name="previousAddress"
                      value="true"
                      defaultChecked={previousAddress == "true"}
                    />
                    Yes
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      id="previousAddress"
                      name="previousAddress"
                      value="false"
                      defaultChecked={previousAddress == "false"}
                    />
                    No
                  </RadioLabel>
                </Box>
                <Box></Box>
                <Box>
                  <a>Why do you need to know my address history?</a>
                </Box>
              </Box>
              <Box ml="200px">
                <ContinueButton>Next</ContinueButton>
              </Box>
            </>
          )}
        </Box>
        <Box ml="20px">
          <Box fontSize="20px" fontStyle="bold" py="10px">
            Account{createdAccounts.length > 1 && "s"} you're opening:
          </Box>
          <hr />
          {/* <pre>{JSON.stringify(createdAccounts, null, 2)}</pre> */}
          <Box>
            {createdAccounts.map((account) => (
              <Box key={account.accountId} mb="20px">
                {account.accountCategory == "CD" ? (
                  <>
                    <Box fontSize="20px" fontStyle="bold" py="10px">
                      {accountTermOnlyMapping[account.cdTerm]}
                    </Box>

                    {accountRateMapping[account.cdTerm]}
                  </>
                ) : (
                  <Box fontSize="20px" fontStyle="bold" py="10px">
                    {account.accountCategory}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withRouter(YourInformation);
