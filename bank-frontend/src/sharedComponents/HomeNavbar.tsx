import React, { useState } from "react";

import { Box, Icon } from "@chakra-ui/core";
import DropDown from "src/home/DropDown";

const HomeNavbar: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState("");
  const dropdown = (type: string) => {
    if (showDropDown === type) {
      setShowDropDown("");
    } else {
      setShowDropDown(type);
    }
  };

  return (
    <>
      <Box
        d="flex"
        justifyContent="flex-start"
        alignItems="center"
        bg="white"
        px="20%"
        borderBottom={showDropDown && "1px solid Gray"}
      >
        <Box
          onClick={() => dropdown("savings")}
          color={showDropDown === "savings" ? "Button" : "Headline"}
          py="22px"
          mr="20px"
          cursor="pointer"
          tabIndex={0}
        >
          Checking &amp; Savings <Icon name="chevron-down" />
        </Box>

        <Box
          onClick={() => dropdown("investing")}
          color={showDropDown === "investing" ? "Button" : "Headline"}
          py="22px"
          mr="20px"
          cursor="pointer"
          tabIndex={0}
        >
          Investing &amp; Retirement <Icon name="chevron-down" />
        </Box>
        <Box
          onClick={() => dropdown("mortgage")}
          color={showDropDown === "mortgage" ? "Button" : "Headline"}
          py="22px"
          mr="20px"
          cursor="pointer"
          tabIndex={0}
        >
          Mortgage <Icon name="chevron-down" />
        </Box>
        <Box
          onClick={() => dropdown("auto")}
          color={showDropDown === "auto" ? "Button" : "Headline"}
          py="22px"
          mr="20px"
          cursor="pointer"
          tabIndex={0}
        >
          Auto <Icon name="chevron-down" />
        </Box>
        <Box
          onClick={() => dropdown("personal")}
          color={showDropDown === "personal" ? "Button" : "Headline"}
          py="22px"
          mr="20px"
          cursor="pointer"
          tabIndex={0}
        >
          Personal Loans <Icon name="chevron-down" />
        </Box>
      </Box>
      {showDropDown === "savings" && (
        <>
          <DropDown
            text={
              <p>
                Deposit products are offered by Orion Bank
                <strong>Member FDIC.</strong>
              </p>
            }
            moreLinks={[]}
            button={{ link: "/bank/view-rates/", title: "Open Account" }}
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
      {showDropDown === "investing" && (
        <>
          <DropDown
            text={
              <p>
                Investment products offered through Orion Invest are NOT FDIC
                insured, ARE NOT BANK GUARANTEED and MAY LOSE VALUE.
              </p>
            }
            moreLinks={[]}
            open={showDropDown ? true : false}
            button={{ link: "", title: "Get Started" }}
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
                  { link: "", title: "Orion Invest API" },
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
      {showDropDown === "mortgage" && (
        <>
          <DropDown
            text={
              <p>
                Mortgage products are offered by Orion Bank{" "}
                <strong>Equal Housing Lender.</strong>
              </p>
            }
            button={{ link: "", title: "Get Started" }}
            moreLinks={[
              { link: "", title: "Complete your saved application" },
              { link: "", title: "Mortgage online services" },
            ]}
            open={showDropDown ? true : false}
            headlinesLinks={[
              {
                headline: "What We Offer",
                links: [
                  { link: "", title: "Home Purchase" },
                  { link: "", title: "Mortgage Refinancing" },
                ],
              },
              {
                headline: "Tools",
                links: [
                  { link: "", title: "Affordability Calculator" },
                  { link: "", title: "Mortgage Payment Calculator" },
                  { link: "", title: "Refinance Calculator" },
                ],
              },
              {
                headline: "Explore",
                links: [
                  { link: "", title: "Help for the First-time Homebuyer" },
                  { link: "", title: "Jumbo Loans & Rates" },
                  { link: "", title: "Money & Milestones" },
                ],
              },
              {
                headline: "You Might Like",
                links: [
                  {
                    link: "",
                    title:
                      "Going for a mortgage? Here Are the Home Loan Documents You Might Need",
                  },
                  {
                    link: "",
                    title: "What Is PMI or Private Mortgage Insurance",
                  },
                  {
                    link: "",
                    title:
                      "Home Shopping? Don't Let These 10 Comon Myths Bust Your Search",
                  },
                  { link: "", title: "View More" },
                ],
              },
            ]}
          />
        </>
      )}
      {showDropDown === "auto" && (
        <>
          <DropDown
            text=""
            moreLinks={[{ link: "", title: "Make a payment" }]}
            button={{ link: "", title: "Enroll in Online Services" }}
            open={showDropDown ? true : false}
            headlinesLinks={[
              {
                headline: "Vehicle Financing",
                links: [
                  { link: "", title: "Personal" },
                  { link: "", title: "Business" },
                ],
              },
              {
                headline: "Tools",
                links: [
                  { link: "", title: "Monthly Car Payment Calculator" },
                  { link: "", title: "Find a Dealer" },
                  { link: "", title: "Title Tracker" },
                ],
              },
              {
                headline: "Explore",
                links: [
                  { link: "", title: "Managing Your Accont Online" },
                  { link: "", title: "Lease-End Process" },
                  { link: "", title: "Vehicle Protection Benefits & Support" },
                  { link: "", title: "Money & Milestones" },
                ],
              },
              {
                headline: "Vehicle Protection",
                links: [
                  { link: "", title: "Vehicle Service Contracts" },
                  { link: "", title: "Find a Protection Product" },
                ],
              },
              {
                headline: "You Might Like",
                links: [
                  { link: "", title: "Should You Buy a New or Used Car?" },
                  {
                    link: "",
                    title: "Buying vs. Leasing: Which Is Right for You?",
                  },
                  {
                    link: "",
                    title: "5 Costly Auto Repairs and How to Avoid Them",
                  },
                  { link: "", title: "View More" },
                ],
              },
            ]}
          />
        </>
      )}
      {showDropDown === "personal" && (
        <>
          <DropDown
            text={
              <p>
                Orion Lending products are offered by Orion Bank{" "}
                <strong>Member FDIC.</strong>
              </p>
            }
            moreLinks={[
              { link: "", title: "Make a payment" },
              {
                link: "",
                title: "Information for Providers & Business Owners",
              },
            ]}
            button={{ link: "", title: "Enroll in Online Services" }}
            open={showDropDown ? true : false}
            headlinesLinks={[
              {
                headline: "Financing Options",
                links: [
                  {
                    link: "",
                    title: "Medical Treatments & Procedures",
                  },
                  { link: "", title: "Repairs & Renovations" },
                ],
              },
              {
                headline: "Explore",
                links: [
                  { link: "", title: "Managing Your Account Online" },
                  { link: "", title: "Money & Milestones" },
                ],
              },
              {
                headline: "You Might Like",
                links: [
                  {
                    link: "",
                    title:
                      "Borrowing Basics: The Ins and Outs of Loans, Mortgages, and Credit Lines",
                  },
                  {
                    link: "",
                    title:
                      "How APR Works & What It Means for Your Loan or Credit Card",
                  },
                  { link: "", title: "Your Financial Survival Action Plan" },
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
