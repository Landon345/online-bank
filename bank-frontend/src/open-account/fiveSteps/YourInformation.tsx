import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  RadioInput,
  RadioLabel,
  ContinueButton,
  CheckBoxInput,
  CheckBoxLabel,
  TextInput,
  TextLabel,
  SectionTitle,
  CustomForm,
} from "src/open-account/style";
import { useRecoilState } from "recoil";
import {
  createdAccountsState,
  personalInformationState,
} from "src/recoil/atoms";
import Error, { checkError } from "src/open-account/fiveSteps/Error";
import {
  accountRateMapping,
  accountTermOnlyMapping,
} from "src/data/MappingData";
import AccountStep from "src/open-account/AccountStep";

// eslint-disable-next-line
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// eslint-disable-next-line
const birthDateExp = /^(((0?[1-9]|1[012])[\/-](0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])[\/-](29|30)|(0?[13578]|1[02])[\/-]31)[\/-](19|[2-9]\d)\d{2}|0?2[\/-]29[\/-]((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$/;
// eslint-disable-next-line
const socialExp = /^\d{3}-\d{2}-\d{4}$/;
// eslint-disable-next-line
const zipExp = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;
const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Must enter a firstname"),

  lastname: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Must enter a lastname"),
  middleInitial: Yup.string().max(1, "cannot have more than one character"),
  suffix: Yup.string().max(4, "Must be shorter than 100 characters"),
  birthDate: Yup.string()
    .matches(birthDateExp, "need correct format mm/dd/yyyy and valid date")
    .required("Required"),
  socialSecurity: Yup.string()
    .matches(socialExp, "social is not in correct format ***-**-****")
    .required("Required"),
  maidenName: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Required"),
  occupation: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Required"),

  email: Yup.string()
    .email("Must be a valid email address")
    .max(200, "Must be shorter than 100 characters")
    .required("Must enter an email"),
  personalPhone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  workPhone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  ext: Yup.string().max(8, "Must be shorter than 8 characters"),

  address: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Required"),
  addressLineTwo: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Required"),
  city: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Required"),
  state: Yup.string()
    .min(1, "Must have character")
    .max(100, "Must be shorter than 100 characters")
    .required("Required"),
  zip: Yup.string().matches(zipExp, "not valid zip code").required("Required"),
});

type YourInformationProps = {};
type TParams = {};
interface InfoFormValues {
  firstname: string;

  lastname: string;
  middleInitial: string;
  suffix: string;
  birthDate: string;
  socialSecurity: string;
  maidenName: string;
  occupation: string;

  email: string;
  personalPhone: string;
  workPhone: string;
  ext: string;

  address: string;
  addressLineTwo: string;
  city: string;
  state: string;
  zip: string;

  mailingAddress: string;
  previousAddress: string;
}

