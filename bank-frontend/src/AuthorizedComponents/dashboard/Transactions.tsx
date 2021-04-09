import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { GetAccountTransactions } from "src/api/account/Account";
import AccountsNavbar from "src/sharedComponents/AccountsNavbar";

import DashboardBanner from "src/sharedComponents/DashboardBanner";

type TransactionsProps = {};
type TParams = {};

const Transactions: React.FC<TransactionsProps> = ({
  match,
}: RouteComponentProps<TParams>) => {
  const [transactions, setTransactions] = useState([] as any);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await GetAccountTransactions(+match.params.accountid);
      setTransactions(data);
      console.log("data :>> ", data);
    };
    fetchTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AccountsNavbar />
      <DashboardBanner />
      <Box bg="GrayBackground" pb="80px" px="50px" minH="70vh" pt="40px">
        <Box maxW="1300px" margin="auto">
          <Box fontSize="20px">Transaction History: </Box>
          {transactions.map((transaction) => (
            <Box>
              {transaction.amount} | {transaction.account_bal}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default withRouter(Transactions);
