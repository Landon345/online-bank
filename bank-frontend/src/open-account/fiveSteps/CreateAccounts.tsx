import React, { useState } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Box, Select } from "@chakra-ui/core";
import { useRecoilState } from "recoil";
import { createdAccountsState } from "src/recoil/atoms";
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
  accountTypeMapping,
  accountTermOnlyMapping,
  accountIRATermOnlyMapping,
  accountRateMapping,
} from "src/data/MappingData";
import * as faqs from "src/data/FAQsData";
import FAQs from "src/open-account/FAQs";

type CreateAccountsProps = {};
type TParams = {};

const CreateAccounts: React.FC<CreateAccountsProps> = ({
  history,
}: RouteComponentProps<TParams>) => {
  const [accountId, setAccountId] = useState(1);
  const [accountType, setAccountType] = useState("individualAccountType");
  const [cdTerm, setCDTerm] = useState(
    sessionStorage.getItem("accountpreset") || ""
  );
  const [amount, setAmount] = useState(0);
  const [accountCategory, setAccountCategory] = useState(
    accountTypeOnlyMapping[sessionStorage.getItem("accountpreset") || ""] ||
      "sav"
  );
  const [IRAType, setIRAType] = useState(
    sessionStorage.getItem("accountpreset")?.split("-")[0] == "IRAOSA"
      ? "IRAOSA"
      : "IRACD" || "IRACD"
  );
  const [IRAPlan, setIRAPlan] = useState("Traditional");

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
    const value = e.target.value;
    setAccountCategory(value);
    //   "OSAV-0": "Online Savings Account",
    // "DDA-0": "Interest Checking",
    // "MMDA-0": "Money Market Savings",
    if (value !== "CD") {
      if (value == "mm") {
        setCDTerm("MMDA-0");
      } else if (value == "check") {
        setCDTerm("DDA-0");
      } else if (value == "sav") {
        setCDTerm("OSAV-0");
      } else {
        setCDTerm("");
      }
    }
  };
  const IRAPlanChange = (e) => {
    setIRAPlan(e.target.value);
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
                    <RadioLabel htmlFor="IRAAccountCategory">
                      <RadioInput
                        type="radio"
                        id="IRAAccountCategory"
                        name="AccountCategory"
                        value="IRA"
                        defaultChecked={accountCategory == "IRA"}
                      />{" "}
                      IRA
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
                  {accountCategory == "IRA" && (
                    <>
                      <Box mt="10px" fontWeight="600">
                        IRA Plan
                      </Box>
                      <Box onChange={IRAPlanChange} d="flex" flexDir="column">
                        <RadioLabel htmlFor="IRAPlan">
                          <RadioInput
                            type="radio"
                            id="IRAPlan"
                            name="IRAPlan"
                            value="Traditional"
                            defaultChecked={IRAPlan == "Traditional"}
                          />{" "}
                          Traditional
                        </RadioLabel>
                        <RadioLabel htmlFor="IRAPlan">
                          <RadioInput
                            type="radio"
                            id="IRAPlan"
                            name="IRAPlan"
                            value="Roth"
                            defaultChecked={IRAPlan == "Roth"}
                          />{" "}
                          Roth
                        </RadioLabel>
                        <RadioLabel htmlFor="IRAPlan">
                          <RadioInput
                            type="radio"
                            id="IRAPlan"
                            name="IRAPlan"
                            value="SEP"
                            defaultChecked={IRAPlan == "SEP"}
                          />{" "}
                          SEP
                        </RadioLabel>
                      </Box>
                    </>
                  )}
                  {accountCategory == "IRA" && (
                    <>
                      <Box mt="10px" fontWeight="600">
                        Type
                      </Box>
                      <Select
                        value={IRAType}
                        onChange={(e) => setIRAType(e.target.value)}
                      >
                        <option value={"IRAOSA"}>IRA Online Savings</option>
                        <option value={"IRACD"}>
                          IRA Certificate of Deposit (CDs)
                        </option>
                      </Select>
                    </>
                  )}
                  {accountCategory == "IRA" && IRAType !== "IRAOSA" && (
                    <>
                      <Box mt="10px" fontWeight="600">
                        Term
                      </Box>
                      <Select
                        value={cdTerm}
                        onChange={(e) => setCDTerm(e.target.value)}
                      >
                        <option value="">Select</option>
                        {Object.keys(accountIRATermOnlyMapping).map((term) => (
                          <option value={term} key={term}>
                            {accountIRATermOnlyMapping[term]}
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
                </Box>
                <Box>
                  {createdAccounts.length > 0 && (
                    <Box fontSize="22px" fontWeight="700" mb="5px">
                      Accounts to Open
                    </Box>
                  )}
                  {createdAccounts.map((account) => (
                    <>
                      <Box key={account.accountId} mb="20px">
                        <Box border="1px solid #999" p="10px">
                          <Box fontSize="20px" fontStyle="bold" py="10px">
                            {accountTypeMapping[account.cdTerm]}
                          </Box>
                          <Box d="flex" justifyContent="space-between">
                            <Box>{accountRateMapping[account.cdTerm]}</Box>
                            <Box>Deposit: {account.amount}</Box>
                            <RemoveButton
                              onClick={() => removeAccount(account.accountId)}
                            >
                              Remove
                            </RemoveButton>
                          </Box>
                        </Box>
                      </Box>
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
                    <ContinueButton onClick={nextStep}>Continue</ContinueButton>
                  </>
                )}
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