const YourInformation: React.FC<YourInformationProps> = ({
  history,
}: RouteComponentProps<TParams>) => {
  const [continued, setContinued] = useState(false);
  const [citizen, setCitizen] = useState(false);
  // eslint-disable-next-line
  const [createdAccounts, setCreatedAccounts] = useRecoilState(
    createdAccountsState
  );
  // eslint-disable-next-line
  const [personalInformation, setPersonalInformation] = useRecoilState(
    personalInformationState
  );
  // const [createdAccounts, setCreatedAccounts] = useState([
  //   {
  //     accountId: 1,
  //     accountType: "individualAccountType",
  //     accountCategory: "CD",
  //     cdTerm: "CD-3",
  //     amount: 0,
  //     debit: false,
  //     checks: false,
  //     transfers: false,
  //   },
  //   {
  //     accountId: 2,
  //     accountType: "individualAccountType",
  //     accountCategory: "CD",
  //     cdTerm: "CD-3",
  //     amount: 0,
  //     debit: false,
  //     checks: false,
  //     transfers: false,
  //   },
  //   {
  //     accountId: 3,
  //     accountType: "individualAccountType",
  //     accountCategory: "CD",
  //     cdTerm: "CD-3",
  //     amount: 0,
  //     debit: false,
  //     checks: false,
  //     transfers: false,
  //   },
  // ]);

  useEffect(() => {
    if (createdAccounts.length === 0) {
      history.push("/open-account/");
    }
    // eslint-disable-next-line
  }, []);

  const initialValues: InfoFormValues = {
    // firstname: "Landon",

    // lastname: "Schlangen",
    // middleInitial: "",
    // suffix: "",
    // birthDate: "08/06/1999",
    // socialSecurity: "123-23-8643",
    // maidenName: "Stommes",
    // occupation: "tech",

    // email: "lschlangen5@gmail.com",
    // personalPhone: "320-260-4994",
    // workPhone: "",
    // ext: "",

    // address: "",
    // addressLineTwo: "",
    // city: "",
    // state: "",
    // zip: "",

    // mailingAddress: "true",
    // previousAddress: "true",
    firstname: "",

    lastname: "",
    middleInitial: "",
    suffix: "",
    birthDate: "",
    socialSecurity: "",
    maidenName: "",
    occupation: "",

    email: "",
    personalPhone: "",
    workPhone: "",
    ext: "",

    address: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zip: "",

    mailingAddress: "",
    previousAddress: "",
  };
  return (
    <Box margin="auto" bg="GrayBackground" minH="100vh">
      <AccountStep step={2} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("tried to submit");
          setSubmitting(true);
          // post to server or put into Recoil state
          // and push to the next step
          setPersonalInformation(values);
          history.push("/open-account/submit-application");
          console.log("formik values", values);
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
          <>
            <CustomForm onSubmit={handleSubmit}>
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
                        If you're a legal U.S. resident or resident alien,
                        select the box to continue your application.
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
                          <TextInput
                            type="text"
                            name="firstname"
                            id="firstname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstname}
                            error={checkError(
                              touched.firstname,
                              errors.firstname
                            )}
                          />
                          <Error
                            touched={touched.firstname}
                            message={errors.firstname}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center">
                        <Box flex={0.5}>
                          <TextLabel>Middle Initial (Optional)</TextLabel>
                        </Box>
                        <Box flex={0.5}>
                          <TextInput
                            type="text"
                            name="middleInitial"
                            id="middleInitial"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.middleInitial}
                            error={checkError(
                              touched.middleInitial,
                              errors.middleInitial
                            )}
                          />
                          <Error
                            touched={touched.middleInitial}
                            message={errors.middleInitial}
                          />
                        </Box>
                      </Box>
                      {/* lastname suffix(optional*/}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Last Name</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="lastname"
                            id="lastname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastname}
                            error={checkError(
                              touched.lastname,
                              errors.lastname
                            )}
                          />
                          <Error
                            touched={touched.lastname}
                            message={errors.lastname}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center">
                        <Box flex={0.5}>
                          <TextLabel>Suffix (Optional)</TextLabel>
                        </Box>
                        <Box flex={0.5}>
                          <TextInput
                            type="text"
                            name="suffix"
                            id="suffix"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.suffix}
                            error={checkError(touched.suffix, errors.suffix)}
                          />
                          <Error
                            touched={touched.suffix}
                            message={errors.suffix}
                          />
                        </Box>
                      </Box>
                      {/* birth date */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Birth Date</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            placeholder="/   /"
                            type="text"
                            name="birthDate"
                            id="birthDate"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.birthDate}
                            error={checkError(
                              touched.birthDate,
                              errors.birthDate
                            )}
                          />
                          <Error
                            touched={touched.birthDate}
                            message={errors.birthDate}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>
                      {/* social security */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Social Security</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            placeholder="***_**_****"
                            type="text"
                            name="socialSecurity"
                            id="socialSecurity"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.socialSecurity}
                            error={checkError(
                              touched.socialSecurity,
                              errors.socialSecurity
                            )}
                          />
                          <Error
                            touched={touched.socialSecurity}
                            message={errors.socialSecurity}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center">
                        <div>Why do you need my Social Security number?</div>
                      </Box>
                      {/* mother's maiden name */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Mother's maiden name</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="maidenName"
                            id="maidenName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.maidenName}
                            error={checkError(
                              touched.maidenName,
                              errors.maidenName
                            )}
                          />
                          <Error
                            touched={touched.maidenName}
                            message={errors.maidenName}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>
                      {/* occupation (select box with many options)*/}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Occupation</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="occupation"
                            id="occupation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            error={checkError(
                              touched.occupation,
                              errors.occupation
                            )}
                          />
                          <Error
                            touched={touched.occupation}
                            message={errors.occupation}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center">
                        <div>Why do we need to know your occupation?</div>
                      </Box>
                    </Box>

                    {/* contact information */}
                    <SectionTitle>Contact Information</SectionTitle>
                    <hr />
                    <Box my="10px">
                      You authorize us to contact you by using any telephone
                      number you provide to us, including a mobile number that
                      you are authorized to use. In addition to manual calling,
                      we may use text messages, prerecorded or artificial voice
                      messages, or automatic dialing systems. We will not charge
                      you for any contact, but your mobile phone service
                      provider may.
                    </Box>
                    <Box d="grid" gridTemplateColumns="2fr 1fr">
                      {/* email */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Email</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={checkError(touched.email, errors.email)}
                          />
                          <Error
                            touched={touched.email}
                            message={errors.email}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>
                      {/* personal phone */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Personal Phone</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="personalPhone"
                            id="personalPhone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.personalPhone}
                            error={checkError(
                              touched.personalPhone,
                              errors.personalPhone
                            )}
                          />
                          <Error
                            touched={touched.personalPhone}
                            message={errors.personalPhone}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>
                      {/* Work Phone (Optional) */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Work Phone (Optional)</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="workPhone"
                            id="workPhone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.workPhone}
                            error={checkError(
                              touched.workPhone,
                              errors.workPhone
                            )}
                          />
                          <Error
                            touched={touched.workPhone}
                            message={errors.workPhone}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center">
                        <Box flex={0.5}>
                          <TextLabel>Ext.</TextLabel>
                        </Box>
                        <Box flex={0.5}>
                          <TextInput
                            type="text"
                            name="ext"
                            id="ext"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ext}
                            error={checkError(touched.ext, errors.ext)}
                          />
                          <Error touched={touched.ext} message={errors.ext} />
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
                          <TextInput
                            type="text"
                            name="address"
                            id="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            error={checkError(touched.address, errors.address)}
                          />
                          <Error
                            touched={touched.address}
                            message={errors.address}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>
                      {/* Address Line 2 (Optional) */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>Address Line 2 (Optional)</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="addressLineTwo"
                            id="addressLineTwo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.addressLineTwo}
                            error={checkError(
                              touched.addressLineTwo,
                              errors.addressLineTwo
                            )}
                          />
                          <Error
                            touched={touched.addressLineTwo}
                            message={errors.addressLineTwo}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>
                      {/* City */}
                      <Box d="flex" alignItems="center">
                        <Box flex={0.4}>
                          <TextLabel>City</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="city"
                            id="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                            error={checkError(touched.city, errors.city)}
                          />
                          <Error touched={touched.city} message={errors.city} />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>

                      <Box d="flex" alignItems="center">
                        {/* State */}
                        <Box flex={0.4}>
                          <TextLabel>State</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="state"
                            id="state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.state}
                            error={checkError(touched.state, errors.state)}
                          />
                          <Error
                            touched={touched.state}
                            message={errors.state}
                          />
                        </Box>
                      </Box>
                      <Box d="flex" alignItems="center"></Box>
                      <Box d="flex" alignItems="center">
                        {/* ZIP Code */}
                        <Box flex={0.4}>
                          <TextLabel>ZIP Code</TextLabel>
                        </Box>
                        <Box flex={0.6}>
                          <TextInput
                            type="text"
                            name="zip"
                            id="zip"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.zip}
                            error={checkError(touched.zip, errors.zip)}
                          />
                          <Error touched={touched.zip} message={errors.zip} />
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
                      <Box d="flex" onChange={handleChange}>
                        <RadioLabel>
                          <RadioInput
                            type="radio"
                            id="mailingAddress"
                            name="mailingAddress"
                            value="true"
                            defaultChecked={values.mailingAddress === "true"}
                          />
                          Yes
                        </RadioLabel>
                        <RadioLabel>
                          <RadioInput
                            type="radio"
                            id="mailingAddress"
                            name="mailingAddress"
                            value="false"
                            defaultChecked={values.mailingAddress === "false"}
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
                      <Box d="flex" onChange={handleChange}>
                        <RadioLabel>
                          <RadioInput
                            type="radio"
                            id="previousAddress"
                            name="previousAddress"
                            value="true"
                            defaultChecked={values.previousAddress === "true"}
                          />
                          Yes
                        </RadioLabel>
                        <RadioLabel>
                          <RadioInput
                            type="radio"
                            id="previousAddress"
                            name="previousAddress"
                            value="false"
                            defaultChecked={values.previousAddress === "false"}
                          />
                          No
                        </RadioLabel>
                      </Box>
                      <Box></Box>
                      <Box>
                        <div>Why do you need to know my address history?</div>
                      </Box>
                    </Box>
                    <Box ml="200px">
                      <ContinueButton type="submit" disabled={isSubmitting}>
                        Submit
                      </ContinueButton>
                    </Box>
                  </>
                )}
              </Box>
              <Box ml="20px">
                <Box fontSize="20px" fontStyle="bold" py="10px">
                  Account{createdAccounts.length > 1 && "s"} you're opening:
                </Box>
                <hr />
                <Box>
                  {createdAccounts.map((account) => (
                    <Box key={account.accountId} mb="20px">
                      <Box>
                        <Box fontSize="20px" fontStyle="bold" py="10px">
                          {accountTermOnlyMapping[account.cdTerm]}
                        </Box>

                        {accountRateMapping[account.cdTerm]}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CustomForm>
          </>
        )}
      </Formik>
    </Box>
  );
};

/** My custom error messages if Yup validation fails. */

export default withRouter(YourInformation);
