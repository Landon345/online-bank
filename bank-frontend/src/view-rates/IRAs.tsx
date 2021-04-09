import React from "react";
import { Box } from "@chakra-ui/core";
import PercentageYieldCard from "src/view-rates/PercentageYieldCard";

type IRAsProps = {};

const IRAs: React.FC<IRAsProps> = () => {
  return (
    <Box color="Headline" p="30px">
      <Box fontSize="25px">IRAs</Box>
      <Box py="20px">
        Roth, SEP, or Traditional IRA options are available for all IRA
        products.
      </Box>

      <Box d="grid" gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))">
        <PercentageYieldCard
          title="IRA High Yield CD"
          availableYields={[
            { time: "3 mo", rate: "0.20%", mos: 3 },
            { time: "6 mo", rate: "0.40%", mos: 6 },
            { time: "9 mo", rate: "0.50%", mos: 9 },
            { time: "12 mo", rate: "0.65%", mos: 12 },
            { time: "18 mo", rate: "0.70%", mos: 18 },
            { time: "3 yr", rate: "0.75%", mos: 36 },
            { time: "5 yr", rate: "1.00%", mos: 60 },
          ]}
          details={[
            "Maximum savings with a fixed rate",
            "Your deposits are insured by the FDIC up to the maximum allowed by law",
            "Early withdrawal penalty will apply",
          ]}
          buttonLink="/open-account?OAP=IRAHY-"
          bestfor="Maximum savings at a fixed rate when you lock in funds for the term length."
        />
        <PercentageYieldCard
          title="IRA Raise Your Rate CD"
          availableYields={[
            { time: "2 yr", rate: "0.70%", mos: 24 },
            { time: "4 yr", rate: "0.70%", mos: 48 },
          ]}
          details={[
            "Start with a great rate, plus have the opportunity to increase your rate once over the 2-year term or twice over the 4-year term if our rate for your term and balance tier goes up",
            "Your deposits are insured by the FDIC up to the maximum allowed by law",
            "Early withdrawal penalty will apply",
          ]}
          buttonLink="/open-account?OAP=IRARYRCD-"
          bestfor="Retirement savings with the ability to raise your CD rate."
        />
        <PercentageYieldCard
          title="IRA Online Savings"
          percentageYield="0.60%"
          details={[
            "Six withdrawals limit per statement cycle.",
            "Rate is variable and may change after the account is opened",
            "Your deposits are insured by the FDIC up to the maximum allowed by law",
            "Fees may reduce earnings",
          ]}
          buttonLink="/open-account?OAP=IRAOSA-0"
          bestfor="Building your IRA over time with unlimited deposits up to your annual contribution limits."
        />
      </Box>
    </Box>
  );
};

export default IRAs;
