import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack
} from "@chakra-ui/react";

export default function Hero() {
  const title = "AudioC0RE"
  const subtitle="Headphone sharing, reimagined. With AudioC0RE you can pick up a pair of premium AudioC0RE headphones on a city street, pay for a rental through our app, then drop them back on the ground when you’re finished!"
  const image="../../images/headphones.jpg"
  const ctaText="Learn More"
  const ctaLink="/about"
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      my={16}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
      </Stack>
      <Box w={{ base: "80%", sm: "80%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <StaticImage 
          src={image}
          alt="neon headphones"
          placeholder="blurred" 
          style={{ borderRadius: "1rem", boxShadow: "5px 5px #E2E8F0" }}
        />
      </Box>
    </Flex>
  );
}
