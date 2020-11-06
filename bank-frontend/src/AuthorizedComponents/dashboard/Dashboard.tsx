import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import {
  RadioInput,
  RadioLabel,
  ContinueButton,
  TextInput,
  TextLabel,
} from "src/open-account/style";
import { useRecoilState } from "recoil";
import { sideLoginOpen } from "src/recoil/atoms";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [loginOpen, setLoginOpen] = useRecoilState(sideLoginOpen);

  useEffect(() => {
    setLoginOpen(false);
  }, []);
  return (
    <>
      <h1>The dashboard</h1>
    </>
  );
};

export default Dashboard;
