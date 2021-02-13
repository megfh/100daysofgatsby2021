import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from 'gatsby'; 

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link to="/">
        <Text fontSize="xl" fontWeight="extrabold" letterSpacing="wide">
          audioCORE
        </Text>
      </Link>
    </Box>
  );
}