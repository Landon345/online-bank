import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import orion from "src/assets/orion.svg";
import { DropDownButton } from "src/styled/StyledComponents";
import Sidebar from "src/sharedComponents/Sidebar";
import Login from "src/sharedComponents/Login";
import { useRecoilState } from "recoil";
import { sideLoginOpen } from "src/recoil/atoms";

type NavbarProps = {};

const Navbar: React.FC = ({}: NavbarProps) => {
  const [loginOpen, setLoginOpen] = useRecoilState(sideLoginOpen);
  return (
    <>
      {loginOpen && (
        <Sidebar>
          <Login />
        </Sidebar>
      )}
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        px="20%"
        py="11px"
      >
        <Box>
          <Link to="/">
            <img src={orion} alt="svg" height="30px" />
          </Link>
        </Box>
        <Box d="flex" justifyContent="center" alignItems="center">
          <Box mr="15px">
            <Link to="/about">About Us</Link>
          </Box>
          <Box mr="15px">Contact Us</Box>
          <Box mr="15px">
            <Link to="/help">Help</Link>
          </Box>
          <Box mr="15px">Search</Box>
          <Box mr="15px">
            <DropDownButton onClick={() => setLoginOpen(true)}>
              Log In
            </DropDownButton>
          </Box>
        </Box>
      </Box>
      <hr />
    </>
  );
};

export default Navbar;
