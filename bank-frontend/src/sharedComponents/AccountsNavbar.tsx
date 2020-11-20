import React, { useState, useEffect } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import { GetUserAccounts, GetUser } from "src/api/account/Account";
import orion from "src/assets/orion.svg";
import { DropDownButton } from "src/styled/StyledComponents";
import Sidebar from "src/sharedComponents/Sidebar";
import Login from "src/sharedComponents/Login";
import { useRecoilState } from "recoil";
import { sideLoginOpen, accounts } from "src/recoil/atoms";
import { SendLogout } from "src/api/auth/Auth";

type AccountsNavbarProps = {};
type TParams = {};

const AccountsNavbar: React.FC = ({
  history,
}: RouteComponentProps<TParams>) => {
  return (
    <>
      <Box
        d="flex"
        justifyContent="flex-start"
        alignItems="center"
        px="10%"
        py="10px"
        fontSize="14px"
        fontWeight="550"
        boxShadow="0px 3px 5px 0.1px #aaa"
      >
        <Box mr="15px">
          <Link to="/bank-transfers">Transfers</Link>
        </Box>
        <Box mr="15px">
          <Link to="/account-payments">Payments</Link>
        </Box>
        <Box mr="15px">
          <Link to="/account-deposits">Deposits</Link>
        </Box>
        <Box mr="15px">
          <Link>Statements and Tax Forms</Link>
        </Box>
        <Box mr="15px">
          <Link>Stop Payments</Link>
        </Box>
        <Box mr="15px">
          <Link>Overdraft Transfer Service</Link>
        </Box>
        <Box mr="15px">
          <Link>Checks and Debit Cards</Link>
        </Box>
        <Box mr="15px">
          <Link>Deposit Slips</Link>
        </Box>
      </Box>
      <hr />
    </>
  );
};

export default withRouter(AccountsNavbar);
