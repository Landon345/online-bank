import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/core";
import { DropDownButton } from "src/styled/StyledComponents";
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
  text: any;
  moreLinks: Array<link>;
  headlinesLinks: Array<headlineLinks>;
  open: boolean;
  button: link;
};

const DropDown: React.FC<DropDownProps> = ({
  text,
  open,
  headlinesLinks,
  moreLinks,
  button,
}) => {
  return (
    <>
      <DropDownContainer open={open}>
        <Box mx="20%" mt="20px" d="flex">
          <Box
            d="grid"
            gridTemplateColumns="1fr 1fr 1fr 1fr"
            gridGap={10}
            mr="50px"
            flex={0.75}
          >
            {headlinesLinks.map((headlineLink) => (
              <Box>
                <Box color="Headline" fontSize="16px" fontWeight="700">
                  {headlineLink.headline}
                </Box>
                <Box d="flex" flexDir="column">
                  {headlineLink.links.map((link) => (
                    <Box mt="17px" fontSize="14px" fontWeight="600">
                      <Link>{link.title}</Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box flex={0.25}>
            <Box mb="20px">
              <Link to={button.link}>
                <DropDownButton>{button.title}</DropDownButton>
              </Link>
            </Box>
            {moreLinks.map((link) => (
              <Box my="17px" fontSize="18px" fontWeight="600">
                <Link>{link.title}</Link>
              </Box>
            ))}
            {text}
          </Box>
        </Box>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
