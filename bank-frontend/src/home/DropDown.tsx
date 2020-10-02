import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/core";
import { DropDownContainer } from "src/home/style";

type link = {
  link: string;
  title: string;
};
type headlineLinks = {
  headline: string;
  links: Array<link>;
};
type DropDownProps = {
  text: string;
  headlinesLinks: Array<headlineLinks>;
  open: boolean;
  button: string;
};

const DropDown: React.FC<DropDownProps> = ({
  text,
  open,
  headlinesLinks,
  button,
}) => {
  return (
    <>
      <DropDownContainer open={open}>
        <Box mx="5%">
          <h1>{text}</h1>
          <Box d="grid" gridTemplateColumns="1fr 1fr 1fr 1fr">
            {headlinesLinks.map((headlineLink) => (
              <Box>
                <h3>{headlineLink.headline}</h3>
                {headlineLink.links.map((link) => (
                  <Box d="flex" flexDir="column">
                    <Link>{link.title}</Link>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Button>{button}</Button>
        </Box>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
