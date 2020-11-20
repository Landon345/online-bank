import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import HomeNavbar from "src/sharedComponents/HomeNavbar";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Box color="Headline">
      <HomeNavbar />
      <Box
        minH="60vh"
        d="flex"
        justifyContent="center"
        alignItems="center"
        bg="GrayBackground"
      >
        <Box fontSize="60px" fontWeight="650" color="teal.400">
          Welcome to Orion Bank!
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
