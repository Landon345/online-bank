import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import HomeNavbar from "src/home/HomeNavbar";

type HomeProps = {};

const Home: React.FC = ({}: HomeProps) => {
  return (
    <Box color="Headline" px="15%">
      <HomeNavbar />
      <h1>The Home Component</h1>
      <h1>The Home Component</h1>
      <h1>The Home Component</h1>
      <h1>The Home Component</h1>
    </Box>
  );
};

export default Home;
