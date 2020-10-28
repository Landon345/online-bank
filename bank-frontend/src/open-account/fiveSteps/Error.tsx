import React from "react";
import { Box } from "@chakra-ui/core";

function Error({ touched, message }) {
  const errorMessage = () => {
    if (!touched) {
      return <div style={{ color: "tomato", textAlign: "left" }}>&nbsp;</div>;
    } else if (message) {
      return (
        <div style={{ color: "tomato", textAlign: "left" }}>{message}</div>
      );
    } else {
      return <div style={{ color: "green", textAlign: "left" }}>Good</div>;
    }
  };

  return (
    <Box fontSize="12px" ml="20px">
      {errorMessage()}
    </Box>
  );
}
export const checkError = (touched, message) => {
  if (!touched) {
    return false;
  }
  if (message) {
    return true;
  } else if (!message && touched) {
    return false;
  }
  if (touched) {
    return true;
  }
  return false;
};
export default Error;
