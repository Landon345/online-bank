import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";

type NavbarProps = {};

const Navbar: React.FC = ({}: NavbarProps) => {
  return (
    <Box d="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Link to="/">LOGO</Link>
      </Box>
      <Box d="flex" justContent="center">
        <Link to="/about">About Us</Link>
        <Box>Contact Us</Box>
        <Link to="/help">Help</Link>
        <Box>Search</Box>
        <Button>Log In</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
