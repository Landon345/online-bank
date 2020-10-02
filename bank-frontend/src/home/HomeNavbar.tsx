import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Icon } from "@chakra-ui/core";
import DropDown from "src/home/DropDown";

type HomeNavbarProps = {};

const HomeNavbar: React.FC = ({}: HomeNavbarProps) => {
  const [showDropDown, setShowDropDown] = useState("");
  const dropdown = (type: string) => {
    if (showDropDown == type) {
      setShowDropDown("");
    } else {
      setShowDropDown(type);
    }
  };

  return (
    <>
      <Box d="flex" justifyContent="flex-start" alignItems="center" bg="white">
        <Box
          onClick={() => dropdown("savings")}
          color={showDropDown == "savings" ? "Button" : ""}
          p="10px"
          mx="10px"
          cursor="pointer"
        >
          Checking &amp; Savings <Icon name="chevron-down" />
        </Box>
        <Box
          onClick={() => dropdown("investing")}
          color={showDropDown == "investing" ? "Button" : ""}
          p="10px"
          mx="10px"
          cursor="pointer"
        >
          Investing &amp; Retirement <Icon name="chevron-down" />
        </Box>
        <Box
          onClick={() => dropdown("mortgage")}
          color={showDropDown == "mortgage" ? "Button" : ""}
          p="10px"
          mx="10px"
          cursor="pointer"
        >
          Mortgage <Icon name="chevron-down" />
        </Box>
        <Box
          onClick={() => dropdown("auto")}
          color={showDropDown == "auto" ? "Button" : ""}
          p="10px"
          mx="10px"
          cursor="pointer"
        >
          Auto <Icon name="chevron-down" />
        </Box>
        <Box
          onClick={() => dropdown("personal")}
          color={showDropDown == "personal" ? "Button" : ""}
          p="10px"
          mx="10px"
          cursor="pointer"
        >
          Personal Loans <Icon name="chevron-down" />
        </Box>
      </Box>
      {showDropDown == "savings" && (
        <>
          <DropDown
            text="savings dropdown"
            button="Open Account"
            open={showDropDown ? true : false}
            headlinesLinks={[
              {
                headline: "What We Offer",
                links: [
                  {
                    link: "/bank/online-savings-account",
                    title: "Online Savings",
                  },
                  { link: "", title: "Money Market" },
                  { link: "", title: "Interest Checking" },
                  { link: "", title: "HighYield CD" },
                  { link: "", title: "Raise Your Rate CD" },
                  { link: "", title: "No Penalty CD" },
                ],
              },
              {
                headline: "Banking Better",
                links: [
                  { link: "", title: "Overview" },
                  { link: "", title: "Learn about Trusts" },
                  { link: "", title: "Compare CDs" },
                  { link: "", title: "Compare Savings Accounts" },
                ],
              },
              {
                headline: "Explore",
                links: [
                  { link: "", title: "How to Bank With Us" },
                  { link: "", title: "Why Bank With Us" },
                  { link: "", title: "ATM Locator" },
                  { link: "", title: "Money & Milestones" },
                ],
              },
              {
                headline: "You Might Like",
                links: [
                  {
                    link: "",
                    title:
                      "CDs cs. Savings: Where to Age Your Money for Your Short-Term Goals",
                  },
                  {
                    link: "",
                    title:
                      "Your A to Z Guide on How to Save Money on Just About Everything",
                  },
                  {
                    link: "",
                    title:
                      "Should You Open Multiple Savings Accounts? Learn the Pros and Cons Here",
                  },
                  { link: "", title: "View More" },
                ],
              },
            ]}
          />
        </>
      )}
      {showDropDown == "investing" && (
        <>
          <DropDown
            text="investing dropdown"
            open={showDropDown ? true : false}
            button="Open Account"
            headlinesLinks={[
              {
                headline: "What We Offer",
                links: [
                  {
                    link: "",
                    title: "Managed Portfolios",
                  },
                  { link: "", title: "Self-Directed Trading" },
                  { link: "", title: "Forex" },
                ],
              },
              {
                headline: "Investment Choices",
                links: [
                  { link: "", title: "Stocks & ETFs" },
                  { link: "", title: "Commission-free ETFs" },
                  { link: "", title: "Options" },
                  { link: "", title: "Bonds" },
                  { link: "", title: "Mutual Funds" },
                  { link: "", title: "Margin Account" },
                  { link: "", title: "Securities Income Program" },
                ],
              },
              {
                headline: "Explore",
                links: [
                  { link: "", title: "Investing With Us" },
                  { link: "", title: "IRA Overview" },
                  { link: "", title: "Money & Milestones" },
                  { link: "", title: "Ally Invest API" },
                ],
              },
              {
                headline: "You Might Like",
                links: [
                  {
                    link: "",
                    title: "The Importance of Rebalancing Your Portfolio",
                  },
                  {
                    link: "",
                    title: "The Tax Implications of ETFs vs. Mutual Funds",
                  },
                  {
                    link: "",
                    title:
                      "8 REtirement Savings Strategies From Our FOMO Free Financial Future Conference",
                  },
                  { link: "", title: "View More" },
                ],
              },
            ]}
          />
        </>
      )}
      {showDropDown == "mortgage" && (
        <>
          <DropDown
            text="mortgage dropdown"
            button="Open Account"
            open={showDropDown ? true : false}
            headlinesLinks={[
              { headline: "What We Offer", links: [{ link: "", title: "" }] },
              { headline: "What We Offer", links: [{ link: "", title: "" }] },
              { headline: "What We Offer", links: [{ link: "", title: "" }] },
            ]}
          />
        </>
      )}
      {showDropDown == "auto" && (
        <>
          <DropDown
            text="auto dropdown"
            button="Open Account"
            open={showDropDown ? true : false}
            headlinesLinks={[
              { headline: "What We Offer", links: [{ link: "", title: "" }] },
              { headline: "What We Offer", links: [{ link: "", title: "" }] },
              { headline: "What We Offer", links: [{ link: "", title: "" }] },
            ]}
          />
        </>
      )}
      {showDropDown == "personal" && (
        <>
          <DropDown
            text="personal dropdown"
            button="Open Account"
            open={showDropDown ? true : false}
            headlinesLinks={[
              {
                headline: "What We Offer",
                links: [
                  {
                    link: "/bank/online-savings-account",
                    title: "Online Savings",
                  },
                  { link: "", title: "Money Market" },
                  { link: "", title: "Interest Checking" },
                  { link: "", title: "HighYield CD" },
                  { link: "", title: "Raise Your Rate CD" },
                  { link: "", title: "No Penalty CD" },
                ],
              },
              {
                headline: "Banking Better",
                links: [
                  { link: "", title: "Overview" },
                  { link: "", title: "Learn about Trusts" },
                  { link: "", title: "Compare CDs" },
                  { link: "", title: "Compare Savings Accounts" },
                ],
              },
              {
                headline: "Explore",
                links: [
                  { link: "", title: "How to Bank With Us" },
                  { link: "", title: "Why Bank With Us" },
                  { link: "", title: "ATM Locator" },
                  { link: "", title: "Money & Milestones" },
                ],
              },
              {
                headline: "You Might Like",
                links: [
                  {
                    link: "",
                    title:
                      "CDs cs. Savings: Where to Age Your Money for Your Short-Term Goals",
                  },
                  {
                    link: "",
                    title:
                      "Your A to Z Guide on How to Save Money on Just About Everything",
                  },
                  {
                    link: "",
                    title:
                      "Should You Open Multiple Savings Accounts? Learn the Pros and Cons Here",
                  },
                  { link: "", title: "View More" },
                ],
              },
            ]}
          />
        </>
      )}
    </>
  );
};

export default HomeNavbar;
