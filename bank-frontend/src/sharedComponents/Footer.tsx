import React from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

type FooterProps = {};

const FooterLinks = {
  About: [
    "Our Company",
    "Social Impact",
    "Careers",
    "Investor Relations",
    "Press Room",
    "Suppliers",
  ],
  Business: [
    "Corporate Finance",
    "Dealer Services",
    "Orion Ventures",
    "Orion Lending",
  ],
  Learn: ["Financial Life Tips & Tools", "Do It Right", "Wallet Wise"],
  Resources: [
    "Contact",
    "Give Feedback",
    "ATM Locator",
    "Site Map",
    "Shop Orion Gear",
  ],
  Terms: ["Orion Invest Disclosures", "Legal", "Privacy", "Security"],
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box minH="20vh" bg="white">
      <Box mx="10%" mt="20px" d="flex" justifyContent="center">
        <Box
          d="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
          gridGap={10}
          mr="50px"
          fontSize="15px"
        >
          <Box p="20px" d="flex" flexDir="column">
            <Box>ABOUT</Box>
            {FooterLinks.About.map((title) => (
              <Box mt="17px" fontSize="14px" fontWeight="600">
                <Link>{title}</Link>
              </Box>
            ))}
          </Box>
          <Box p="20px" d="flex" flexDir="column">
            <Box>BUSINESS SOLUTIONS</Box>
            {FooterLinks.Business.map((title) => (
              <Box mt="17px" fontSize="14px" fontWeight="600">
                <Link>{title}</Link>
              </Box>
            ))}
          </Box>
          <Box p="20px" d="flex" flexDir="column">
            <Box>LEARN</Box>
            {FooterLinks.Learn.map((title) => (
              <Box mt="17px" fontSize="14px" fontWeight="600">
                <Link>{title}</Link>
              </Box>
            ))}
          </Box>
          <Box p="20px" d="flex" flexDir="column">
            <Box>RESOURCES</Box>
            {FooterLinks.Resources.map((title) => (
              <Box mt="17px" fontSize="14px" fontWeight="600">
                <Link>{title}</Link>
              </Box>
            ))}
          </Box>
          <Box p="20px" d="flex" flexDir="column">
            <Box>TERMS &amp; PRIVACY</Box>
            {FooterLinks.Terms.map((title) => (
              <Box mt="17px" fontSize="14px" fontWeight="600">
                <Link>{title}</Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box mx="10%" mt="20px">
        <hr />
        <Box mb="20px" mt="40px">
          A FEW THINGS YOU SHOULD KNOW
        </Box>
        <Box mb="20px">
          Orion Financial Inc. (NYSE: Orion) is a leading digital financial
          services company. Orion Bank, the company's direct banking subsidiary,
          offers an array of deposit, personal lending and mortgage products and
          services. Orion Bank is a Member FDIC and Equal Housing Lender , NMLS
          ID 181005. Credit products and any applicable Mortgage credit and
          collateral are subject to approval and additional terms and conditions
          apply. Programs, rates and terms and conditions are subject to change
          at any time without notice.
        </Box>
        <Box mb="20px">
          Securities products and services are offered through Orion Invest
          Securities LLC, member FINRA and SIPC. View Security Disclosures
        </Box>
        <Box mb="20px">
          Advisory products and services are offered through Orion Invest
          Advisors, Inc. an SEC registered investment advisor. View all Advisory
          disclosures
        </Box>
        <Box mb="20px">
          Foreign exchange (Forex) products and services are offered to
          self-directed investors through Orion Invest Forex LLC. NFA Member (ID
          #0408077), who acts as an introducing broker to GAIN Capital Group,
          LLC ("GAIN Capital"), a registered FCM/RFED and NFA Member (ID
          #0339826). Forex accounts are held and maintained at GAIN Capital.
          Forex accounts are NOT PROTECTED by the SIPC. View all Forex
          disclosures
        </Box>
        <Box mb="20px">
          Forex, options and other leveraged products involve significant risk
          of loss and may not be suitable for all investors. Products that are
          traded on margin carry a risk that you may lose more than your initial
          deposit
        </Box>
        <Box mb="20px">
          Products offered by Orion Invest Advisors, Orion Invest Securities,
          and Orion Invest Forex are NOT FDIC INSURED, NOT BANK GUARANTEED, and
          MAY LOSE VALUE.
        </Box>
        <Box mb="20px">
          App Store is a service mark of Apple Inc. Google Play is a trademark
          of Google Inc. Amazon Appstore is a trademark of Amazon.com, Inc., or
          its affiliates. Windows Store is a trademark of the Microsoft group of
          companies.
        </Box>
        <Box mb="20px">
          Zelle and the Zelle related marks are wholly owned by Early Warning
          Services, LLC and are used herein under license.
        </Box>
        <Box mb="100px">
          From MONEY®, November 2019© 2019 Meredith Corporation All rights
          reserved. MONEY® is a registered trademark of Meredith Corporation and
          is used under license. MONEY® and Meredith Corporation are not
          affiliated with, and do not endorse products or services of, Orion
          Bank.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
