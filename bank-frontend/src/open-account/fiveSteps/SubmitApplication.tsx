import React, { useState, useEffect } from "react";
import { Box, Icon } from "@chakra-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import {
  accountTermOnlyMapping,
  accountRateMapping,
} from "src/data/MappingData";
import {
  CheckBoxInput,
  CheckBoxLabel,
  ContinueButton,
  InfoRow,
  TextInput,
  TextLabel,
  InfoLabel,
  InfoPoint,
  CustomForm,
} from "src/open-account/style";
import { Formik } from "formik";
import * as Yup from "yup";
import "react-tabs/style/react-tabs.css";
import HomeNavbar from "src/sharedComponents/HomeNavbar";
import CDs from "src/view-rates/CDs";
import { useRecoilState } from "recoil";
import Error, { checkError } from "src/open-account/fiveSteps/Error";
import AccountStep from "src/open-account/AccountStep";
import {
  createdAccountsState,
  personalInformationState,
} from "src/recoil/atoms";
import { Register } from "src/api/register/Register";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Must enter a username"),
  password: Yup.string()
    .min(4, "Must be 4 characters in length")
    .max(200, "Must be shorter than 200")
    .required("Must have password"),
  // makes sure that the Password and the Password Confirmation match.
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Must have password Confirmation"),
});

type SubmitApplicationProps = {};
type TParams = {
  OAP: string;
};

const SubmitApplication: React.FC<SubmitApplicationProps> = ({
  match,
  history,
  location,
}: RouteComponentProps<TParams>) => {
  const [personalInformation, setPersonalInformation] = useRecoilState(
    personalInformationState
  );
  //   const [createdAccounts, setCreatedAccounts] = useRecoilState(
  //     createdAccountsState
  //   );
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
      accountId: 2,
      accountType: "individualAccountType",
      accountCategory: "CD",
      cdTerm: "CD-3",
      amount: 0,
      debit: false,
      checks: false,
      transfers: false,
    },
    {
      accountId: 3,
      accountType: "individualAccountType",
      accountCategory: "CD",
      cdTerm: "CD-3",
      amount: 0,
      debit: false,
      checks: false,
      transfers: false,
    },
  ]);

  const [verified, setVerified] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (createdAccounts.length == 0) {
      history.push("/open-account/");
    } else if (
      !personalInformation.firstname &&
      !personalInformation.lastname
    ) {
      history.push("/open-account/your-information");
    }
  }, []);

  return (
    <Box margin="auto" bg="GrayBackground" minH="100vh">
      <AccountStep step={3} />
      <Box maxWidth="1300px" m="auto" mt="50px">
        <h1>Submit Application</h1>
        <Box py="20px" fontSize="24px">
          Is this information correct?
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
        <Box>Your Information</Box>
        <Box d="grid" gridTemplateColumns="1fr 1fr" gridGap={3}>
          <Box>
            <InfoRow>
              <InfoLabel>First Name: </InfoLabel>
              <InfoPoint>{personalInformation.firstname}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Last Name: </InfoLabel>
              <InfoPoint>{personalInformation.lastname}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Middle Initial: </InfoLabel>
              <InfoPoint>{personalInformation.middleInitial}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Suffix: </InfoLabel>
              <InfoPoint>{personalInformation.suffix}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Birth Date: </InfoLabel>
              <InfoPoint>{personalInformation.birthDate}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Social Security: </InfoLabel>
              <InfoPoint>{personalInformation.socialSecurity}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Address: </InfoLabel>
              <InfoPoint>{personalInformation.address}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Address Line 2: </InfoLabel>
              <InfoPoint>{personalInformation.addressLineTwo}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>City: </InfoLabel>
              <InfoPoint>{personalInformation.city}</InfoPoint>
            </InfoRow>
          </Box>
          <Box>
            <InfoRow>
              <InfoLabel>Mother's Maiden Name: </InfoLabel>
              <InfoPoint>{personalInformation.maidenName}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Occupation: </InfoLabel>
              <InfoPoint>{personalInformation.occupation}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Email: </InfoLabel>
              <InfoPoint>{personalInformation.email}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Personal Phone: </InfoLabel>
              <InfoPoint>{personalInformation.personalPhone}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Work Phone: </InfoLabel>
              <InfoPoint>{personalInformation.workPhone}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>ext: </InfoLabel>
              <InfoPoint>{personalInformation.ext}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>State: </InfoLabel>
              <InfoPoint>{personalInformation.state}</InfoPoint>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Zip Code: </InfoLabel>
              <InfoPoint>{personalInformation.zip}</InfoPoint>
            </InfoRow>
          </Box>
        </Box>

        <Box py="30px">
          <CheckBoxLabel>
            <CheckBoxInput
              type="checkbox"
              checked={verified}
              onChange={() => {
                setVerified(!verified);
              }}
            />
            I verify that all of the above information is accurate.
          </CheckBoxLabel>
        </Box>
        {verified && (
          <>
            <Formik
              initialValues={{
                username: "",
                password: "",
                passwordConfirmation: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                const accountLogin = {
                  username: values.username,
                  password: values.password,
                };

                const response = await Register(
                  accountLogin,
                  createdAccounts,
                  personalInformation
                );
                console.log("Full registered response", response);
                //if the response contains 0 errors, then we move on.
                history.push("/open-account/deposit-money");
                setSubmitting(false);
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box fontSize="20px" fontWeight="700" py="20px">
                    Create your Orion Account by making a username and password
                    to login with.
                  </Box>
                  <Box d="flex" alignItems="center">
                    <Box flex={0.4}>
                      <TextLabel>Username</TextLabel>
                    </Box>
                    <Box flex={0.6}>
                      <TextInput
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        error={checkError(touched.username, errors.username)}
                      />
                      <Error
                        touched={touched.username}
                        message={errors.username}
                      />
                    </Box>
                  </Box>
                  <Box d="flex" alignItems="center">
                    <Box flex={0.4}>
                      <TextLabel>Password</TextLabel>
                    </Box>
                    <Box flex={0.6}>
                      <TextInput
                        type="text"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={checkError(touched.password, errors.password)}
                      />
                      <Error
                        touched={touched.password}
                        message={errors.password}
                      />
                    </Box>
                  </Box>
                  <Box d="flex" alignItems="center">
                    <Box flex={0.4}>
                      <TextLabel>Password Confirmation</TextLabel>
                    </Box>
                    <Box flex={0.6}>
                      <TextInput
                        type="text"
                        name="passwordConfirmation"
                        id="passwordConfirmation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirmation}
                        error={checkError(
                          touched.passwordConfirmation,
                          errors.passwordConfirmation
                        )}
                      />
                      <Error
                        touched={touched.passwordConfirmation}
                        message={errors.passwordConfirmation}
                      />
                    </Box>
                  </Box>

                  <ContinueButton type="submit" disabled={isSubmitting}>
                    Register
                  </ContinueButton>
                </form>
              )}
            </Formik>
          </>
        )}
      </Box>
      {/* Is this information accurate? */}
      {/* checkmark yes */}

      {/* show create username and password form */}
      {/* click button to create the user, once created, move to step 4 */}
    </Box>
  );
};

export default withRouter(SubmitApplication);
