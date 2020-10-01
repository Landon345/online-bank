import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";

type AboutProps = {};

const About: React.FC = ({}: AboutProps) => {
  return (
    <Box>
      <h1>The About Component</h1>
    </Box>
  );
};

export default About;
