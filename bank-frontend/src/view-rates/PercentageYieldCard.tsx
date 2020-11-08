import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import { OpenAccountButton } from "src/styled/StyledComponents";
import { Icon } from "@chakra-ui/core";

type Term = {
  time: string;
  rate: string;
  mos: Number;
};
type PercentageYieldCardProps = {
  title: string;
  availableYields?: Array<Term>;
  percentageYield?: string;
  bestfor: string;
  details: Array<string>;
  buttonLink: string;
};

const PercentageYieldCard: React.FC<PercentageYieldCardProps> = ({
  title,
  availableYields,
  percentageYield,
  bestfor,
  details,
  buttonLink,
}) => {
  const [term, setTerm] = useState(
    availableYields
      ? availableYields[0]
      : { time: "3 mo", rate: "0.20%", mos: 3 }
  );
  return (
    <Box
      color="Headline"
      border="1px solid gray"
      mr="10px"
      p="20px"
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      borderTop="5px solid Purple"
      bg="GrayBackground"
    >
      <Box>
        <Box my="20px" fontSize="20px" fontWeight="700">
          {title}
        </Box>
        <Box border="1px solid gray" bg="gray.50" p="20px" d="flex">
          <Box mr="10px">
            <Icon name="check-circle" color="teal.500" size="26px" />
          </Box>
          <Box>
            <strong>Best for:</strong> {bestfor}
          </Box>
        </Box>
        <Box mt="20px">
          {availableYields && (
            <>
              <Box my="20px">AVAILABLE TERMS</Box>
              <Box d="flex">
                {availableYields.map((mapterm) => (
                  <>
                    <Box
                      border="1px solid black"
                      p="7px"
                      fontSize="14px"
                      d="flex"
                      flexDir="column"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      bg={term.time == mapterm.time ? "Gray" : "Background"}
                      color={term.time == mapterm.time ? "White" : "Link"}
                      onClick={() => setTerm(mapterm)}
                    >
                      <Box>{mapterm.time.split(" ")[0]}</Box>
                      <Box>{mapterm.time.split(" ")[1]}</Box>
                    </Box>
                  </>
                ))}
              </Box>
            </>
          )}
        </Box>
        <Box>
          {availableYields && (
            <>
              <Box my="20px">Annual Percentage Yield</Box>
              <Box fontSize="50px" color="Purple" fontWeight="800">
                {term.rate}
              </Box>
            </>
          )}
        </Box>
        {percentageYield && (
          <>
            <Box my="20px">Annual Percentage Yield</Box>
            <Box fontSize="50px" color="Purple" fontWeight="800">
              {percentageYield}
            </Box>
          </>
        )}
        <Box my="20px">
          <ul>
            {details.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box d="flex" justifyContent="center">
        <Link to={availableYields ? buttonLink + term.mos : buttonLink}>
          <OpenAccountButton>Open Account</OpenAccountButton>
        </Link>
      </Box>
    </Box>
  );
};

export default PercentageYieldCard;
