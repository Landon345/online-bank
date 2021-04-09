import React from "react";
import { Box } from "@chakra-ui/core";
import PercentageYieldCard from "src/view-rates/PercentageYieldCard";

type CDsProps = {};

const CDs: React.FC<CDsProps> = () => {
  return (
    <Box color="Headline" p="30px">
      <Box fontSize="25px">CDs</Box>
      <Box py="20px">Open any Orion Bank CD and enjoy the benefits of: </Box>
      <ul>
        <li>All Ten Day Best Rate Guarantee</li>
        <li>Interest compounded daily</li>
        <li>Automatic renewal at maturity</li>
      </ul>
      <Box d="grid" gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))">
        <PercentageYieldCard
          title="High Yield CD"
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
            "Early withdrawal penalty will apply",
          ]}
          buttonLink="/open-account?OAP=CD-"
          bestfor="Earning a higher interest rate when you lock in your funds for a longer term."
        />
        <PercentageYieldCard
          title="Raise Your Rate CD"
          availableYields={[
            { time: "2 yr", rate: "0.70%", mos: 24 },
            { time: "4 yr", rate: "0.70%", mos: 48 },
          ]}
          details={[
            "Start with a great rate, plus have the opportunity to increase your rate once over the 2-year term or twice over the 4-year term if our rate for your term and balance tier goes up",
            "Early withdrawal penalty will apply",
          ]}
          buttonLink="/open-account?OAP=CDRYR-"
          bestfor="Earning interest with the flexibility to raise your CD rate. If our CD rate goes up, yours can too."
        />
        <PercentageYieldCard
          title="No Penalty CD"
          percentageYield="0.60%"
          details={[
            "You can withdraw all your money any time after the first six days following the date you funded the account, and keep the interest earned with no penalties",
          ]}
          buttonLink="/open-account?OAP=NCD-11"
          bestfor="An established fund you may need to access soon after opening."
        />
      </Box>
    </Box>
  );
};

export default CDs;
