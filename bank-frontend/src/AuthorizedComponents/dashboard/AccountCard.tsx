import React, { useState, useEffect } from "react";
import { Box, Icon } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sideLoginOpen } from "src/recoil/atoms";
import AccountsNavbar from "src/sharedComponents/AccountsNavbar";
import { accountTypeMapping } from "src/data/MappingData";
import { ContinueButton } from "src/open-account/style";

type AccountCardProps = {
  account: any;
};

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  return (
    <>
      <Box
        border="1px solid black"
        p="20px"
        my="10px"
        bg="White"
        d="flex"
        justifyContent="space-between"
      >
        <Box>
          <Box fontSize="20px" fontWeight="650" mb="5px">
            {accountTypeMapping[account.cd_term] || account.account_category}
          </Box>
          <Box mb="10px">Account Number: {account.account_id}</Box>
          <Box fontSize="18px">Balance: {account.balance}</Box>
        </Box>
        <Box>
          <ContinueButton>
            <Link to={`/account/${account.account_id}`}>Transactions</Link>
          </ContinueButton>
        </Box>
      </Box>
    </>
  );
};

export default AccountCard;
