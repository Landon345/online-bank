import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import orion from "src/assets/orion.svg";
import { DropDownButton } from "src/styled/StyledComponents";
import Sidebar from "src/sharedComponents/Sidebar";
import Login from "src/sharedComponents/Login";
import { useRecoilState } from "recoil";
import { sideLoginOpen } from "src/recoil/atoms";
import { SendLogout } from "src/api/auth/Auth";

type NavbarProps = {};
type TParams = {};

const Navbar: React.FC = ({ history }: RouteComponentProps<TParams>) => {
  const [loginOpen, setLoginOpen] = useRecoilState(sideLoginOpen);
  const Logout = async () => {
    const response = await SendLogout();
    localStorage.removeItem("api_key");
    history.push("/");
  };
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
            {localStorage.getItem("api_key") ? (
              <DropDownButton onClick={Logout}>Logout</DropDownButton>
            ) : (
              <DropDownButton onClick={() => setLoginOpen(true)}>
                Log In
              </DropDownButton>
            )}
          </Box>
        </Box>
      </Box>
      <hr />
    </>
  );
};

export default withRouter(Navbar);
