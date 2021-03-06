import React from "react";
import { Box } from "@chakra-ui/core";
import { useRecoilState } from "recoil";
import { sideLoginOpen } from "src/recoil/atoms";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  // eslint-disable-next-line
  const [loginOpen, setLoginOpen] = useRecoilState(sideLoginOpen);

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      height="100vh"
      width="100vw"
      display="flex"
    >
      <Box
        flex={0.6}
        opacity={0.7}
        bg="Gray"
        onClick={() => setLoginOpen(false)}
      ></Box>
      <Box flex={0.4} bg="White">
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
