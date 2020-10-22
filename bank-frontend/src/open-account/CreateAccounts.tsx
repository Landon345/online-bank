import React, { useState, FormEvent, useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Box, Select } from "@chakra-ui/core";
import { useRecoilState } from "recoil";
import { textState, createdAccountsState } from "src/recoil/atoms";
import {
  RadioInput,
  RadioLabel,
  CheckBoxInput,
  CheckBoxLabel,
  ContinueButton,
  TextInput,
  RemoveButton,
  TextLabel,
} from "src/open-account/style";
import AccountStep from "src/open-account/AccountStep";
import {
  accountTypeOnlyMapping,
  accountTermOnlyMapping,
} from "src/data/MappingData";
import * as faqs from "src/data/FAQsData";
import FAQs from "src/open-account/FAQs";

type CreateAccountsProps = {};
type TParams = {};

const CreateAccounts: React.FC<CreateAccountsProps> = ({
  history,
}: RouteComponentProps<TParams>) => {
  const [accountId, setAccountId] = useState(1);
  const [text, setText] = useRecoilState(textState);
  const [accountType, setAccountType] = useState("individualAccountType");
  const [cdTerm, setCDTerm] = useState(
    localStorage.getItem("accountpreset") || ""
  );
  const [amount, setAmount] = useState(0);
  const [accountCategory, setAccountCategory] = useState(
    accountTypeOnlyMapping[localStorage.getItem("accountpreset") || ""] || "sav"
  );

  const [debit, setDebit] = useState(false);
  const [checks, setChecks] = useState(false);
  const [transfers, setTransfers] = useState(false);

  const [createdAccounts, setCreatedAccounts] = useRecoilState(
    createdAccountsState
  );

  const accountTypeChange = (e) => {
    setAccountType(e.target.value);
  };
  const accountCategoryChange = (e) => {
    setAccountCategory(e.target.value);
  };

  const showAmount = () => {
    return (accountCategory == "CD" && cdTerm) || accountCategory != "CD";
  };
  const showOptions = () => {
    return accountCategory == "mm" || accountCategory == "check";
  };

  const addAccount = () => {
    const accountToAdd = {
      accountId,
      accountType,
      accountCategory,
      cdTerm,
      amount,
      debit,
      checks,
      transfers,
    };
    setCreatedAccounts((prev) => [...prev, accountToAdd]);
    setAccountId((prev) => prev + 1);
    // reset
    setAmount(0);
    setCDTerm("");
  };
  const removeAccount = (id) => {
    setCreatedAccounts((prev) =>
      prev.filter((account) => account.accountId != id)
    );
  };
  const nextStep = async () => {
    history.push("/open-account/your-information");
  };

  return (
    <Box margin="auto" bg="GrayBackground">
      <AccountStep step={1} />
      <Box maxW="1300px" m="auto" mt="30px">
        <Box d="flex">
          <Box flex={0.6}>
            <Box color="Headline" fontSize="25px">
              Create Accounts
            </Box>
            <Box ml="2%">
              <Box>
                <Box
                  d="grid"
                  gridTemplateColumns="1fr 4fr"
                  gridRowGap={10}
                  mt="20px"
                >
                  {createdAccounts.length == 0 && (
                    <>
                      <Box mt="10px" fontWeight="600">
                        Select Account Type
                      </Box>
                      <Box
                        onChange={accountTypeChange}
                        d="flex"
                        flexDir="column"
                      >
                        <RadioLabel htmlFor="individualAccountType">
                          <RadioInput
                            type="radio"
                            id="individualAccountType"
                            name="accountType"
                            value="individualAccountType"
                            defaultChecked
                          />{" "}
                          Individual
                        </RadioLabel>
                        <RadioLabel htmlFor="jointAccountType">
                          <RadioInput
                            type="radio"
                            id="jointAccountType"
                            name="accountType"
                            value="jointAccountType"
                          />{" "}
                          Joint
                        </RadioLabel>
                        <RadioLabel htmlFor="trustAccountType">
                          <RadioInput
                            type="radio"
                            id="trustAccountType"
                            name="accountType"
                            value="trustAccountType"
                          />{" "}
                          In the name of a Trust
                        </RadioLabel>
                        <RadioLabel htmlFor="custodialAccountType">
                          <RadioInput
                            type="radio"
                            id="custodialAccountType"
                            name="accountType"
                            value="custodialAccountType"
                          />{" "}
                          Custodial Account
                        </RadioLabel>
                        <Box ml="20px" my="20px" fontSize="15px">
                          Your choice will apply to all the accounts you open
                          during this session
                        </Box>
                      </Box>
                    </>
                  )}

                  <Box mt="10px" fontWeight="600">
                    Account Type
                  </Box>
                  <Box
                    onChange={accountCategoryChange}
                    d="flex"
                    flexDir="column"
                  >
                    <RadioLabel htmlFor="onlineSavingsAccountCategory">
                      <RadioInput
                        type="radio"
                        id="onlineSavingsAccountCategory"
                        name="AccountCategory"
                        value="sav"
                        defaultChecked={accountCategory == "sav"}
                      />{" "}
                      Online Savings
                    </RadioLabel>
                    <RadioLabel htmlFor="moneyMarketAccountCategory">
                      <RadioInput
                        type="radio"
                        id="moneyMarketAccountCategory"
                        name="AccountCategory"
                        value="mm"
                        defaultChecked={accountCategory == "mm"}
                      />{" "}
                      Money Market
                    </RadioLabel>
                    <RadioLabel htmlFor="CDsAccountCategory">
                      <RadioInput
                        type="radio"
                        id="CDsAccountCategory"
                        name="AccountCategory"
                        value="CD"
                        defaultChecked={accountCategory == "CD"}
                      />{" "}
                      Certificates of Deposit (CDs)
                    </RadioLabel>
                    <RadioLabel htmlFor="interestCheckingAccountCategory">
                      <RadioInput
                        type="radio"
                        id="interestCheckingAccountCategory"
                        name="AccountCategory"
                        value="check"
                        defaultChecked={accountCategory == "check"}
                      />{" "}
                      Interest Checking
                    </RadioLabel>
                  </Box>
                  {accountCategory == "CD" && (
                    <>
                      <Box mt="10px" fontWeight="600">
                        Term
                      </Box>
                      <Select
                        value={cdTerm}
                        onChange={(e) => setCDTerm(e.target.value)}
                      >
                        <option value="">Select</option>
                        {Object.keys(accountTermOnlyMapping).map((term) => (
                          <option value={term} key={term}>
                            {accountTermOnlyMapping[term]}
                          </option>
                        ))}
                      </Select>
                    </>
                  )}
                  {showAmount() && (
                    <>
                      <Box mt="10px" fontWeight="600">
                        Amount
                      </Box>
                      <Box>
                        <TextInput
                          type="number"
                          placeholder="$0.00"
                          value={amount}
                          onChange={(e) =>
                            setAmount(parseFloat(e.target.value))
                          }
                        />
                      </Box>
                    </>
                  )}
                  <Box></Box>
                  <Box my="30px" fontSize="14px">
                    Keep in mind, if you choose an account with a variable rate,
                    your rate may change after the account is opened. Rates and
                    Annual Percentage Yields (APY) are accurate as of Oct 12,
                    2020. <Link to="">View All CD Rates</Link>
                  </Box>
                  {showOptions() && (
                    <>
                      <Box mt="10px" fontWeight="600">
                        Account Options
                      </Box>
                      <Box d="flex" flexDir="column">
                        <CheckBoxLabel htmlFor="debit">
                          <CheckBoxInput
                            type="checkbox"
                            id="debit"
                            name="options"
                            value="debit"
                            checked={debit}
                            onChange={(e) => setDebit(!debit)}
                          />{" "}
                          Free Debit Card
                        </CheckBoxLabel>
                        <CheckBoxLabel htmlFor="checks">
                          <CheckBoxInput
                            type="checkbox"
                            id="checks"
                            name="options"
                            value="checks"
                            checked={checks}
                            onChange={(e) => setChecks(!checks)}
                          />{" "}
                          Free Orion Bank Standard Checks
                        </CheckBoxLabel>
                        {accountCategory == "check" && (
                          <CheckBoxLabel htmlFor="transfer">
                            <CheckBoxInput
                              type="checkbox"
                              id="transfer"
                              name="options"
                              value="transfer"
                              checked={transfers}
                              onChange={(e) => setTransfers(!transfers)}
                            />{" "}
                            Overdraft Transfer Service
                          </CheckBoxLabel>
                        )}
                      </Box>
                    </>
                  )}
                  <Box></Box>
                  <Box>
                    {createdAccounts.map((account) => (
                      <>
                        <Box key={account.accountId}>
                          {account.accountId} | {account.accountCategory} |{" "}
                          {account.accountType} | {account.cdTerm} |{" "}
                          {account.amount}
                        </Box>
                        <RemoveButton
                          onClick={() => removeAccount(account.accountId)}
                        >
                          Remove
                        </RemoveButton>
                      </>
                    ))}
                  </Box>
                  <Box></Box>
                  <ContinueButton onClick={addAccount}>
                    {createdAccounts.length > 0
                      ? "Add Another Account"
                      : "Add Account"}
                  </ContinueButton>
                  {createdAccounts.length > 0 && (
                    <>
                      <Box></Box>
                      <ContinueButton onClick={nextStep}>
                        Continue
                      </ContinueButton>
                    </>
                  )}
                </Box>
              </Box>
              {/* More information */}
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

export default withRouter(CreateAccounts);
