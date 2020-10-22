import React, { useState } from "react";
import { Box, Icon } from "@chakra-ui/core";

type FAQ = {
  question: string;
  answer: Array<string>;
};
type FAQsProps = {
  faqs: Array<FAQ>;
};

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  return (
    <Box bg="GrayBackground">
      <Box fontSize="20px">FAQs</Box>
      {faqs.map((faq) => (
        <Question
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </Box>
  );
};

const Question: React.FC<FAQ> = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Box
        my="5px"
        py="5px"
        color="Link"
        cursor="pointer"
        tabIndex={0}
        onClick={() => setShow(!show)}
      >
        <Icon name={show ? "chevron-down" : "chevron-right"} />
        {question}
      </Box>
      {show && (
        <Box>
          {answer.map((para) => (
            <Box ml="30px" my="8px">
              {para}
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default FAQs;
