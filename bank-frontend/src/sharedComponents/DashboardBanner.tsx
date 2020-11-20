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

type DashboardBannerProps = {};
type TParams = {};

const DashboardBanner: React.FC = ({
  history,
}: RouteComponentProps<TParams>) => {
  const [loginOpen, setLoginOpen] = useRecoilState(sideLoginOpen);
  const [user, setUser] = useState({ firstname: "", lastname: "" });
  const [myaccounts, setmyAccounts] = useRecoilState(accounts);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accountsResponse = await GetUserAccounts();
      setmyAccounts(accountsResponse);
      const userResponse = await GetUser();
      setUser(userResponse);
    };
    setLoginOpen(false);
    fetchAccounts();
  }, []);

  const accountsTotal = () => {
    if (myaccounts.length > 0) {
      let total = 0;
      myaccounts.forEach((account) => {
        total += parseFloat(account.balance.replace(/[^0-9.-]+/g, ""));
      });
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return formatter.format(total);
    }
    return "$0.00";
  };
  return (
    <>
      <Box bg="teal.300" px="50px" mt="2px">
        <Box maxW="1300px" margin="auto">
          <Box
            display="flex"
            fontSize="14px"
            pt="10px"
            justifyContent="flex-end"
            color="Black"
          >
            {" "}
            <Box mx="10px">Orion Bank: 1-877-247-2559</Box>
            <Box mx="10px">Open 24/7</Box>
            <Box mx="10px">Wait Time: 1 min</Box>
          </Box>
          <Box d="flex" justifyContent="space-between" width="90%" py="40px">
            <Box d="flex" flexDir="column">
              <Box fontSize="26px">SnapShot</Box>
              <Box>Hello {user.firstname}</Box>
            </Box>

            <Box d="flex" flexDir="column">
              <Box fontSize="26px" fontWeight="650">
                Total Balance:{" "}
              </Box>
              <Box>{accountsTotal()}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default withRouter(DashboardBanner);
