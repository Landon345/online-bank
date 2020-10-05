import React from "react";
import { Box, Icon } from "@chakra-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import HomeNavbar from "src/sharedComponents/HomeNavbar";
import CDs from "src/view-rates/CDs";

type ViewRatesProps = {};

const ViewRates: React.FC<ViewRatesProps> = ({}) => {
  return (
    <Box>
      <HomeNavbar />
      <Box bg="GrayBackground" w="100%">
        <Box
          bg="GrayBackground"
          maxW="1300px"
          margin="auto"
          minH="100vh"
          px="50px"
        >
          <Box
            display="flex"
            color="Paragraph"
            fontSize="14px"
            pt="10px"
            justifyContent="flex-end"
          >
            {" "}
            <Box mx="10px">Orion Bank: 1-877-247-2559</Box>
            <Box mx="10px">Open 24/7</Box>
            <Box mx="10px">Wait Time: 1 min</Box>
          </Box>
          <Box color="Button" fontSize="35px" mt="50px">
            Orion Bank Accounts and Rates
          </Box>
          <Box
            d="flex"
            my="20px"
            fontSize="20px"
            fontWeight="600"
            flexWrap="wrap"
          >
            <Box mr="20px">
              <Icon name="check" color="Green" /> No Account Minimums
            </Box>
            <Box mr="20px">
              <Icon name="check" color="Green" /> No monthly maintenance fees
            </Box>
            <Box>
              <Icon name="check" color="Green" /> Competitve rates
            </Box>
          </Box>
          <Box my="20px">
            Annual Percentage Yeilds (APYs) displayed are accurate as of
            10/04/2020
          </Box>
          <Box my="20px">
            <Link>Not sure where to start?</Link>
          </Box>
          <Tabs
            selectedTabClassName="tab--selected"
            selectedTabPanelClassName="tab-panel--selected"
          >
            <TabList className="tabList">
              <Tab
                className="tab"
                style={{
                  borderLeft: "1px solid black",
                  borderTop: "6px solid purple",
                }}
              >
                CDs
              </Tab>
              <Tab
                className="tab"
                style={{
                  borderTop: "6px solid blue",
                }}
              >
                Savings
              </Tab>
              <Tab
                className="tab"
                style={{
                  borderTop: "6px solid lightBlue",
                }}
              >
                Checking and Money Market
              </Tab>
              <Tab
                className="tab"
                style={{
                  borderTop: "6px solid orangeRed",
                }}
              >
                IRAs
              </Tab>
            </TabList>

            <TabPanel className="tab-panel">
              <CDs />
            </TabPanel>
            <TabPanel className="tab-panel">
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel className="tab-panel">
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel className="tab-panel">
              <h2>Any content 4</h2>
            </TabPanel>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewRates;
