import React from "react";
import { Flex, Link, Text} from "@chakra-ui/react";

export default function Footer () {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      wrap="wrap"
      mb={2}
      p={2}
    >
        <Text>Made with <span role="img" aria-label="purple heart emoji">💜</span> by&nbsp;
            <Link 
                href="https://github.com/megfh/100daysofgatsby2021"
                color="primary.700"
                isExternal
            >
                 megfh
            </Link>
        </Text>
    </Flex>
  );
};
