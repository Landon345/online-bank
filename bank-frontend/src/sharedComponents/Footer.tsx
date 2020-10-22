import React from "react";
import { Box } from "@chakra-ui/core";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box minH="20vh" bg="GrayBackground">
      <Box d="flex" justifyContent="center" alignItems="center">
        <Box p="20px">My footer</Box>
        <Box p="20px"></Box>
        <Box p="20px"></Box>
        <Box p="20px"></Box>
      </Box>
    </Box>
  );
};

export default Footer;
