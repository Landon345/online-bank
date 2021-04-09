import React from "react";
import { Box } from "@chakra-ui/core";
import PercentageYieldCard from "src/view-rates/PercentageYieldCard";

type CheckingProps = {};

const Checking: React.FC<CheckingProps> = () => {
  return (
    <Box color="Headline" p="30px">
      <Box fontSize="25px">Checking and Money Market</Box>
      <Box py="20px">
        Open any Orion Checking or Money Market account and enjoy the benefits
        of:
      </Box>
      <ul>
        <li>Interest compounded daily</li>
        <li>No monthly maintenance fees or minimum opening deposit</li>
      </ul>
      <Box
        d="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
        w="66%"
      >
        <PercentageYieldCard
          title="Interest Checking"
          percentageYield="0.25%"
          details={[
            "Use any Allpoint® ATM in the U.S. for free, plus reimbursements of up to $10 per statement cycle for fees charged at other ATMs nationwide",
            "Rate is variable and may change after the account is opened",
            "Fees may reduce earnings",
          ]}
          buttonLink="/open-account?OAP=DDA-0"
          bestfor="Unlimited deposits and withdrawals as well as access to bill pay and Zelle®, checks, and debit cards."
        />
        <PercentageYieldCard
          title="Money Market"
          percentageYield="0.50%"
          details={[
            "Debit card and check access",
            "Unlimited deposits and ATM withdrawals + 6 additional withdrawals per statement cycle.",
            "Rate is variable and may change after the account is opened",
            "Fees may reduce earnings",
          ]}
          buttonLink="/open-account?OAP=MMDA-0"
          bestfor="Unlimited deposits as well as access to Zelle®, checks, and debit cards. Limited withdrawals."
        />
      </Box>
    </Box>
  );
};

export default Checking;
