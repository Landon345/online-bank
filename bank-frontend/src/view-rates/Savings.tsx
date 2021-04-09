import React from "react";
import { Box } from "@chakra-ui/core";
import PercentageYieldCard from "src/view-rates/PercentageYieldCard";

type SavingsProps = {};

const Savings: React.FC<SavingsProps> = () => {
  return (
    <Box color="Headline" p="30px">
      <Box fontSize="25px">Savings</Box>
      <Box py="20px" fontSize="20px" fontWeight="700">
        The best part of an Orion Online Savings Account is its tools that help
        you save better and faster.
      </Box>
      <Box d="flex" justifyContent="space-around" pb="30px">
        <Box px="120px">
          <Box fontSize="20px" fontWeight="650" pb="5px">
            Organize using buckets.
          </Box>
          <Box>
            Dedicate parts of your savings to whatever you want (or want to do).
            No multiple bank accounts or hard math required.
          </Box>
        </Box>
        <Box px="120px">
          <Box fontSize="20px" fontWeight="650" pb="5px">
            Optimize with boosters.
          </Box>
          <Box>
            Surprise Savings and recurring transfers help accelerate your
            savings, putting part of your strategy on autopilot.
          </Box>
        </Box>
      </Box>
      <Box width="33%">
        <PercentageYieldCard
          title="Online Savings"
          details={[
            "Six withdrawals limit per statement cycle.",
            "Rate is variable and may change after the account is opened",
            "Fees may reduce earnings",
          ]}
          percentageYield="0.60%"
          buttonLink="/open-account?OAP=OSAV-0"
          bestfor="Earning interest at a variable rate with the ability to access your money at any time."
        />
      </Box>
    </Box>
  );
};

export default Savings;
