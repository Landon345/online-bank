import React, { useState, useEffect } from "react";
import { Box, Icon } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sideLoginOpen, accounts } from "src/recoil/atoms";
import AccountsNavbar from "src/sharedComponents/AccountsNavbar";
import AccountCard from "src/AuthorizedComponents/dashboard/AccountCard";
import DashboardBanner from "src/sharedComponents/DashboardBanner";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [myaccounts, setmyAccounts] = useRecoilState(accounts);

  return (
    <>
      <AccountsNavbar />
      <DashboardBanner />
      <Box bg="GrayBackground" pb="80px" px="50px" minH="70vh" pt="40px">
        <Box maxW="1300px" margin="auto">
          <Box fontSize="20px">Accounts: </Box>
          {myaccounts.map((account) => (
            <AccountCard account={account} key={account.account_id} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
